"use client";

import { Cart } from "@/components/register/components/slider/components/carts/components";
import { COMMENTS_ITEMS } from "@/data";
import { Actions } from "./components";
import { useState } from "react";
export default function Carts() {
  const [current, setCurrent] = useState<number>(3);

  const prevSide = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSide = () => {
    setCurrent((prev) =>
      prev === COMMENTS_ITEMS.length - 1 ? COMMENTS_ITEMS.length - 1 : prev + 1
    );
  };
  return (
    <div className="flex h-96  w-full justify-center  overflow-hidden ">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden  ">
        {COMMENTS_ITEMS.map((it, index) => {
          const offset = index - current;

          let scale = 0.6;

          let translateX = offset * 72;

          if (offset === 0) {
            scale = 0.8;

            translateX = 0;
          }

          return (
            <Cart
              key={it.id}
              image={""}
              title={it.exp}
              creator={it.sender}
              date={it.date}
              styles={{
                parentClassName: "!bg-slate-100 border-4 border-[#7575FE]",
              }}
              className="absolute transition-all duration-500 ease-in-out !w-full md:!w-1/2  !h-max  z-20 shadow-2xl shadow-slate-500 rounded-2xl !text-slate-600"
              style={{
                transform: `translateX(${translateX}%) scale(${scale}) `,

                rotate: `${offset * 8}deg`,
              }}
            />
          );
        })}

        <div className="flex justify-between  z-20 absolute w-full p-2">
          <Actions isRotate onClick={() => prevSide()} />
          <Actions onClick={() => nextSide()} />
        </div>
      </div>
    </div>
  );
}
