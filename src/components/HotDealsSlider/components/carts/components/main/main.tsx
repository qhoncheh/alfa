import { TextWithIcon } from "../textWithIcon";
import {
  LocationIcon,
  BathroomIcon,
  YardIcon,
  BedIcon,
  ParkingIcon,
} from "@/icons";

export default function Main() {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <TextWithIcon
        icon={<LocationIcon />}
        text={`تهران,زعفرانیه`}
        className="col-span-2"
      />
      <TextWithIcon icon={<BathroomIcon />} text={`2 حمام`} />
      <TextWithIcon icon={<YardIcon />} text={`حیاط دار`} />
      <TextWithIcon icon={<BedIcon />} text={`4 خواب`} />
      <TextWithIcon icon={<ParkingIcon />} text={`1 پارکینگ`} />
    </div>
  );
}
