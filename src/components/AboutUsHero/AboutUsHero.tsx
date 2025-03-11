import React, { useRef } from "react";
import "./AboutUsHero.scss";
import Slider from "react-slick";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CountUp from "react-countup";
import {
  about_us_carousal,
  about_us_hero_markers,
  about_us_hero_numbers,
} from "../../assets/constants";
import { useAboutUsHero } from "./hooks/useAboutUsHero";

export const AboutUsHero = () => {
  const { ref, settings } = useAboutUsHero();
  return (
    <div className="about-us-hero-main-container">
      <div className="container about-us-hero-container">
        <div className="about-us-hero-carousal">
          <Slider ref={ref} {...settings}>
            {about_us_carousal.map((image, index) => (
              <Box
                key={index}
                component={"div"}
                className="about-us-carousal-item"
                sx={{ backgroundImage: `url(${image})` }}
              ></Box>
            ))}
          </Slider>
        </div>
        <div className="about-us-hero-text-container">
          <p className="semi-bold">who we are</p>
          <h1 className="bold">
            WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION
          </h1>
          <p className="about-us-hero-text">
            At HomeHaven, we believe that a well-styled home is more than just
            aesthetics—it’s a reflection of your personality and lifestyle. Our
            team of expert designers and stylists is dedicated to transforming
            every space into a masterpiece, combining elegance, functionality,
            and modern trends.
          </p>
          <p className="about-us-hero-text">
            With a passion for interior design and a commitment to excellence,
            we curate stunning home styling solutions tailored to your needs.
            Whether you’re looking to refresh your living room, revamp your
            bedroom, or create a workspace that inspires productivity, we bring
            creativity and precision to every project.
          </p>
          <div className="about-us-hero-markers-container">
            {about_us_hero_markers.map((marker, index) => (
              <div key={index} className="flex g5 about-us-hero-marker">
                <CheckCircleIcon />
                <span>{marker}</span>
              </div>
            ))}
          </div>
          <div className="about-us-hero-numbers-container">
            {about_us_hero_numbers.map((item, index) => (
              <div key={index} className="flex column g5 align-center">
                <div className="bold" style={{ fontSize: "40px" }}>
                  <CountUp
                    className="about-us-hero-number"
                    end={item.number}
                    duration={5}
                  />
                  <span className="about-us-hero-number">{item.symbol}</span>
                </div>
                <p className="semi-bold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
