"use client";

import { ClockIcon } from "@/icons";
import { Input } from "../Input";
import { usePinCodeInput } from "./hooks";
import { useEffect, useState } from "react";
const className =
  "bg-[#F9F9F9] py-3 rounded-xl text-center text-black text-lg w-full";

type PinCodeInputProps = {
  initailTime: number;
};

export default function PinCodeInput({ initailTime = 120 }: PinCodeInputProps) {
  const [remainingTime, setRemainingTime] = useState<number>(initailTime);

  const {
    inputRef,
    handleChange,
    handleKeyDown,
    handlePaste,
    handelFomatTime,
  } = usePinCodeInput();

  useEffect(() => {
    if (remainingTime <= 0) return;
    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <div className="w-full flex flex-col gap-6">
      <label>کد تایید</label>
      <div
        style={{ direction: "ltr" }}
        className="flex items-center justify-center overflow-hidden gap-2 pl-10 "
      >
        {Array.from({ length: 5 }).map((_it, index) => (
          <Input
            key={index}
            className={className}
            maxLength={1}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onChange={(e) => handleChange(e, index)}
            onPaste={(e) => handlePaste(e)}
            ref={(el) => {
              if (el) inputRef.current[index] = el;
            }}
          />
        ))}
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="flex items-center gap-2 rounded-full bg-[#c7c7d830] p-2">
          <ClockIcon />
          <small>{`${handelFomatTime(remainingTime)}`}</small>
        </div>
        <small>{`بعد از اتمام ${handelFomatTime(
          initailTime
        )} دقیقه ارسال مجدد فعال میشود`}</small>
      </div>
    </div>
  );
}
