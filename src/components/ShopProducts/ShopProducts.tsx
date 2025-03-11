import React, { useCallback } from "react";
import "./ShopProducts.scss";
import { Box, Skeleton } from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";

interface ShopProductsProps {
  loading: boolean;
  showOption: number;
  products: Product[];
}

export const ShopProducts = ({
  loading,
  showOption,
  products,
}: ShopProductsProps) => {
  const getLoader = useCallback(() => {
    let array = [];
    for (let i = 0; i < showOption; i++) {
      array.push(
        <Box>
          <Skeleton className="product-skeleton" variant="rectangular" />
          <Skeleton />
          <Skeleton />
        </Box>
      );
    }
    return array;
  }, [showOption]);
  return (
    <div className="container shop-products-container">
      {loading
        ? getLoader()
        : products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
    </div>
  );
};
