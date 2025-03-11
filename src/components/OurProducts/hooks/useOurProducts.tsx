import React, { useEffect, useState } from "react";
import { productsServices } from "../../../services/products.services";
import { Box, Skeleton } from "@mui/material";

export const useOurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const productsShowCounter = 8;
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const products = await productsServices.getProducts(
      {},
      {},
      1,
      productsShowCounter
    );
    setProducts(products.rows);
    setLoading(false);
  };

  const getLoader = () => {
    let array = [];
    for (let i = 0; i < productsShowCounter; i++) {
      array.push(
        <Box>
          <Skeleton className="product-skeleton" variant="rectangular" />
          <Skeleton />
          <Skeleton />
        </Box>
      );
    }
    return array;
  };

  return { products, getLoader, loading };
};
