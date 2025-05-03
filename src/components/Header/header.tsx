import React from "react";
import Logo from "../../../public/AlFA.png";
import Image from "next/image";
import { Button } from "../custom";

export default function Header() {
  return (
    <>
      <div className="lg:hidden">
      </div>
      <aside className="hidden lg:flex items-center gap-4">
        <Button className="bg-[#F0F0F0] text-black h-12 flex">
          <div className="rounded-full bg-black w-2 h-2"></div>
          خانه
        </Button>
        <Button className="bg-[#F0F0F0] text-black h-12">
          مقالات
        </Button>
        <Button className="bg-[#F0F0F0] text-black h-12">
          درباره آلفا
        </Button>
      </aside>
      <Image src={Logo.src} alt="Logo" width={78} height={78} />
      <aside className="hidden lg:flex items-center gap-4">
        <Button className="bg-[#7575FE] text-white h-12">
          ثبت نام / ورود
        </Button>
      </aside>
      <aside className="lg:hidden">
        <Button className="bg-[#7575FE] text-white h-12">
          ثبت نام / ورود
        </Button>
      </aside>
    </>
  );
}
