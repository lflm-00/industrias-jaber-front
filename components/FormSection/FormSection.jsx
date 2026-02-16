"use client";

import React from "react";

const FormSection = ({ title, subtitle, children }) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-10">
      <div className="size-14 rounded-full flex items-center justify-center text-primary">
        {/* Aquí puedes pasar un icono o imagen si quieres */}
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-black tracking-tight text-[#181411] dark:text-white">
          {title}
        </h1>
        <p className="text-sm text-warm-brown dark:text-[#a8998a] mt-1">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default FormSection;
