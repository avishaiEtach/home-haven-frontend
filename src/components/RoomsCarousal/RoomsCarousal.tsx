import { Box } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import { rooms } from "../../assets/constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "../Button/Button";
import { useRoomsCarousal } from "./hooks/useRoomsCarousal";
import "./RoomsCarousal.scss";

interface RoomsCarousal {
  setChosenRoom: React.Dispatch<Room>;
}

export const RoomsCarousal = ({ setChosenRoom }: RoomsCarousal) => {
  const { ref, settings, onClick } = useRoomsCarousal({ setChosenRoom });
  return (
    <div className="rooms-carousal-container">
      <Slider ref={ref} {...settings}>
        {rooms.map((room, index) => (
          <Box
            component={"div"}
            className="room-card"
            sx={{ backgroundImage: `url(${room.roomImage})` }}
          >
            <div className="room-card-text-box">
              <div className="flex">
                <span className="medium">{`0${index + 1}`}</span>
                <span className="medium">{room.roomName}</span>
              </div>
              <p className="bold room-card-title">{room.title}</p>
            </div>
            <Button
              text=""
              className="room-card-button"
              Icon={ArrowForwardIcon}
              onClick={(ev) => {
                onClick(ev, index);
              }}
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
};
