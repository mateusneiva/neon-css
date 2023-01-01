import React, { ReactNode } from "react";
import { Button as ButtonCSS } from "@neon-css/styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "contained" | "outlined" | "text";
  shape?: "rounded" | "circular" | "square";
  size?: "sm" | "md" | "lg";
  as?: "a" | "button";

  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function Button({
  variant = "contained",
  shape = "rounded",
  size = "md",
  as = "button",

  leftIcon,
  rightIcon,

  disabled,
  children,
}: ButtonProps) {
  if (as === "a") {
    return (
      <a
        className={`
        ${ButtonCSS.variant[variant]} 
        ${ButtonCSS.shape[shape]} 
        ${ButtonCSS.size[size]}
        ${disabled ? ButtonCSS.disabled : ""}`}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }

  return (
    <button
      className={`
      ${ButtonCSS.variant[variant]} 
      ${ButtonCSS.shape[shape]} 
      ${ButtonCSS.size[size]}
      ${disabled ? ButtonCSS.disabled : ""}`}
    >
      {children}
      {rightIcon}
    </button>
  );
}
