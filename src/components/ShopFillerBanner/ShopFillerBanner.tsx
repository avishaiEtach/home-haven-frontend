import React, { useMemo, useState } from "react";
import "./ShopFillerBanner.scss";
import { useModal } from "../../context/Modal/ModalContext";
import { Badge, Divider, MenuItem, TextField } from "@mui/material";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { items_show_options, sort_options } from "../../assets/constants";
import { useShopFillerBanner } from "./hooks/useShopFillerBanner";

interface ShopFillerBannerProps {
  currentPage: number;
  amount: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  showOption: number;
  setShowOption: React.Dispatch<React.SetStateAction<number>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  badgeNumber: number;
}

export const ShopFillerBanner = ({
  currentPage,
  amount,
  setCurrentPage,
  showOption,
  setShowOption,
  sortOption,
  setSortOption,
  badgeNumber,
}: ShopFillerBannerProps) => {
  const { openModal } = useModal();
  const { getPaginationInfo } = useShopFillerBanner({
    currentPage,
    amount,
    setCurrentPage,
    showOption,
    setShowOption,
    sortOption,
    setSortOption,
    badgeNumber,
  });
  return (
    <div className="shop-filler-banner-main-container">
      <div className="container shop-filler-banner-container">
        <div className="shop-filler-banner-filter-container">
          <div
            onClick={() => openModal("filterModal")}
            className="flex g10 align-center shop-filler-banner-filter"
          >
            <Badge overlap="circular" badgeContent={badgeNumber} max={999}>
              <TbAdjustmentsHorizontal />
            </Badge>
            <span>Filter</span>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div>
            <span>{getPaginationInfo}</span>
          </div>
        </div>
        <div className="shop-filler-banner-short-container flex g20 align-center">
          <div className="flex g10 align-center">
            <label>Show</label>
            <TextField
              className="shop-filler-banner-input"
              value={showOption}
              select
              onChange={(ev) => {
                setShowOption(+ev.target.value);
                setCurrentPage(1);
              }}
            >
              {items_show_options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="flex g10 align-center">
            <label>Sort by</label>
            <TextField
              className="shop-filler-banner-input"
              value={sortOption}
              select
              onChange={(ev) => {
                setSortOption(ev.target.value);
              }}
            >
              {sort_options.map((option, index) => (
                <MenuItem
                  disabled={option.isLabel}
                  className={`${option.isLabel ? "sort-option-menu-item" : ""}`}
                  key={index}
                  value={option.value}
                >
                  {option.title}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>
    </div>
  );
};
