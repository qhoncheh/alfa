import { Carts } from "./components";
import { Button } from "../custom";
import { ItemShowCaseType } from "./models";
import { Clock } from "@/icons";

type ItemShowCase = {
  title: string;
  baner: string;
  ITEMS: ItemShowCaseType[];
  offTime?: string;
};

export default function ItemShowCase({
  title,
  baner,
  ITEMS,
  offTime,
}: ItemShowCase) {
  return (
    <div className="w-full flex justify-center items-center  overflow-hidden flex-col  gap-4 border-2 border-dashed border-[#7575FE] rounded-2xl p-8">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col gap-2">
          <Button className="w-max !border !border-[#7575FE] bg-transparent !text-[#7575FE]">
            {baner}
          </Button>
          <div className="flex flex-col gap-2">
            <span className="text-2xl text-slate-100">{title}</span>
            {offTime && (
              <div className="flex items-center gap-3">
                <Button className="w-max !border flex items-center gap-2 !bg-[#FF5555]  !text-white">
                  {offTime}
                  <Clock />
                </Button>
                <small className="text-[#FF5555] font-semibold">{`فرصت رو
از دست نده`}</small>
              </div>
            )}
          </div>
        </div>
        <Button className="w-max bg-[#7575FE] text-slate-200">
          مشاهده همه
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 items-center justify-center w-full overflow-hidden ">
        {ITEMS.map((it, index) => (
          <Carts key={index} {...it} currentIndex={index} />
        ))}
      </div>
    </div>
  );
}
