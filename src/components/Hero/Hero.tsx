import React from "react";
import { Button } from "../Button/Button";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";
import { routesPath } from "../../routes";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="container hero-box">
        <div className="hero-container">
          <p className="semi-bold">New Arrival</p>
          <h1 className="bold">Discover Our</h1>
          <h1 className="bold">New Collection</h1>
          <p className="medium">
            Find beautifully crafted pieces that blend comfort and style.
            Enhance your home with furniture made for modern living.
          </p>
          <Button
            onClick={() => navigate(routesPath.shop)}
            text="buy now"
            className="hero-button"
          />
        </div>
      </div>
    </div>
  );
};
