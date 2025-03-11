import React from "react";
import "./ContactUsInfo.scss";
import { contact_us_details } from "../../assets/constants";

export const ContactUsInfo = () => {
  return (
    <div className="contact-us-info-section">
      {contact_us_details.map((item, index) => (
        <div key={index} className="contact-us-info-item">
          {<item.icon />}
          <div>
            <p className="semi-bold contact-us-info-title">{item.title}</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
