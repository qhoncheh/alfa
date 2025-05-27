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
};

const Carts = ({ price,currentIndex,banerTitle ,images,...props}: CarstProps) => {
  return (
    <div className="w- min-h-64  flex flex-col gap-5 p-2 ">
      <Header
        currentIndex={currentIndex}
        images={images}
        banerTitle={banerTitle}
      />
      <Main {...props} />
      <div className="flex items-center gap-2">
        <span className="text-slate-100">{`${price} تومان`}</span>
      </div>
    </div>
  );
};

export default Carts;
