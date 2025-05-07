import React from "react";



export type CustomButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: CustomButtonProps) => {
  return (
    <button
      {...props}
      className={`btn btn-gray-100 border-0 rounded-3xl w-20 h-12 text-sm ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
