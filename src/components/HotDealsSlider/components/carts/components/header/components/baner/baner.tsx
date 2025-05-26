"use client";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";

export default function Baner() {
  const [save, setSave] = useState<boolean>(false);
  return (
    <div className="flex justify-between">
      <span className="text-sm font-semibold">{`آپارتمان لوکس زعفرانیه`}</span>
      <FaRegStar
        size={20}
        onClick={() => setSave((prev) => !prev)}
        className={`cursor-pointer active:scale-95 transitiona-all duration-300 ${
          save ? "text-yellow-500" : "text-slate-100"
        }`}
      />
    </div>
  );
}
