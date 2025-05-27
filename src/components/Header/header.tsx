import React from "react";
import Image from "next/image";
import { Button } from "../custom";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-5 py-4">
      <aside className="lg:flex items-center gap-4">
        <Button className="bg-[#F0F0F0] text-black h-12 flex items-center gap-2">
          <div className="rounded-full bg-black w-2 h-2"></div>
          خانه
        </Button>
        <Button className="bg-[#F0F0F0] text-black">مقالات</Button>
        <Button className="bg-[#F0F0F0] text-black w-28">درباره آلفا</Button>
      </aside>
      <Image src="/AlFA.png" alt="Logo" width={78} height={78} />
      <aside className="lg:flex items-center gap-4">
        <Button className="bg-[#F0F0F0] text-black w-max">رهن و اجاره</Button>
        <Button className="bg-[#F0F0F0] text-black w-28">رزرو سریع</Button>
        <Button className="bg-[#7575FE] text-white w-32">
          ثبت نام / ورود
        </Button>
      </aside>
    </header>
  );
}