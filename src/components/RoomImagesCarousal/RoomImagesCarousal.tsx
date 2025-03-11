import React, { useRef } from "react";
import "./RoomImagesCarousal.scss";
import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRoomImagesCarousal } from "./hooks/useRoomImagesCarousal";

interface RoomImagesCarousal {
  chosenRoom: Room;
}

export const RoomImagesCarousal = ({ chosenRoom }: RoomImagesCarousal) => {
  const { ref, settings } = useRoomImagesCarousal();
  return (
    <div className="room-images-carousal-container">
      <Slider ref={ref} {...settings}>
        {chosenRoom.images.map((image: string, index: number) => (
          <div className="room-images-card-container">
            <Box
              className="room-images-card"
              sx={{ backgroundImage: `url(${image})` }}
            ></Box>
          </div>
        ))}
      </Slider>
      <div className="room-images-carousal-next-button-container">
        <IconButton
          onClick={() => {
            ref.current.slickNext();
          }}
          className="room-images-carousal-next-button"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};
