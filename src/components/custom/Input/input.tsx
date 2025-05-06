"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  errors?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const input = forwardRef<HTMLInputElement, InputProps>(
  ({ errors, label, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-3 relative">
        {label && (
          <label className={`${errors ? "text-red-500" : "text-black"}`}>
            {label}
          </label>
        )}
        <input ref={ref} {...props} />
        {errors && <small className="text-red-500">{errors}</small>}
      </div>
    );
  }
);

input.displayName = "Input";

export default input;
