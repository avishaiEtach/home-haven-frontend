import { useEffect, useRef, useState } from "react";
import { useImageMagnifier } from "./hooks/useImageMagnifier";
import "./ImageMagnifier.scss";

export const ImageMagnifier = ({ imageUrl }: { imageUrl: string }) => {
  const {
    setShowMagnifier,
    showMagnifier,
    handleOnMouseHOver,
    position,
    curserPosition,
  } = useImageMagnifier();

  return (
    <div className="img-magnifier-container">
      <div
        className="magnifier-main-img-container"
        onMouseEnter={() => {
          setShowMagnifier(true);
        }}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleOnMouseHOver}
      >
        <img className="magnifier-img" src={imageUrl} alt="" />
        {/* need to change to showMagnifier to enable the magnifier ---> under build */}
        {false && (
          <div
            className="magnifier-img-container"
            style={{
              left: `${curserPosition.x - 100}px`,
              top: `${curserPosition.y - 100}px`,
            }}
          >
            <div
              className="magnifier-image"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `${position.x}% ${position.y}%`,
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};
