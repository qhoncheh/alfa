"use client";

import { Input } from "@/components/custom";
import { Register } from "../..";

export default function Login() {
  return (
    <Register
      onAppleLogin={() => ""}
      onGoogleLogin={() => ""}
      onHeaderActionClick={() => ""}
      linkAddress="/login"
      linkText="ورود به حساب"
      text="حساب کاربری دارید؟"
    >
      <div className="flex flex-col gap-3 w-full">
        <Input
          className="input-register-style"
          label="ایمیل"
          placeholder="ایمیل خودرا وارد کنید"
        />
        <Input
          className="input-register-style"
          label="رمزعبور"
          placeholder="رمزعبور خودرا وارد کنید"
        />
      </div>
    </Register>
  );
}
