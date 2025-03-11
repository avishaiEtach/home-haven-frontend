import React, { useState } from "react";
import { useProductPageTabs } from "./hooks/useProductPageTabs";
import { product_page_tabs } from "../../assets/constants";
import "./ProductPageTabs.scss";

interface ProductPageTabsProps {
  product: Product | null;
  reviews: Review[];
  mainColor: string | null;
}

export const ProductPageTabs = ({
  product,
  reviews,
  mainColor,
}: ProductPageTabsProps) => {
  const { getTabInfo, setCurrentTab, currentTab } = useProductPageTabs({
    product,
    reviews,
    mainColor,
  });
  return (
    <div className="container">
      <div className="product-page-tabs-container">
        {product_page_tabs.map((tab, index) => (
          <h3
            className={currentTab === tab ? "selected medium" : undefined}
            onClick={() => setCurrentTab(tab)}
            key={index}
          >
            {tab}
            {tab === "reviews" && reviews.length ? `[${reviews.length}]` : ""}
          </h3>
        ))}
      </div>
      {getTabInfo}
    </div>
  );
};
