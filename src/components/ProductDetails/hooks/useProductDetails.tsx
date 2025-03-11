import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonMui from "@mui/material/Button";
import { maxCartItemCount } from "../../../assets/constants";

export const useProductDetails = () => {
  const [productItemNumber, setProductItemNumber] = useState(1);

  const calculateDiscountedPrice = (
    price: number,
    discount: number
  ): number => {
    if (discount < 0 || discount > 100) {
      throw new Error("Discount should be between 0 and 100.");
    }

    const discountAmount = (price * discount) / 100;
    const newPrice = price - discountAmount;

    return newPrice;
  };

  const NumberButton = () => {
    return (
      <fieldset className="number-button-container">
        <ButtonMui
          className="number-button-adjust-button"
          color="inherit"
          onClick={(ev) => {
            if (productItemNumber > 1) {
              setProductItemNumber((prev) => prev - 1);
            }
          }}
        >
          <RemoveIcon fontSize="small" />
        </ButtonMui>
        <span className="number-button-number">{productItemNumber}</span>
        <ButtonMui
          color="inherit"
          onClick={(ev) => {
            if (productItemNumber <= maxCartItemCount) {
              setProductItemNumber((prev) => prev + 1);
            }
          }}
          className="number-button-adjust-button"
        >
          <AddIcon fontSize="small" />
        </ButtonMui>
      </fieldset>
    );
  };

  function isInLastMonth(isoDate: string): boolean {
    const date = new Date(isoDate);
    const now = new Date();
    const lastMonthDate = new Date();
    lastMonthDate.setDate(now.getDate() - 30);
    return date >= lastMonthDate && date <= now;
  }

  return {
    calculateDiscountedPrice,
    NumberButton,
    isInLastMonth,
    productItemNumber,
  };
};
