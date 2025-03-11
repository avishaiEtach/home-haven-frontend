import React, { useEffect } from "react";
import "./ExploreCollection.scss";
import { cards } from "../../assets/constants";

export const ExploreCollection = () => {
  return (
    <div className="explore-collection-container">
      <div className="explore-collection-header-container">
        <h2 className="bold">Discover the Selection</h2>
        <p>Discover furniture designed for comfort and crafted for your home</p>
      </div>
      <div className="explore-collection-cards-container container">
        {cards.map((card, index) => (
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration={`2000`}
              data-aos-offset={`${(index + 1) * 200}`}
              className="explore-collection-card"
              data-label={card.label}
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <p className="explore-collection-card-label">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
