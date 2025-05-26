import { Percent } from "./components";
import { HeartIcon } from "@/icons";
const Percents = () => {
  return (
    <div className="w-full absolute flex justify-end gap-2 items-center top-1 left-1 z-20">
      <Percent className="bg-[#FF5555]">15%</Percent>
      <Percent className="bg-[#7575FE]">
        <span>4.5</span>
        <HeartIcon />
      </Percent>
    </div>
  );
};

export default Percents;
