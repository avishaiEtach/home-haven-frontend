import React, { useEffect } from "react";
import "./HashtagGridImages.scss";

export const HashtagGridImages = () => {
  return (
    <div>
      <div className="hashtag-grid-images-text-container">
        <p className="semi-bold">Share your setup with</p>
        <h2 className="bold">#HomeHaven</h2>
      </div>
      <div className="hashtag-grid-images-grid-container">
        <div className="div1"></div>
        <div data-aos="zoom-in" data-aos-duration="1500" className="div2"></div>
        <div data-aos="zoom-in" data-aos-duration="1800" className="div3"></div>
        <div className="div4"></div>
        <div data-aos="zoom-in" data-aos-duration="2100" className="div5"></div>
        <div className="div6"></div>
        <div data-aos="zoom-in" data-aos-duration="2400" className="div7"></div>
        <div data-aos="zoom-in" data-aos-duration="2700" className="div8"></div>
        <div className="div9"></div>
      </div>
    </div>
  );
};
