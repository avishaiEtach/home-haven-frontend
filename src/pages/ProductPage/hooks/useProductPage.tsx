import React, { useEffect, useState } from "react";
import { productsServices } from "../../../services/products.services";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";

// const id = "670e9351666636a0c4731cf4";

export const useProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainColor, setMainColor] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      gerProductById(id);
    }
  }, [id]);

  const gerProductById = async (id: string) => {
    const product = await productsServices.getProductsById(id);
    const reviews = await productsServices.getReviewsByProductId(product._id);
    const relatedProducts = await productsServices.getProducts({}, {}, 1, 4);
    console.log("product", product);

    setProduct(product);
    setMainColor(product.productDetails.colors[0]);
    setReviews(reviews);
    setRelatedProducts(relatedProducts.rows);
  };

  const ProductLoader = () => {
    return (
      <div className="container product-loader-main-container">
        <Box component="div" className="flex g30 justify-center align-center">
          <Skeleton className="product-loader-big-skeleton-1" />
          <Box component="div" className="flex g10 column">
            <Skeleton
              className="product-loader-small-skeleton"
              variant="rounded"
            />
            <Skeleton
              className="product-loader-small-skeleton"
              variant="rounded"
            />
            <Skeleton
              className="product-loader-small-skeleton"
              variant="rounded"
            />
            <Skeleton
              className="product-loader-small-skeleton"
              variant="rounded"
            />
          </Box>
        </Box>
        <Box component="div" className="flex g30 justify-center align-center">
          <Skeleton className="product-loader-big-skeleton-2" />
        </Box>
      </div>
    );
  };

  return {
    product,
    reviews,
    mainColor,
    setMainColor,
    relatedProducts,
    ProductLoader,
  };
};
