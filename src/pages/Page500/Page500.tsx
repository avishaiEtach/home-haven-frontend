import React from "react";
import server_down from "../../assets/images/server-down.svg";
import "./Page500.scss";

export const Page500 = () => {
  return (
    <div className="container">
      <div className="page-500-main-container">
        <h1 className="bold page-500-header">Oops! Something went wrong.</h1>
        <p>
          We encountered an unexpected error on the server. Don't worry, we're
          already working on fixing it.
        </p>
        <p>
          Please try again later, or contact our support if the issue persists.
        </p>
        <div className="page-500-image-container">
          <img src={server_down} alt="server_down.png" />
        </div>
      </div>
    </div>
  );
};
