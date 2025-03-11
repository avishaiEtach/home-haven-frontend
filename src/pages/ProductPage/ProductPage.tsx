import React, { useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ProductImagesPiker } from "../../components/ProductImagesPiker/ProductImagesPiker";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { Box, Divider, Skeleton } from "@mui/material";
import { ProductPageTabs } from "../../components/ProductPageTabs/ProductPageTabs";
import { useProductPage } from "./hooks/useProductPage";
import "./ProductPage.scss";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Button } from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { replaceRouteParam, routesPath } from "../../routes";

export const ProductPage = () => {
  const {
    product,
    reviews,
    mainColor,
    setMainColor,
    relatedProducts,
    ProductLoader,
  } = useProductPage();
  const navigate = useNavigate();

  if (!product) {
    return <ProductLoader />;
  }

  return (
    <div>
      <PageHeader
        pageName={product.shortName}
        breadcrumbsArray={[
          <Link to={routesPath.shop}>Shop</Link>,
          product.shortName,
        ]}
      />
      <div className="product-page-main-container">
        <div className="container flex g30 product-page-product-details-container">
          <ProductImagesPiker mainColor={mainColor} product={product} />
          <ProductDetails
            mainColor={mainColor}
            product={product}
            setMainColor={setMainColor}
            reviewsNumber={reviews.length}
          />
        </div>
        <Divider />
        <ProductPageTabs
          mainColor={mainColor}
          product={product}
          reviews={reviews}
        />
      </div>
      <Divider />
      <div className="container">
        <h2 className=" medium product-page-related-product-header">
          Related Products
        </h2>
        <div className="container product-page-related-products-container">
          {relatedProducts.map((product) => (
            <div
              onClick={() => {
                navigate(
                  replaceRouteParam(routesPath.productPage, product._id)
                );
                window.location.reload();
              }}
            >
              <ProductCard
                withNavigate={false}
                key={product._id}
                product={product}
              />
            </div>
          ))}
        </div>
        <div className="flex full justify-center ">
          <Button
            onClick={() => navigate(routesPath.shop)}
            className="product-page-related-products-button"
            text="Show More"
            buttonType="border"
          />
        </div>
      </div>
    </div>
  );
};
