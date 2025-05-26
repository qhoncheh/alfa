import { Percent } from "./components";
import { HeartIcon } from "@/icons";


type PercentsProps = {
  likes?: number;
  percent?: number;
};

const Percents = ({ likes, percent }: PercentsProps) => {
  return (
    <div className="w-full absolute flex justify-end gap-2 items-center top-1 left-1 z-20">
      <Percent className="bg-[#FF5555]">{percent}</Percent>
      <Percent className="bg-[#7575FE]">
        <span>{likes}</span>
        <HeartIcon />
      </Percent>
    </div>
  );
};

export default Percents;
