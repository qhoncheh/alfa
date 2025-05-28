"use client"
import React, { useEffect } from 'react';
import { Button } from '../custom';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function CategoryHelpText() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',  
      once: true, 
    })
  }, [])

  return (
    <div
      className="flex flex-col gap-4 pr-6 w-1/2"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <Button
        className="text-[#7575FE] bg-black w-max border-1 border-[#7575FE]"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        دسته بندی
      </Button>
      <p
        className="text-3xl text-white font-bold"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        هر ملکی بخوای
        <br />
        اینجا پیدا میشه!
      </p>
      <p
        className="text-[#a59595]"
        data-aos="fade-in"
        data-aos-delay="300"
      >
        با کلیک به روی هر دسته بندی می توانید تمام آگهی
        <br />
        مربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید
      </p>
    </div>
  );
}