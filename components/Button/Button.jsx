"use client";

import React from "react";

const Button = ({ children, icon, type = "button", disabled = false, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="w-full bg-[#4287C3] hover:bg-[#136AB5] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#4287C3]/20 transition-all active:scale-[0.98] flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#4287C3]"
    >
      {children}
      {icon && <span className="material-symbols-outlined text-xl">{icon}</span>}
    </button>
  );
};

export default Button;
