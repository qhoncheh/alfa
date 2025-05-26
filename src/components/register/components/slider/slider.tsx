import { Action, Carts } from "./components";
import { useEffect, useState, useRef } from "react";
import { SLIDER_ITEMS } from "@/data";
import { Progress } from "./components/proggress";

export default function Slider() {
  const [current, setCurrent] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const targetProgress = useRef<number>(0);

  const prevSide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDER_ITEMS.length - 1 : prev - 1));
  };

  const nextSide = () => {
    setCurrent((prev) => (prev === SLIDER_ITEMS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    targetProgress.current = (current / (SLIDER_ITEMS.length - 1)) * 100;
  }, [current]);

  useEffect(() => {
    const duration = 4000;
    const interval = setInterval(nextSide, duration);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setProgress((prev) => {
        const step = 2;
        const target = targetProgress.current;

        if (Math.abs(prev - target) < step) {
          return target;
        }
        if (prev === 100 && target === 0) {
          return 0;
        }

        return prev + (prev < target ? step : -step);
      });
    }, 20);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="w-full hidden h-full sm:flex p-3 relative overflow-hidden">
      <Carts current={current} />
      <div className="flex items-center gap-3 absolute left-10 bottom-10">
        <Progress progressPercentage={progress} />
        <Action isRotate onClick={prevSide} className="!w-14 h-14" />
        <Action onClick={nextSide} className="!w-14 h-14" />
      </div>
    </div>
  );
}
