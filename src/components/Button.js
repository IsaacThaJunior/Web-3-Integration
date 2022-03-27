import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className="bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-3 lg:py-2 lg:px-4 rounded-lg text-xl cursor-pointer shadow duration-500">
      {children}
    </button>
  );
};

export default Button;
