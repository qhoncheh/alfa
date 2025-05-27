import { Button } from "@/components/custom";

export default function Header() {
  return (
    <div className="flex w-full justify-between ">
      <div className="flex flex-col gap-2  w-1/5">
        <span className="text-2xl text-[#000000]">{`نظرات کاربران درباره آلفا`}</span>
        <small className="text-justify text-[#555555]">{`تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .`}</small>
      </div>
      <Button className="border bg-[#7575FE] w-max">{`نظرات کاربران`}</Button>
    </div>
  );
}
