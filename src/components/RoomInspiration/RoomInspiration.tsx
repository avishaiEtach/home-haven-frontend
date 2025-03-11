import React, { useState } from "react";
import "./RoomInspiration.scss";
import { Button } from "../Button/Button";
import { rooms } from "../../assets/constants";
import { RoomsCarousal } from "../RoomsCarousal/RoomsCarousal";
import { RoomImagesCarousal } from "../RoomImagesCarousal/RoomImagesCarousal";
import { useNavigate } from "react-router-dom";
import { routesPath } from "../../routes";

export const RoomInspiration = () => {
  const [chosenRoom, setChosenRoom] = useState<Room>(rooms[0]);
  const navigate = useNavigate();
  return (
    <div className="room-inspiration-container">
      <div className="room-inspiration-text-container container">
        <div className="room-inspiration-text">
          <h2 className="bold">50+ Beautiful rooms inspiration</h2>
          <p className="medium">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button
            onClick={() => navigate(routesPath.shop)}
            text="Explore More"
            className="room-inspiration-button"
          />
        </div>
      </div>
      <div className="room-inspiration-carousal-container">
        <RoomsCarousal setChosenRoom={setChosenRoom} />
        <RoomImagesCarousal chosenRoom={chosenRoom} />
      </div>
    </div>
  );
};
