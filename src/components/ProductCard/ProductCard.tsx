import React from "react";
import { Button } from "../Button/Button";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useProductCard } from "./hooks/useProductCard";
import { useDispatch, useSelector } from "react-redux";
import "./ProductCard.scss";
import {
  addCompare,
  addToCart,
  addToFavorite,
} from "../../store/userActions.actions";
import { RootState } from "../../store/store";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { replaceRouteParam, routesPath } from "../../routes";

interface ProductCardPros {
  product: Product;
  withNavigate?: boolean;
}

export const ProductCard = ({
  product,
  withNavigate = true,
}: ProductCardPros) => {
  const { GetPrice, isInLastMonth } = useProductCard();
  const { cart, favorite, compare } = useSelector(
    (state: RootState) => state.userActionModel
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCompareChose = compare.find((productId) => product._id === productId);

  return (
    <div
      className="product-card"
      onClick={() =>
        withNavigate
          ? navigate(replaceRouteParam(routesPath.productPage, product._id))
          : null
      }
    >
      <div
        data-discount={
          isInLastMonth(product.createdAt) ? false : !!product.discount
        }
        data-discount-value={product.discount}
        data-new={isInLastMonth(product.createdAt)}
        className="product-card-image"
        style={{ backgroundImage: `url(${product.mainImage})` }}
      ></div>
      <div className="product-card-content">
        <p className="semi-bold product-short-name">{product.shortName}</p>
        <p className="medium product-name">{product.productName}</p>
        {GetPrice(product.price, product.discount)}
      </div>
      <div className={`product-card-cover ${isCompareChose ? "open" : ""}`}>
        <div className="product-card-cover-connect-container">
          <Button
            className="product-card-cover-button"
            buttonType="secondary"
            text="Add to cart"
            onClick={(ev) => {
              ev.stopPropagation();
              dispatch(addToCart(product, cart));
            }}
          />
          <div className="flex g20 align-center">
            <div className="product-card-cover-icon">
              <ShareIcon />
              <span>Share</span>
            </div>
            <div
              onClick={(ev) => {
                ev.stopPropagation();
                dispatch(addCompare(product._id, [...compare]));
              }}
              className={`product-card-cover-icon ${
                isCompareChose ? "active" : ""
              }`}
            >
              <div className="product-card-cover-compare flex align-center g5">
                <CompareArrowsIcon />
                <span>Compare</span>
              </div>
            </div>
            <div className="product-card-cover-icon">
              <Checkbox
                id={product._id}
                checked={!!favorite[product._id]}
                onClick={(ev) => {
                  ev.stopPropagation();
                }}
                onChange={(ev) => {
                  dispatch(addToFavorite(product, favorite, ev.target.checked));
                }}
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
              />
              <label
                onClick={(ev) => {
                  ev.stopPropagation();
                }}
                htmlFor={product._id}
              >
                Like
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
