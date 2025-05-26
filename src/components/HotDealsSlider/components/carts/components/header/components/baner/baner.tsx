"use client";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";


type BanerProps = {
  banerTitle: string;
};

export default function Baner({ banerTitle }: BanerProps) {
  const [save, setSave] = useState<boolean>(false);
  return (
    <div className="flex justify-between">
      <span className="text-sm font-semibold">{banerTitle}</span>
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
