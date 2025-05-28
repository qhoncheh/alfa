"use client"
import React, { useEffect } from 'react'
import StatCard from './Cards'
import AOS from 'aos'
import 'aos/dist/aos.css'

const TextHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
      // mirror: false, 
    })
  }, [])

  return (
    <div className="h-full w-full text-white flex flex-col items-center">
      <div
        className="w-full flex justify-end flex-col"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h4
          className="md:text-4xl text-2xl pr-8 pt-6"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          خانه ای که میخوای،
          <br />
          جایی که میخوای
        </h4>
        <p
          className="text-[#767676] md:text-lg text-sm pr-8 pt-4"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {" "}
          رزرو ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون
          <br />
          مثل آب خوردن فقط در دلتا
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="900"
      >
        <StatCard />
      </div>
    </div>
  );
}

export default TextHero