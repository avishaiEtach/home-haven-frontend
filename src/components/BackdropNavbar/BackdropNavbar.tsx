import React from "react";
import "./BackdropNavbar.scss";
import { useBackdrop } from "../../context/Backdrop/BackdropContext";
import { IconButton, Slide, Zoom } from "@mui/material";
import { Button } from "../Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";

export const BackdropNavbar = () => {
  const { isBackdropOpen, closeBackdrop } = useBackdrop();
  return (
    <Slide
      in={isBackdropOpen}
      timeout={500}
      direction="right"
      onClick={(ev) => {
        ev.stopPropagation();
      }}
    >
      <div className="flex g30 backdrop-navbar-main-container">
        <Zoom in={isBackdropOpen} timeout={1000}>
          <div className="backdrop-navbar-close-button">
            <IconButton onClick={closeBackdrop} color="inherit">
              <CloseIcon />
            </IconButton>
          </div>
        </Zoom>
        <div className="full backdrop-navbar-container">
          <div className="backdrop-navbar-buttons-container">
            <Button
              text="login"
              className="backdrop-navbar-button"
              buttonType="secondary"
            />
            <Button
              text="search"
              className="backdrop-navbar-button"
              buttonType="secondary"
            />
          </div>
          <nav>
            <ul className="flex backdrop-navbar" role="list">
              {routes.map((route) => (
                <li>
                  <NavLink to={route.path}>{route.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Slide>
  );
};
