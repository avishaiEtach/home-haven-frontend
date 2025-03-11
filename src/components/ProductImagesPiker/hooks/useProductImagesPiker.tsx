import React, { useMemo, useState } from "react";

interface ProductImagesPikerProps {
  product: Product;
  mainColor: string | null;
}

export const useProductImagesPiker = ({
  product,
  mainColor,
}: ProductImagesPikerProps) => {
  const [chosenProdImageIndex, setChosenProdImageIndex] = useState<number>(0);

  const image = useMemo(() => {
    if (product && mainColor) {
      return product.productImages[mainColor][chosenProdImageIndex];
    }
  }, [mainColor, chosenProdImageIndex]);

  return { chosenProdImageIndex, setChosenProdImageIndex, image };
};
