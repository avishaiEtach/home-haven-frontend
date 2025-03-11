import React, { Dispatch } from "react";
import { getNumberAndCurrency } from "../../assets/util";
import { Button } from "../Button/Button";
import { TiStar } from "react-icons/ti";
import { Rating } from "react-simple-star-rating";
import AddIcon from "@mui/icons-material/Add";
import { Rating_fill_color } from "../../assets/constants";
import { useProductDetails } from "./hooks/useProductDetails";
import "./ProductDetails.scss";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addCompare, addToCart } from "../../store/userActions.actions";

interface ProductDetailsProps {
  product: Product;
  mainColor: string | null;
  setMainColor: Dispatch<React.SetStateAction<string | null>>;
  reviewsNumber: number;
}

export const ProductDetails = ({
  product,
  mainColor,
  setMainColor,
  reviewsNumber,
}: ProductDetailsProps) => {
  const {
    calculateDiscountedPrice,
    NumberButton,
    isInLastMonth,
    productItemNumber,
  } = useProductDetails();
  const { cart, compare } = useSelector(
    (state: RootState) => state.userActionModel
  );
  const dispatch = useDispatch();

  return (
    <div className="product-details">
      <div className="flex product-details-product-header-container space-between align-center">
        <h1>{product.shortName}</h1>
        <span
          className="product-details-product-discount-label"
          data-discount={
            isInLastMonth(product.createdAt) ? false : !!product.discount
          }
          data-discount-value={product.discount}
          data-new={isInLastMonth(product.createdAt)}
        ></span>
      </div>
      <div className="flex g10">
        <span className={"product-details-price medium"}>
          {getNumberAndCurrency(
            calculateDiscountedPrice(product.price, product.discount)
          )}
        </span>
        {product.discount > 0 && (
          <span className="product-details-price discount">
            {getNumberAndCurrency(product.price)}
          </span>
        )}
      </div>
      <div className="flex g20 align-center product-details-reviews-container">
        <Rating
          initialValue={product.rating}
          allowFraction
          readonly
          className="custom-star-rating"
          fillColor={Rating_fill_color}
          emptyIcon={<TiStar className="rating-star" />}
          fillIcon={<TiStar className="rating-star" />}
        />
        <Divider
          className="product-details-reviews-divider"
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <div className="flex g10 product-details-reviews-number">
          <span>{reviewsNumber}</span>
          <span>{"Customer Review"}</span>
        </div>
      </div>
      <p className="product-details-product-description">
        {product.productDetails.productDescription}
      </p>
      <div>
        <label className="product-details-color-label">Color</label>
        <div className="flex g10 product-details-colors-container">
          {product.productDetails.colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setMainColor(color)}
              className={`product-details-color ${
                color === mainColor ? "selected" : ""
              }`}
              style={{
                backgroundColor: color,
              }}
            ></div>
          ))}
        </div>
        <div className="flex g20">
          <NumberButton />
          <Button
            onClick={() =>
              dispatch(addToCart(product, cart, productItemNumber))
            }
            text="Add To Cart"
          />
          <Button
            Icon={AddIcon}
            text="Compare"
            onClick={() => dispatch(addCompare(product._id, compare))}
          />
        </div>
      </div>
    </div>
  );
};
