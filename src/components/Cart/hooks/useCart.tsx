import React, { useEffect, useMemo, useState } from "react";
import { useBackdrop } from "../../../context/Backdrop/BackdropContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { changeCartItemCount } from "../../../store/userActions.actions";
import ButtonMui from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { maxCartItemCount } from "../../../assets/constants";
import { useSocketContext } from "../../../context/Socket/SocketContext";

export const useCart = () => {
  const { cart } = useSelector((state: RootState) => state.userActionModel);
  const dispatch = useDispatch();

  const onClickNumber = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    number: number,
    productId: string,
    action: "dis" | "inc"
  ) => {
    ev.stopPropagation();
    if (number > 1 && action === "dis") {
      dispatch(changeCartItemCount(productId, cart, "dis"));
    } else if (number <= maxCartItemCount && action === "inc") {
      dispatch(changeCartItemCount(productId, cart, "inc"));
    }
  };

  const NumberButton = ({
    number,
    productId,
  }: {
    number: number;
    productId: string;
  }) => {
    return (
      <fieldset className="cart-item-number-button-container">
        <ButtonMui
          className="cart-item-number-button-adjust-button"
          color="inherit"
          onClick={(ev) => onClickNumber(ev, number, productId, "dis")}
        >
          <RemoveIcon fontSize="small" />
        </ButtonMui>
        <span className="cart-item-number-button-number">{number}</span>
        <ButtonMui
          color="inherit"
          onClick={(ev) => onClickNumber(ev, number, productId, "inc")}
          className="cart-item-number-button-adjust-button"
        >
          <AddIcon fontSize="small" />
        </ButtonMui>
      </fieldset>
    );
  };

  const cartTotalPrice = useMemo(() => {
    return Object.entries(cart).reduce((accumulator: number, [key, value]) => {
      return accumulator + value.productPrice * value.productCount;
    }, 0);
  }, [{ ...cart }]);

  return { NumberButton, cartTotalPrice };
};
