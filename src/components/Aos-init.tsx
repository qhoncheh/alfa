"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن بر حسب میلی‌ثانیه
      once: true, // آیا انیمیشن فقط یک بار اجرا شود
      offset: 100, // فاصله از نقطه تریگر اصلی (بر حسب پیکسل)
      easing: "ease-in-out", // نوع حرکت انیمیشن
    });
  }, []);

  return null; // این کامپوننت چیزی رندر نمی‌کند
}
