import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ContactUsHeader } from "../../components/ContactUsHeader/ContactUsHeader";
import { ContactUsInfo } from "../../components/ContactUsInfo/ContactUsInfo";
import { ContactUsForm } from "../../components/ContactUsForm/ContactUsForm";
import "./ContactUs.scss";

export const ContactUs = () => {
  return (
    <div>
      <PageHeader pageName="Contact" breadcrumbsArray={[]} />
      <div className="container contact-us-container">
        <ContactUsHeader />
        <div className="contact-us-main-section">
          <ContactUsInfo />
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};
