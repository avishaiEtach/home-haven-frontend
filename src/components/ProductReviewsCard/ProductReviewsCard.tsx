import React from "react";
import { Rating_fill_color } from "../../assets/constants";
import { formatWhatsAppTime } from "../../assets/util";
import { TiStar } from "react-icons/ti";
import { Rating } from "react-simple-star-rating";
import "./ProductReviewsCard.scss";

const user_img =
  "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg";

export const ProductReviewsCard = ({ review }: { review: Review }) => {
  return (
    <div className="flex g30 product-review-card">
      <div className="flex g15">
        <div className="product-review-card-image-container">
          <img src={user_img} alt="" />
        </div>
        <p className="bold product-review-card-user-name">{review.user}</p>
      </div>
      <div>
        <div className="flex align-center">
          <Rating
            initialValue={review.rating}
            allowFraction
            readonly
            className="product-review-card-star-rating"
            fillColor={Rating_fill_color}
            emptyIcon={<TiStar className="rating-star" />}
            fillIcon={<TiStar className="rating-star" />}
          />
          <span className="product-review-card-time">
            {formatWhatsAppTime(new Date(review.date))}
          </span>
        </div>
        <p className="product-review-card-comment">{review.comment}</p>
      </div>
    </div>
  );
};
