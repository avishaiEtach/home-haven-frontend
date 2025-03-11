import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { Button } from "../Button/Button";
import "./OurProducts.scss";
import { useNavigate } from "react-router-dom";
import { routesPath } from "../../routes";
import { useOurProducts } from "./hooks/useOurProducts";

export const OurProducts = () => {
  const navigate = useNavigate();
  const { products, getLoader, loading } = useOurProducts();
  return (
    <div className="our-products-container">
      <h2 className="bold">Our Products</h2>
      <div className="our-product-cards-container container">
        {loading
          ? getLoader()
          : products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
      </div>
      <Button
        onClick={() => navigate(routesPath.shop)}
        buttonType="border"
        text="Show More"
        className="our-products-button"
      />
    </div>
  );
};
