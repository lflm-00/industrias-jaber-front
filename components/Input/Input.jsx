"use client";

import React from "react";

const Input = ({ id, name, type = "text", placeholder, icon, value, onChange, disabled = false }) => {
  return (
    <div className="relative">
      {icon && (
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
          {icon}
        </span>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full pl-11 pr-4 py-3 bg-background-light dark:bg-[#382d22] border border-[#e8e4e0] dark:border-[#4a3f35] rounded-xl text-sm transition-all focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default Input;
