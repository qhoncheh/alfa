import { HOT_DEALS_ITEMS } from "@/data";
import { ItemShowCase } from "../itemShowCase";

export default function HotDealsSlider() {
  return (
    <ItemShowCase
      title={`خرید و فروش های داغ این هفته`}
      baner={"خرید و فروش"}
      ITEMS={HOT_DEALS_ITEMS}
    />
  );
}
