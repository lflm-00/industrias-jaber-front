"use client";

import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  icon,
  type = "button",
  disabled = false,
  onClick,
  variant = "primary",
  size = "lg",
  fullWidth = true,
  className = "",
}) => {
  const baseStyles =
    "font-bold rounded-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#4287C3] hover:bg-[#136AB5] text-white shadow-lg shadow-[#4287C3]/20 disabled:hover:bg-[#4287C3]",

    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",

    ghost:
      "bg-transparent hover:bg-primary/10 text-primary",

    chip:
      "px-6 py-2 rounded-full border text-sm font-semibold bg-white dark:bg-[#382d22] border-[#e8e4e0] dark:border-[#3a2f24] hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
    >
      {children}
      {icon && (
        <span className="material-symbols-outlined text-xl">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;