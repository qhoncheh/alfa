"use client"
import { useEffect } from "react";
import { Header, Carts } from "./components";
import AOS from "aos";
import 'aos/dist/aos.css'


export default function Comments() {
   useEffect(() => {
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        once: true, 
      })
    }, [])
  return (
    <div className="flex flex-col w-full  gap-5 overflow-hidden bg-transparent rounded-2xl p-8 border-2 border-dashed border-[#7575FE]"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-offset="100"
    >
      <Header />
      <Carts />
    </div>
  );
}
