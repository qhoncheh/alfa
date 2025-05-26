"use client";
import { Action } from "@/components/register/components/slider/components";
import { SLIDER_ITEMS } from "@/data";
import { useState } from "react";
import { Slider, Baner, Percents } from "./components";
import { Images } from "@/components/HotDealsSlider/models";

type HeaderProps = {
  currentIndex?: number;
  likes?: number;
  percent?: number;
  images: Images[];
  banerTitle: string;
};

export default function Header({
  currentIndex,
  images,
  likes,
  percent,
  banerTitle,
}: HeaderProps) {
  const [current, setCurrent] = useState<number>(currentIndex || 0);

  const prevSide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDER_ITEMS.length - 1 : prev - 1));
  };

  const nextSide = () => {
    setCurrent((prev) => (prev === SLIDER_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-2 overflow-hidden relative">
      {likes && percent && <Percents likes={likes} percent={percent} />}
      <div className="flex overflow-hidden">
        <div className="w-full absolute flex justify-between z-20 top-11">
          <Action
            isRotate
            onClick={prevSide}
            className="!bg-slate-400/60 !w-9 !h-9 "
          />
          <Action onClick={nextSide} className="!bg-slate-400/60 !w-9 !h-9 " />
        </div>
        <Slider current={current} images={images} />
      </div>
      <Baner banerTitle={banerTitle} />
    </div>
  );
}
