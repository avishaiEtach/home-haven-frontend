import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { ExploreCollection } from "../../components/ExploreCollection/ExploreCollection";
import { OurProducts } from "../../components/OurProducts/OurProducts";
import { RoomInspiration } from "../../components/RoomInspiration/RoomInspiration";
import { HashtagGridImages } from "../../components/HashtagGridImages/HashtagGridImages";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="home-page-main-container">
      <Hero />
      <ExploreCollection />
      <OurProducts />
      <RoomInspiration />
      <HashtagGridImages />
    </div>
  );
};
