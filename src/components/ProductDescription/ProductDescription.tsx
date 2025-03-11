import React from "react";
import parse from "html-react-parser";
import "./ProductDescription.scss";

interface ProductDescriptionProps {
  product: Product | null;
  mainColor: string | null;
}

export const ProductDescription = ({
  product,
  mainColor,
}: ProductDescriptionProps) => {
  return (
    <div className="flex column g30">
      <div className="product-full-description-text-container">
        {parse(product?.productDetails?.productFullDescription ?? "")}
      </div>
      <div className="flex g20 product-full-description-images-container">
        <div>
          <img src={product?.productImages[mainColor as string][0]} alt="" />
        </div>
        <div>
          <img src={product?.productImages[mainColor as string][2]} alt="" />
        </div>
      </div>
    </div>
  );
};
