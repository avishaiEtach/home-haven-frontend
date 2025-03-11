import React from "react";
import ButtonMui, { ButtonOwnProps } from "@mui/material/Button";
import { IconType } from "react-icons/lib";
import "./Button.scss";
import { SvgIconProps } from "@mui/material";

interface ButtonProps {
  text: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  variant?: ButtonOwnProps["variant"];
  type?: React.ButtonHTMLAttributes<unknown>["type"];
  className?: React.ButtonHTMLAttributes<unknown>["className"];
  disabled?: ButtonOwnProps["disabled"];
  buttonType?: "primary" | "secondary" | "border";
  Icon?: IconType | React.ComponentType<SvgIconProps>;
}

export const Button = ({
  text,
  className = "",
  disabled = false,
  onClick = () => {},
  type = "button",
  variant = "contained",
  buttonType = "primary",
  Icon = undefined,
}: ButtonProps) => {
  return (
    <ButtonMui
      className={`${className} ${buttonType} button`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {Icon ? <Icon /> : undefined}
      {text}
    </ButtonMui>
  );
};
