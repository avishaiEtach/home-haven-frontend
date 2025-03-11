import React, { useRef } from "react";

export const useRoomImagesCarousal = () => {
  const ref = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: true,
    customPaging: (i: number) => <div className="room-images-dot"></div>,
  };

  return { ref, settings };
};
