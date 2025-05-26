import { Carts } from "./components";
import { Button } from "../custom";
import { HOT_DEALS_ITEMS } from "@/data";
export default function HotDealsSlider() {
  return (
    <div className="w-full flex justify-center items-center  overflow-hidden flex-col  gap-4 border">
      <div className="flex justify-between w-full items-center">
        <span className="text-2xl">خرید و فروش های داغ این هفته</span>
        <Button className="w-max bg-[#7575FE]">مشاهده همه</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 items-center justify-center w-full overflow-hidden ">
        {HOT_DEALS_ITEMS.map((it, index) => (
          <Carts key={index} {...it} currentIndex={index} />
        ))}
      </div>
    </div>
  );
}
