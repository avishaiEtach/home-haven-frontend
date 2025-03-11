import React, { useRef } from "react";
import { rooms } from "../../../assets/constants";

interface RoomsCarousal {
  setChosenRoom: React.Dispatch<Room>;
}

export const useRoomsCarousal = ({ setChosenRoom }: RoomsCarousal) => {
  const ref = useRef<any>(null);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  const onClick = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    if (index + 1 === rooms.length) {
      setChosenRoom(rooms[0]);
    } else {
      setChosenRoom(rooms[index + 1]);
    }
    ref.current.slickNext();
  };

  return { ref, settings, onClick };
};
