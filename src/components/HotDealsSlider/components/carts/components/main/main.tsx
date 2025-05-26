import { TextWithIcon } from "../textWithIcon";
import {
  LocationIcon,
  BathroomIcon,
  YardIcon,
  BedIcon,
  ParkingIcon,
} from "@/icons";

type MainProps = {
  currentIndex?: number;
  id: number;
  location: string;
  bathroom: string;
  yard: string;
  bed: string;
  parking: string;
};

export default function Main({
  bathroom,
  bed,
  location,
  parking,
  yard,
}: MainProps) {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <TextWithIcon
        icon={<LocationIcon />}
        text={location}
        className="col-span-2"
      />
      <TextWithIcon icon={<BathroomIcon />} text={bathroom} />
      <TextWithIcon icon={<YardIcon />} text={yard} />
      <TextWithIcon icon={<BedIcon />} text={bed} />
      <TextWithIcon icon={<ParkingIcon />} text={parking} />
    </div>
  );
}
