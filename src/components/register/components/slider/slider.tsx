import { Action, Cart } from "./components";
import { useEffect, useState } from "react";
import { SLIDER_ITEMS } from "@/data";
export default function Slider() {
  const [current, setCurrent] = useState<number>(0);

  const prevSide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDER_ITEMS.length - 1 : prev - 1));
  };

  const nextSide = () => {
    setCurrent((prev) => (prev === SLIDER_ITEMS.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full hidden h-full  sm:flex p-3 relative overflow-hidden tes">
      <div className="flex transition-transform duration-500 ease-in-out w-full h-full   overflow-hidden">
        {SLIDER_ITEMS.map((item, index) => (
          <div
            style={{
              transform: `translateX(${current * 100}%)`,
            }}
            key={index}
            className="min-w-full h-full flex transition-transform duration-500 ease-in-out"
          >
            <Cart {...item} />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 absolute left-10 bottom-10">
        <Action isRotate onClick={prevSide} />
        <Action onClick={nextSide} />
      </div>
    </div>
  );
}
