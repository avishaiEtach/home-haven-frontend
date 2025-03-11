import React, { useMemo, useState } from "react";
import { ProductDescription } from "../../ProductDescription/ProductDescription";
import { ProductAdditionalInformation } from "../../ProductAdditionalInformation/ProductAdditionalInformation";
import { ProductReviews } from "../../ProductReviews/ProductReviews";
import { product_page_tabs } from "../../../assets/constants";

interface ProductPageTabsProps {
  product: Product | null;
  reviews: Review[];
  mainColor: string | null;
}

export const useProductPageTabs = ({
  mainColor,
  product,
  reviews,
}: ProductPageTabsProps) => {
  const [currentTab, setCurrentTab] = useState(product_page_tabs[0]);

  const getTabInfo = useMemo(() => {
    switch (currentTab) {
      case "description":
        return <ProductDescription mainColor={mainColor} product={product} />;
      case "additional Information":
        return <ProductAdditionalInformation product={product} />;
      case "reviews":
        return <ProductReviews reviews={reviews} />;
      default:
        break;
    }
  }, [currentTab, product, mainColor]);

  return { getTabInfo, setCurrentTab, currentTab };
};
