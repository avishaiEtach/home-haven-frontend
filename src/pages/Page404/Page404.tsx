import React from "react";
import { Link } from "react-router-dom";
import { routesPath } from "../../routes";
import file_search from "../../assets/images/file-search.svg";
import "./Page404.scss";

export const Page404 = () => {
  return (
    <div className="container">
      <div className="page-404-main-container">
        <h1 className="bold page-404-header">Page Not Found</h1>
        <p>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div>
          <span>Please check the URL, or go back to the </span>
          <Link className="bold" to={routesPath.home}>
            home page
          </Link>
          <span> to continue browsing.</span>
        </div>
        <div className="page-404-image-container">
          <img src={file_search} alt="file_search.png" />
        </div>
      </div>
    </div>
  );
};
