import React from "react";

export const useProductCard = () => {
  const calculateDiscountedPrice = (
    price: number,
    discount: number
  ): number => {
    if (discount < 0 || discount > 100) {
      throw new Error("Discount should be between 0 and 100.");
    }

    const discountAmount = (price * discount) / 100;
    const newPrice = price - discountAmount;

    return newPrice;
  };

  const getNumberAndCurrency = (
    number: number,
    lang = "en",
    currency = "USD"
  ) => {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const GetPrice = (price: number, discount: number) => {
    if (discount > 0) {
      return (
        <div className="flex g10 align-center">
          <span className="product-price">
            {getNumberAndCurrency(calculateDiscountedPrice(price, discount))}
          </span>
          <span className="product-price old">
            {getNumberAndCurrency(price)}
          </span>
        </div>
      );
    }

    return <span className="product-price">{getNumberAndCurrency(price)}</span>;
  };

  function isInLastMonth(isoDate: string): boolean {
    const date = new Date(isoDate);
    const now = new Date();
    const lastMonthDate = new Date();
    lastMonthDate.setDate(now.getDate() - 30);
    return date >= lastMonthDate && date <= now;
  }

  return { GetPrice, isInLastMonth };
};
