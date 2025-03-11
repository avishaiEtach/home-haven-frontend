import React from "react";
import { TextField } from "@mui/material";
import { Button } from "../Button/Button";
import { useContactUsForm } from "./hooks/useContactUsForm";
import "./ContactUsForm.scss";

export const ContactUsForm = () => {
  const { submitForm, handleChange } = useContactUsForm();
  return (
    <div className="contact-us-form-section">
      <form className="flex column g30">
        {submitForm.map((item) => (
          <div key={item.id} className="flex column g20">
            <label className="bold contact-us-label" htmlFor={item.id}>
              {item.label}
              {item.required ? "*" : ""}
            </label>
            <TextField
              className="contact-us-input"
              onChange={handleChange}
              inputProps={{ ...item }}
              multiline={item.multiline}
            />
          </div>
        ))}
        <Button className="contact-us-button" type="submit" text="Submit" />
      </form>
    </div>
  );
};
