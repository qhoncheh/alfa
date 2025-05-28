"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Modal from './Modal'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ImageHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true, 
      // mirror: false, 
    })
  }, [])

  return (
    <div
      className="md:w-full md:h-[35.35rem] h-[20rem] sm:flex-center rounded-2xl relative"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <Image
        src="/hero.png"
        alt="Modern apartment building"
        layout="fill"
        className="rounded-3xl relative w-full object-cover"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <div
        className="absolute top-27/28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-2.5 lg:top-1/2"
        data-aos="fade-in"
        data-aos-delay="800"
      >
        <Modal />
      </div>
    </div>
  );
}

export default ImageHero