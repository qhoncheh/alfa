import React from "react";
import Image from "next/image";
import { Button } from "../custom";
import { ThemeToggle } from "../custom/theme-toggle/theme";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-5 py-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <aside className="lg:flex items-center gap-4">
        <Button className="bg-light text-primary h-12 flex items-center gap-2" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
          <div className="rounded-full w-2 h-2" style={{ backgroundColor: 'var(--text-primary)' }}></div>
          خانه
        </Button>
        <Button className="bg-light text-primary" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>مقالات</Button>
        <Button className="bg-light text-primary w-28" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>درباره آلفا</Button>
        <ThemeToggle />
      </aside>
      <Image src="/AlFA.png" alt="Logo" width={78} height={78} />
      <aside className="lg:flex items-center gap-4">
        <Button className="bg-light text-primary w-max" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>رهن و اجاره</Button>
        <Button className="bg-light text-primary w-28" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>رزرو سریع</Button>
        <Button className="bg-[#7575FE] text-white w-32">
          ثبت نام / ورود
        </Button>
      </aside>
    </header>
  );
}