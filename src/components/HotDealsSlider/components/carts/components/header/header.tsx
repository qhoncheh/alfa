"use client";
import { Action } from "@/components/register/components/slider/components";
import { SLIDER_ITEMS } from "@/data";
import { useState } from "react";
import { Slider, Baner } from "./components";

type HeaderProps = {
  currentIndex?: number;
};

export default function Header({ currentIndex }: HeaderProps) {
  const [current, setCurrent] = useState<number>(currentIndex || 0);

  const prevSide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDER_ITEMS.length - 1 : prev - 1));
  };

  const nextSide = () => {
    setCurrent((prev) => (prev === SLIDER_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-2 overflow-hidden relative">
      <div className="flex overflow-hidden">
        <div className="w-full absolute flex justify-between z-20 top-10">
          <Action
            isRotate
            onClick={prevSide}
            className="!bg-slate-400/60 !w-9 !h-9 "
          />
          <Action onClick={nextSide} className="!bg-slate-400/60 !w-9 !h-9 " />
        </div>
        <Slider current={current} />
      </div>
      <Baner />
    </div>
  );
}
