import { SLIDER_ITEMS } from "@/data";

type SliderProps = {
  current: number;
};

export default function Slider({ current }: SliderProps) {
  return (
    <div className="w-full h-full flex overflow-hidden rounded-lg">
      {SLIDER_ITEMS.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${item.image})`,
            transform: `translateX(${current * 100}%)`,
          }}
          className="min-w-full h-32   bg-no-repeat bg-cover bg-center  flex-col items-end justify-end gap-6 overflow-hidden flex transition-transform duration-500 ease-in-out"
        />
      ))}
    </div>
  );
}
