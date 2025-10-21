"use client";

import Link from "next/link";
import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type InputProps = {
  label?: string;
  errors?: string;
  forgotPassword?: string;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ forgotPassword, errors, label, icon, ...props }, ref) => {
    return (
      <div className=" flex flex-col gap-3 relative">

        {label && (
          <div className="w-full flex justify-between gap-2 items-center">
            <label className={`${errors ? "text-red-500" : "text-white"}`}>
              {label}
            </label>
            {label === "رمزعبور" && forgotPassword && (
              <Link href={forgotPassword} className="text-xs text-[#7575FE]">
                {"رمزعبور خود را فراموش کرده اید؟"}
              </Link>
            )}
          </div>
        )}
        <div className="relative  !w-max">
          {icon && (
            <div className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </div>
          )}
        <input ref={ref} {...props} />
        </div>
        {errors && <small className="text-red-500">{errors}</small>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;




