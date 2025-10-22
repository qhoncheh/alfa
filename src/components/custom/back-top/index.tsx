"use client";
import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // بعد از 300px ظاهر شود
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 cursor-pointer bg-[#7575FE] text-white p-3 rounded-full shadow-lg hover:bg-[#7979df] transition"
      aria-label="Back to top"
    >
      <HiArrowUp size={24} />
    </button>
  );
}
