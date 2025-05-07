"use client";

import { Button } from "@/components/custom";
import { FlashIcon } from "@/icons";
import { ButtonHTMLAttributes } from "react";

type ActionProps = {
  isRotate?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Action({ onClick, isRotate, ...props }: ActionProps) {
  return (
    <Button
      {...props}
      onClick={onClick}
      className="!w-14 !h-14 rounded-full bg-slate-400/30 flex justify-center items-center"
    >
      <FlashIcon className={`${isRotate && "rotate-180"}`} />
    </Button>
  );
}
