import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { maxPrice, minDistance, minPrice } from "../../../assets/constants";
import { useModal } from "../../../context/Modal/ModalContext";

interface Filter {
  originOfManufacture: string[];
  price: number[];
  categories: string[];
}

interface FilterModalProps {
  setBadgeNumber: React.Dispatch<React.SetStateAction<number>>;
  getProducts: (filter: {} | Filter) => Promise<void>;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const useFilterModal = ({
  setBadgeNumber,
  getProducts,
  setFilter,
  filter,
}: FilterModalProps) => {
  const { closeModal } = useModal();

  const handleChangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], maxPrice - minDistance);
        setFilter((prev) => {
          return { ...prev, price: [clamped, clamped + minDistance] };
        });
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setFilter((prev) => {
          return { ...prev, price: [clamped - minDistance, clamped] };
        });
      }
    } else {
      setFilter((prev) => {
        return { ...prev, price: newValue as number[] };
      });
    }
  };

  const getCheckBoxsGrid = (
    CheckBoxsArray: string[],
    dependency: "categories" | "originOfManufacture"
  ) => {
    return CheckBoxsArray.map((item, index) => (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            onChange={(ev) => {
              const { checked, name } = ev.target;
              if (checked) {
                setFilter((prev) => {
                  return prev[dependency].includes(name.toLocaleLowerCase())
                    ? prev
                    : {
                        ...prev,
                        [dependency]: [
                          ...prev[dependency],
                          name.toLocaleLowerCase(),
                        ],
                      };
                });
              } else {
                setFilter((prev) => {
                  return {
                    ...prev,
                    [dependency]: prev[dependency].filter(
                      (dependencyName) =>
                        dependencyName !== name.toLocaleLowerCase()
                    ),
                  };
                });
              }
            }}
            name={item}
            checked={filter[dependency].includes(item.toLocaleLowerCase())}
          />
        }
        label={item}
      />
    ));
  };

  const onClear = () => {
    setFilter({
      categories: [],
      originOfManufacture: [],
      price: [minPrice, maxPrice],
    });
    getProducts({});
    closeModal("filterModal");
    setBadgeNumber(0);
  };

  const onApply = () => {
    const { categories, originOfManufacture, price } = filter;
    getProducts(filter);
    closeModal("filterModal");
    if (price[0] !== minPrice || price[1] !== maxPrice) {
      setBadgeNumber(categories.length + originOfManufacture.length + 1);
    } else {
      setBadgeNumber(categories.length + originOfManufacture.length);
    }
  };

  return { getCheckBoxsGrid, handleChangePrice, onClear, onApply };
};
