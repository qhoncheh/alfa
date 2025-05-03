import React from "react";
import { CustomButtonProps } from "../../../../types/types";

const Button = ({ children, ...props }: CustomButtonProps) => {

  return (
    <button className={`btn btn-gray-100 rounded-3xl w-20 h-12 text-lg ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;
