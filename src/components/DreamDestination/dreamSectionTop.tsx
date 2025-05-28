"use client"
import React, { useEffect } from 'react';
import { SectionTop } from "../custom/dream-top/dream-top";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function DreamSectionTop() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    })
  }, [])

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-offset="120"
      data-aos-duration="1200"
    >
      <SectionTop
        mainText={['اجاره ویلا در\nمحبوب‌ترین مقاصد این ماه']}
        subText={[
          'در اینجا می توانید محبوب ترین مقصد هارا از بین انتخاب\n کاربران مشاهده کنید و آن ها بررسی کنید !',
        ]}
        chipText="مقصد رویا ها"
      />
    </div>
  );
}