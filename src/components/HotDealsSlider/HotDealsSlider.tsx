import { Carts } from "./components";
import { Button } from "../custom";
import { HOT_DEALS_ITEMS } from "@/data";
export default function HotDealsSlider() {
  return (
    <div className="w-full flex justify-center items-center  overflow-hidden flex-col  gap-4 border-2 border-dashed border-[#BABAFF] rounded-2xl p-8">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col gap-2">
          <Button className="w-max !border !border-[#7575FE] bg-transparent !text-[#7575FE]">
            خرید و فروش
          </Button>
          <span className="text-2xl text-slate-100">
            خرید و فروش های داغ این هفته
          </span>
        </div>
        <Button className="w-max bg-[#7575FE] text-slate-200">
          مشاهده همه
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 items-center justify-center w-full overflow-hidden ">
        {HOT_DEALS_ITEMS.map((it, index) => (
          <Carts key={index} {...it} currentIndex={index} />
        ))}
      </div>
    </div>
  );
}
