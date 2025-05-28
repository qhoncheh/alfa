"use client"
import React, { useEffect } from 'react';
import { SEASONAL_DEALS_ITEMS } from "@/data";
import { ItemShowCase } from "../itemShowCase";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function SeasonalDeals() {
  useEffect(() => {
    AOS.init({
      duration: 5000, 
      easing: 'ease-in-out',
      once: true, 
    })
  }, [])

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-offset="150"
      data-aos-duration="1200"
    >
      <ItemShowCase
        title={`تخفیفات ویژه برای شروع بهار`}
        baner={"تخفیفات"}
        ITEMS={SEASONAL_DEALS_ITEMS}
        offTime={"2:25:20"}
      />
    </div>
  );
}