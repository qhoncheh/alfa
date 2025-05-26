"use client";

import { Input } from "@/components/custom";
import { Register } from "../..";

export default function EmailLogin() {
  return (
    <Register
      onAppleLogin={() => ""}
      onGoogleLogin={() => ""}
      onHeaderActionClick={() => ""}
      linkAddress="/login"
      linkText="ورود به حساب"
      text="حساب کاربری دارید؟"
      buttonText="ارسال کد تایید"
    >
      <Input
        className="input-register-style"
        label="ایمیل"
        placeholder="ایمیل خودرا وارد کنید"
      />
    </Register>
  );
}
