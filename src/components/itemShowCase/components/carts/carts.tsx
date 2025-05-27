import { Images } from "../../models";
import { Header, Main } from "./components";

type CarstProps = {
  currentIndex?: number;
  id: number;
  banerTitle: string;
  likes?: number;
  percent?: number;
  location: string;
  bathroom: string;
  yard: string;
  bed: string;
  parking: string;
  images: Images[];
  price: string;
  off?: string;
};

const Carts = ({
  price,
  currentIndex,
  banerTitle,
  images,
  likes,
  percent,
  off,
  ...props
}: CarstProps) => {
  return (
    <div className=" min-h-64  flex flex-col gap-5 p-4 border border-slate-200 rounded-2xl">
      <Header
        currentIndex={currentIndex}
        images={images}
        banerTitle={banerTitle}
        likes={likes}
        percent={percent}
      />
      <Main {...props} />
      <div className="flex items-center gap-2">
        {off && (
          <div className="relative">
            <div className="w-1/2 h-0.5 border border-slate-100 absolute rotate-[30deg] left-10 top-2" />
            <span className="text-slate-500">{`${off} تومان`}</span>
          </div>
        )}
        <span className="text-slate-100">{`${price} تومان`}</span>
      </div>
    </div>
  );
};

export default Carts;
