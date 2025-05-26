"use client";

import Link from "next/link";
import React, { forwardRef, InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  errors?: string;
  forgotPassword?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ forgotPassword, errors, label, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-3 relative">
        {label && (
          <div className="w-full flex justify-between items-center">
            <label className={`${errors ? "text-red-500" : "text-black"}`}>
              {label}
            </label>
            {label === "رمزعبور" && forgotPassword && (
              <Link href={forgotPassword} className="text-xs text-[#7575FE]">
                {"رمزعبور خود را فراموش کرده اید؟"}
              </Link>
            )}
          </div>
        )}
        <input ref={ref} {...props} />
        {errors && <small className="text-red-500">{errors}</small>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
