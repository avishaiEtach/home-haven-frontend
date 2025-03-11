import { Divider, IconButton, Slide } from "@mui/material";
import React from "react";
import { useBackdrop } from "../../context/Backdrop/BackdropContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { getNumberAndCurrency } from "../../assets/util";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { useCart } from "./hooks/useCart";
import "./Cart.scss";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const { isBackdropOpen, closeBackdrop } = useBackdrop();
  const { cart } = useSelector((state: RootState) => state.userActionModel);
  const { cartTotalPrice } = useCart();

  return (
    <Slide in={isBackdropOpen} timeout={500} direction="left">
      <div
        onClick={(ev) => {
          ev.stopPropagation();
        }}
        className="cart-main-container"
      >
        <div className="flex align-center space-between cart-header-container">
          <h2 className="semi-bold cart-main-header">Shopping Cart</h2>
          <IconButton onClick={closeBackdrop}>
            <HighlightOffIcon />
          </IconButton>
        </div>
        <Divider />
        <div className="cart-main-content-container">
          <div className="cart-content-container">
            {Object.entries({ ...cart }).map(([cartItemKey, cartItemValue]) => (
              <CartItem
                cartItemKey={cartItemKey}
                cartItemValue={cartItemValue}
              />
            ))}
          </div>
          <div className="flex align-center cart-subtotal-container">
            <span>Subtotal</span>
            <span className="cart-total-price semi-bold ">
              {getNumberAndCurrency(cartTotalPrice)}
            </span>
          </div>
        </div>
        <Divider />
        <div className="flex cart-check-out-container">
          <Button text="check out" />
        </div>
      </div>
    </Slide>
  );
};
