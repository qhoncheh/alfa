"use client";

import { Button } from "@/components/custom";
import { FlashIcon } from "@/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  onHeaderActionClick?: () => void;
};

export default function Header({ onHeaderActionClick }: HeaderProps) {
  const pathname = usePathname();
  return (
    <header className="flex flex-col  justify-between  w-full gap-6">
      <div className="flex items-center justify-between w-full">
        <span className="text-4xl text-[#F0F0F0]">
          {pathname === "/login" ? "خوش برگشتی!" : "ثبت نام در آلفا"}
        </span>
        <Button
          onClick={onHeaderActionClick}
          className=" text-sm flex items-center gap-4 text-[#F0F0F0] w-max"
        >
          <small>
            {pathname === "/send-code" || pathname === "register-user"
              ? "بازگشت"
              : "صفحه اصلی"}
          </small>
          <FlashIcon className="" />
        </Button>
      </div>
      <small>
        {pathname === "send-code" ? (
          <div className="flex flex-col gap-1 text-gray-200">
            <small>
              کد تایید ارسال شده به{" "}
              <small className="text-[#7575FE]">Example@gmail.com</small> را
              وارد کنید .تغییر ایمیل
            </small>
            <Link className="text-[#7575FE]" href={"/email-login"}>
              {"تغییر ایمیل"}
            </Link>
          </div>
        ) : pathname === "/register-user" ? (
          "مشخصات خواسته شده را پر کنید "
        ) : (
          "برای ثبت نام در آلفا میتوانید با اکانت گوگل یا اپل خود و یا با ارسال کد تایید به ایمیل خود اقدام کنید"
        )}
      </small>
    </header>
  );
}
