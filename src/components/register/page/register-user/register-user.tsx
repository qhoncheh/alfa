"use client";

import { Input } from "@/components/custom";
import { Register } from "../..";

export default function RegisterUser() {
  return (
    <Register onHeaderActionClick={() => ""} buttonText="ثبت نام">
      <div className="flex flex-col gap-3 w-full">
        <Input
          className="input-register-style"
          label="شماره همراه"
          placeholder="شماره همراه خودرا وارد کنید"
        />
        <Input
          className="input-register-style"
          label="رمزعبور"
          placeholder="رمزعبور خودرا وارد کنید"
        />
        <Input
          className="input-register-style"
          label="تکرار رمزعبور"
          placeholder="تکرار رمزعبور خودرا وارد کنید"
        />
      </div>
    </Register>
  );
}
