import { HOT_DEALS_ITEMS } from "@/data";
import { ItemShowCase } from "../itemShowCase";

export default function SeasonalDeals() {
  return (
    <ItemShowCase
      title={`تخفیفات ویژه
برای شروع بهار`}
      baner={"تخفیفات"}
      ITEMS={HOT_DEALS_ITEMS}
      offTime={"2:25:20"}
    />
  );
}
