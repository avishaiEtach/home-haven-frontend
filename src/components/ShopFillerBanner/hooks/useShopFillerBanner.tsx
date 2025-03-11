import React, { useMemo } from "react";

interface ShopFillerBannerProps {
  currentPage: number;
  amount: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  showOption: number;
  setShowOption: React.Dispatch<React.SetStateAction<number>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  badgeNumber: number;
}

export const useShopFillerBanner = ({
  currentPage,
  amount,
  setCurrentPage,
  showOption,
  setShowOption,
  sortOption,
  setSortOption,
  badgeNumber,
}: ShopFillerBannerProps) => {
  const getPaginationInfo = useMemo(() => {
    const startItem = (currentPage - 1) * showOption + 1;
    const endItem = Math.min(currentPage * showOption, amount);
    return `Showing ${startItem}–${endItem} of ${amount} results`;
  }, [currentPage, showOption, amount]);

  return { getPaginationInfo };
};
