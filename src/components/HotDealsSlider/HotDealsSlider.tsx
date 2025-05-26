import { Carts } from "./components";
import { Button } from "../custom";
export default function HotDealsSlider() {
  return (
    <div className="w-full flex justify-center items-center  overflow-hidden flex-col p-5 gap-4 border">
      <div className="flex justify-between w-full items-center">
        <span className="text-2xl">خرید و فروش های داغ این هفته</span>
        <Button className="w-max bg-[#7575FE]">مشاهده همه</Button>
      </div>
      <div className="grid grid-cols-4 gap-14 items-center justify-center w-full overflow-hidden ">
        <Carts currentIndex={0} />
        <Carts currentIndex={1} />
        <Carts currentIndex={2} />
        <Carts currentIndex={3} />
      </div>
    </div>
  );
}
