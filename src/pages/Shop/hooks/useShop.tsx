import React, { useEffect, useMemo, useState } from "react";
import { productsServices } from "../../../services/products.services";
import { maxPrice, minPrice } from "../../../assets/constants";

interface Filter {
  originOfManufacture: string[];
  price: number[];
  categories: string[];
}

export const useShop = () => {
  const [sortOption, setSortOption] = useState("def");
  const [showOption, setShowOption] = useState(16);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [badgeNumber, setBadgeNumber] = useState(0);
  const [filter, setFilter] = useState<Filter>({
    categories: [],
    originOfManufacture: [],
    price: [minPrice, maxPrice],
  });

  useEffect(() => {
    getProducts({});
  }, [sortOption, showOption, currentPage]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    return () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };
  }, []);

  const getProducts = async (filter: {} | Filter) => {
    setLoading(true);
    const { rows, amount } = await productsServices.getProducts(
      getSort,
      filter,
      currentPage,
      showOption
    );
    setProducts(rows);
    setAmount(amount);
    setLoading(false);
  };

  const getSort = useMemo(() => {
    let sort: any = {};
    switch (sortOption) {
      case "rating":
        sort = { rating: -1 };
        break;
      case "PLTH":
        sort = { price: 1 };
        break;
      case "PHTL":
        sort = { price: -1 };
        break;
      default:
        sort = {};
        break;
    }
    return sort;
  }, [sortOption]);

  const pagesAmount = useMemo(
    () => Math.ceil(amount / showOption),
    [amount, showOption]
  );

  const params = {
    amount,
    currentPage,
    setCurrentPage,
    setShowOption,
    setSortOption,
    showOption,
    sortOption,
    badgeNumber,
    loading,
    products,
    pagesAmount,
    getProducts,
    setBadgeNumber,
    filter,
    setFilter,
  };

  return params;
};
