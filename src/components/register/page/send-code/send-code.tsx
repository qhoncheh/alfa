"use client";

import { Register } from "../..";
import { PinCodeInput } from "@/components/custom";

export default function SendCode() {
  return (
    <Register onHeaderActionClick={() => ""} buttonText="ثبت نام">
      <PinCodeInput initailTime={240} />
    </Register>
  );
}
