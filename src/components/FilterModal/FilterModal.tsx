import React from "react";
import "./FilterModal.scss";
import { Divider, Slider } from "@mui/material";
import { getNumberAndCurrency } from "../../assets/util";
import { Button } from "../Button/Button";
import {
  items_categories,
  items_origin_of_manufacture,
  maxPrice,
} from "../../assets/constants";
import { useFilterModal } from "./hooks/useFilterModal";

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

export const FilterModal = ({
  setBadgeNumber,
  getProducts,
  setFilter,
  filter,
}: FilterModalProps) => {
  const { getCheckBoxsGrid, handleChangePrice, onClear, onApply } =
    useFilterModal({ setBadgeNumber, getProducts, setFilter, filter });
  return (
    <div className="filter-modal-container">
      <h1 className="filter-modal-header bold ">Filter content just for you</h1>
      <div className="filter-modal-options-container">
        <label className="medium">Categories</label>
        <div className="filter-modal-options">
          {getCheckBoxsGrid(items_categories, "categories")}
        </div>
      </div>
      <div className="filter-modal-options-container">
        <label className="medium">origin of manufacture</label>
        <div className="filter-modal-options">
          {getCheckBoxsGrid(items_origin_of_manufacture, "originOfManufacture")}
        </div>
      </div>
      <div className="filter-modal-options-container">
        <label className="medium">Price Range</label>
        <div className="price-container">
          <fieldset>{getNumberAndCurrency(filter.price[0])}</fieldset>
          <fieldset>{getNumberAndCurrency(filter.price[1])}</fieldset>
        </div>
        <div className="filter-modal-price-slider-container">
          <Slider
            className="filter-modal-price-slider"
            value={filter.price}
            onChange={handleChangePrice}
            disableSwap
            valueLabelDisplay="off"
            min={0}
            max={maxPrice}
          />
        </div>
      </div>
      <Divider />
      <div className="flex justify-center align-center g30">
        <Button onClick={onClear} text="Clear" buttonType="secondary" />
        <Button onClick={onApply} text="Apply Filters" />
      </div>
    </div>
  );
};
