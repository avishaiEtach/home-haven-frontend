import React, { useState } from "react";

export const useImageMagnifier = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [curserPosition, setCurserPosition] = useState({ x: 0, y: 0 });

  const handleOnMouseHOver = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { left, top, width, height } =
      ev.currentTarget.getBoundingClientRect();
    const x = ((ev.pageX - left) / width) * 100;
    const y = ((ev.pageY - top) / height) * 100;

    setPosition({ x: x, y: y });
    setCurserPosition({ x: ev.pageX - left, y: ev.pageY - top });
  };

  return {
    setShowMagnifier,
    showMagnifier,
    handleOnMouseHOver,
    position,
    curserPosition,
  };
};
