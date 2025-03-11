import React, { useState } from "react";

export const useContactUsForm = () => {
  const [submitForm, setSubmitForm] = useState([
    {
      id: "name",
      placeholder: "Abc",
      required: true,
      type: "text",
      value: "",
      label: "your name",
      multiline: false,
    },
    {
      id: "email",
      placeholder: "Abc@aaa.com",
      required: true,
      type: "email",
      value: "",
      label: "email address",
      multiline: false,
    },
    {
      id: "subject",
      placeholder: "This is an optional",
      required: false,
      type: "text",
      value: "",
      label: "subject",
      multiline: false,
    },
    {
      id: "message",
      placeholder: "Hi! i’d like to ask about",
      required: true,
      type: "text",
      value: "",
      label: "message",
      multiline: true,
    },
  ]);

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubmitForm((prevForm) => {
      const { id, value, name } = ev.target;
      return prevForm.map((field) =>
        field.id === id || field.id === name
          ? { ...field, value: value }
          : field
      );
    });
  };

  return { submitForm, handleChange };
};
