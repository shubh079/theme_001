import React from "react";
import { ButtonProps } from "./interface";

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  className = "",
  ...props
}) => {
  const classNames = [
    "flex items-center justify-center gap-4",
    "rounded-md overflow-hidden",
    "font-medium",
    className,
  ].join(" ");
  console.log(classNames);
  return <button className={classNames}>{label}</button>;
};
