import React, { useEffect, useState } from "react";
import { productsServices } from "../../../services/products.services";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";
import { routesPath } from "../../../routes";

// const id = "670e9351666636a0c4731cf4";

export const useProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainColor, setMainColor] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      gerProductById(id);
    }
  }, [id]);

  const gerProductById = async (id: string) => {
    const product = await productsServices.getProductsById(id);
    if (product) {
      const reviews = await productsServices.getReviewsByProductId(product._id);
      const relatedProducts = await productsServices.getProducts({}, {}, 1, 4);
      setProduct(product);
      setMainColor(product.productDetails.colors[0]);
      setReviews(reviews);
      setRelatedProducts(relatedProducts.rows);
    } else {
      setTimeout(() => {
        navigate(routesPath.page404, { replace: true });
      }, 3000);
    }
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
