import React, { useEffect } from "react";
import { getNumberAndCurrency } from "../../assets/util";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { deleteCartItem } from "../../store/userActions.actions";
import { useBackdrop } from "../../context/Backdrop/BackdropContext";
import CancelIcon from "@mui/icons-material/Cancel";
import { useCart } from "../Cart/hooks/useCart";
import "./CartItem.scss";

interface CartItemProps {
  cartItemKey: string;
  cartItemValue: {
    productName: string;
    productCount: number;
    productImage: string;
    productPrice: number;
  };
}

export const CartItem = ({ cartItemKey, cartItemValue }: CartItemProps) => {
  const { cart } = useSelector((state: RootState) => state.userActionModel);
  const dispatch = useDispatch();
  const { closeBackdrop } = useBackdrop();
  const { NumberButton } = useCart();

  return (
    <div className="flex g30 align-center cart-item-main-container">
      <div className="cart-item-image-container">
        <img src={cartItemValue.productImage} alt="" />
      </div>
      <div className="flex full column g10">
        <span>{cartItemValue.productName}</span>
        <div className="flex align-center">
          <NumberButton
            number={cartItemValue.productCount}
            productId={cartItemKey}
          />
          <span className="cart-item-price medium">
            {getNumberAndCurrency(cartItemValue.productPrice)}
          </span>
        </div>
      </div>
      <IconButton
        onClick={() => {
          dispatch(deleteCartItem(cartItemKey, cart));
          if (!Object.keys(cart).length) {
            closeBackdrop();
          }
        }}
      >
        <CancelIcon />
      </IconButton>
    </div>
  );
};
