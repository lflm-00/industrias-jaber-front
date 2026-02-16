import React from "react";

const Checkbox = ({ id, label }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="w-4 h-4 bg-background-light border-[#e8e4e0] rounded focus:ring-primary text-[#4287C3]"
      />
      <label htmlFor={id} className="ml-2 text-sm text-warm-brown dark:text-[#a8998a]">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
