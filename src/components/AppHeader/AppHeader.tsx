import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../assets/images/logo.png";
import "./AppHeader.scss";
import { Badge, IconButton } from "@mui/material";
import { useBackdrop } from "../../context/Backdrop/BackdropContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useModal } from "../../context/Modal/ModalContext";
import { Modal } from "../Modal/Modal";
import { FavoriteModal } from "../FavoriteModal/FavoriteModal";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";

export const AppHeader = () => {
  const { openBackdrop, setBackdropState } = useBackdrop();
  const { openModal } = useModal();
  const { cart, favorite } = useSelector(
    (state: RootState) => state.userActionModel
  );
  const favoriteLength = Object.keys(favorite).length;
  const cartLength = Object.keys(cart).length;

  return (
    <header>
      <div className="container header flex align-center space-between">
        <div className="hamburger">
          <IconButton
            color="inherit"
            onClick={() => {
              setBackdropState("navbar");
              openBackdrop();
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="flex align-center">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <span className="logo-text">HomeHaven</span>
        </div>
        <nav>
          <ul className="flex header-navbar" role="list">
            {routes.map((route) => (
              <li>
                <NavLink to={route.path}>{route.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex align-center g20">
          <PermIdentityIcon className="login-icon" />
          <SearchIcon className="search-icon" />
          <IconButton
            color="inherit"
            onClick={() => {
              if (favoriteLength > 0) {
                openModal("favoriteModal");
              }
            }}
          >
            <Badge
              badgeContent={favoriteLength}
              className="badge"
              color="success"
            >
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => {
              if (cartLength > 0) {
                setBackdropState("cart");
                openBackdrop();
              }
            }}
          >
            <Badge badgeContent={cartLength} className="badge" color="success">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
      <Modal id={"favoriteModal"}>
        <FavoriteModal />
      </Modal>
    </header>
  );
};
