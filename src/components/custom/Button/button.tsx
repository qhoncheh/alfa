import React from "react";
import { CustomButtonProps } from "../../../../types/types";

const Button = ({ children, ...props }: CustomButtonProps) => {

  return (
    <button className={`btn btn-gray-100 border-0 rounded-3xl w-20 h-12 text-sm ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;
