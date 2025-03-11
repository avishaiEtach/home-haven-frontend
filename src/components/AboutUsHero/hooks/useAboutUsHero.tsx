import React, { useRef } from "react";

export const useAboutUsHero = () => {
  const ref = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return { ref, settings };
};
