import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./AboutUsCallUs.scss";

export const AboutUsCallUs = () => {
  return (
    <div className="about-us-call-us-section">
      <div className="container about-us-call-us-section-container">
        <div className="about-us-call-us-section-container-info">
          <div className="about-us-call-us-section-details">
            <LocalPhoneIcon />
            <p className="semi-bold">Call Us Now</p>
            <p className="medium"> +(84) 546-6789</p>
          </div>
          <p className="bold">
            "COMMITTED TO EXCELLENCE & CREATING YOUR PERFECT SPACE"
          </p>
        </div>
      </div>
    </div>
  );
};
