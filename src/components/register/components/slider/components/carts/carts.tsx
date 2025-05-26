import { SLIDER_ITEMS } from "@/data";
import { Cart } from "./components";

type CartsProps = {
  current: number;
};

export default function Carts({ current }: CartsProps) {
  return (
    <div className="flex transition-transform duration-500 ease-in-out w-full h-full overflow-hidden">
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
  );
}
