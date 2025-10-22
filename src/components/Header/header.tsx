"use client";
import React, { useState } from "react";
import { Button } from "../custom";
import { LINK_ITEMS } from "./data";
import { CustomLink } from "./components";

export default function Header() {
  const [activeLink, setActiveLink] = useState<number>(5);
  const leftLinks = [LINK_ITEMS[2], LINK_ITEMS[3], LINK_ITEMS[4]];
  const rightLinks = [LINK_ITEMS[0], LINK_ITEMS[1]];

  return (
    <header className="flex items-center  justify-between bg-black w-full py-4 p-4">
      <aside className="lg:flex items-center gap-4  w-full">
        <div className="flex w-full justify-between items-center text-slate-100">
          <div className="flex items-center gap-3 flex-row-reverse">
            {leftLinks.map((item, index) => (
              <CustomLink
                key={index}
                onClick={() => setActiveLink(item.id)}
                link={item.link}
                text={item.text}
                isActive={activeLink === item.id}
              />
            ))}
          </div>
          <h1>AlFA</h1>
          <div className="flex items-center gap-3 flex-row-reverse">
            {rightLinks.map((item, index) => (
              <CustomLink
                key={index}
                onClick={() => setActiveLink(item.id)}
                link={item.link}
                text={item.text}
                isActive={activeLink === item.id}
              />
            ))}
          </div>
        </div>
        <Button className="bg-[#7575FE] text-white w-32">ثبت نام / ورود</Button>
      </aside>
    </header>
  );
}
