'use client';
import React from 'react';
import DreamSectionTop from './dreamSectionTop';
import Carousel from './Crausol';
import { Data } from './data';

export default function DreamSection() {
  return (
    <div className="rounded-3xl flex flex-row  justify-between p-8 relative ml-2 border-2 border-dashed border-[#7575FE]">
      <DreamSectionTop />
      <div className=" mt-12">
        <Carousel
          items={Data}
          showNavigation={true}
          showDots={true}
          className="mb-12"
        />
      </div>
    </div>
  );
}
    
