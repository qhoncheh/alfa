import { ChangeEvent, useRef } from "react";

export const usePinCodeInput = () => {
  const inputRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (value.length === 1 && index < inputRef.current.length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const input = inputRef.current[index];
      if (input?.value === "" && index > 0) {
        const prevInput = inputRef.current[index - 1];
        prevInput?.focus();
        prevInput!.value = "";
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("Text").trim();

    if (/^\d{5}$/.test(pastedData)) {
      pastedData.split("").forEach((char, idx) => {
        const input = inputRef.current[idx];
        if (input) {
          input.value = char;
        }
      });
      inputRef.current[4]?.focus();
      e.preventDefault();
    }
  };

  const handelFomatTime = (secounds: number) => {
    const m = String(Math.floor(secounds / 60)).padStart(2, "0");
    const s = String(secounds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return {
    inputRef,
    handleChange,
    handleKeyDown,
    handlePaste,
    handelFomatTime,
  };
};
