import React from "react";
import { ProductReviewsCard } from "../ProductReviewsCard/ProductReviewsCard";

interface ProductReviewsProps {
  reviews: Review[];
}

export const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  return (
    <div className="product-reviews-container">
      {reviews.map((review) => (
        <ProductReviewsCard review={review} />
      ))}
    </div>
  );
};
