import React from "react";
import "./AppFooter.scss";
import { Divider } from "@mui/material";
import wayfair_logo from "../../assets/images/wayfair_logo.png";
import herman_miller_logo from "../../assets/images/herman_miller_logo.png";
import lumens_logo from "../../assets/images/lumens_logo.png";
import west_elm_logo from "../../assets/images/west_elm_logo.png";
import logo from "../../assets/images/logo_white.png";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";

export const AppFooter = () => {
  return (
    <footer className="footer-main-container">
      <Divider className="footer-divider" />
      <div className="container flex space-between align-center footer-top-brands-main-container">
        <p>
          Top brands trust{" "}
          <span className="bold footer-top-brands-HomeHaven">HomeHaven </span>
          to bring stylish and functional home designs to life
        </p>
        <div className="footer-logo-container">
          <div className="footer-logo-image-container">
            <img src={wayfair_logo} alt="" />
          </div>
          <div className="footer-logo-image-container">
            <img src={herman_miller_logo} alt="" />
          </div>
          <div className="footer-logo-image-container">
            <img src={lumens_logo} alt="" />
          </div>
          <div className="footer-logo-image-container">
            <img src={west_elm_logo} alt="" />
          </div>
        </div>
      </div>
      <Divider className="footer-divider" />
      <div className="container flex space-between footer-links-main-container">
        <nav>
          <p className="bold footer-links-main-header">Links Tree</p>
          <ul className="flex column g10 footer-links-content" role="list">
            {routes.map((route) => (
              <li className="footer-link">
                <NavLink to={route.path}>{route.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="bold footer-links-main-header">Support</p>
          <div className="flex column g20 footer-links-content">
            <div>
              <p className="semi-bold footer-links-semi-header">Address</p>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div>
              <p className="semi-bold footer-links-semi-header">Phone</p>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
            <div>
              <p className="semi-bold footer-links-semi-header">Working Time</p>
              <p>Sunday-Thursday: 9:00 - 22:00</p>
            </div>
          </div>
        </div>
        <div>
          <p className="bold footer-links-main-header">Legal & Accessibility</p>
          <div className="flex column g10 footer-links-content">
            <p className="footer-link">Cookie settings</p>
            <p className="footer-link">Privacy Policy</p>
            <p className="footer-link">Terms Of Use</p>
            <p className="footer-link">FAQ</p>
          </div>
        </div>
      </div>
      <Divider className="footer-divider" />
      <div className="container footer-copyright-main-container">
        <div className="flex align-center">
          <div className="footer-copyright-logo-container">
            <img src={logo} alt="logo" />
          </div>
          <span className="footer-copyright-logo-text">HomeHaven</span>
          <div className="footer-copyright-text">
            <CopyrightIcon className="footer-copyright-icon" />
            <span>
              Copyright {new Date().getFullYear()}. All right reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
