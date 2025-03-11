import React, { ReactNode } from "react";
import "./PageHeader.scss";
import { Breadcrumbs } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface PageHeaderProps {
  pageName: string;
  breadcrumbsArray: (string | ReactNode)[];
}

export const PageHeader = ({ pageName, breadcrumbsArray }: PageHeaderProps) => {
  return (
    <div className="page-header-container">
      <div className="page-header-background-image"></div>
      <div className="page-header-text-container">
        <p className="medium">{pageName}</p>
        <Breadcrumbs
          separator={<KeyboardArrowRightIcon />}
          className="page-header-breadcrumbs"
          aria-label="breadcrumb"
        >
          {breadcrumbsArray.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </Breadcrumbs>
      </div>
    </div>
  );
};
