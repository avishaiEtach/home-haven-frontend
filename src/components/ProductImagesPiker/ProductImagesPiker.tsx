import React, { useMemo, useState } from "react";
import { useProductImagesPiker } from "./hooks/useProductImagesPiker";
import { ImageMagnifier } from "../ImageMagnifier/ImageMagnifier";
import "./ProductImagesPiker.scss";

interface ProductImagesPikerProps {
  product: Product;
  mainColor: string | null;
}

export const ProductImagesPiker = ({
  product,
  mainColor,
}: ProductImagesPikerProps) => {
  const { chosenProdImageIndex, setChosenProdImageIndex, image } =
    useProductImagesPiker({ mainColor, product });
  return (
    <div className="product-images-piker-main-container">
      <div className="flex column space-evenly product-images-piker-container">
        {product.productImages[mainColor as string].map((image, index) => (
          <div
            key={index}
            onClick={() => setChosenProdImageIndex(index)}
            className="product-images-piker-image-container"
          >
            <img
              className={`product-images-piker-image ${
                index === chosenProdImageIndex ? "selected" : ""
              }`}
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="product-images-piker-main-image-container">
        <ImageMagnifier imageUrl={image as string} />
      </div>
    </div>
  );
};
