import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useModal } from "../../../context/Modal/ModalContext";

export const useFavoriteModal = () => {
  const { favorite } = useSelector((state: RootState) => state.userActionModel);
  const { closeModal } = useModal();
  const favoriteLength = Object.keys(favorite).length;
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<{ [key: string]: Product }>(favorite);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (favoriteLength === 0) {
      closeModal("favoriteModal");
    }
  }, [favoriteLength]);

  const delayedSearch = useCallback(
    debounce((value: string) => {
      let debounceFilter = {};
      if (value === "") {
        setFilter(favorite);
      } else {
        for (const key in favorite) {
          if (
            favorite[key].shortName.toLowerCase().includes(value.toLowerCase())
          ) {
            debounceFilter = { ...debounceFilter, [key]: favorite[key] };
          }
        }
        setFilter(debounceFilter);
      }
      setLoading(false);
    }, 1000),
    []
  );

  const onChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = ev.target;
    setSearch(value);
    setLoading(true);
    delayedSearch(value);
  };

  return { favoriteLength, search, filter, loading, onChange };
};
