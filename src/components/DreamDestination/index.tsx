'use client';
import React from 'react';
import DreamSectionTop from './dreamSectionTop';
import Carousel from './Crausol';
import { propertyData } from './data';

export default function DreamSection() {
  return (
    <div className="rounded-3xl flex flex-row  justify-between  p-14 relative ml-2 border-2 border-dashed border-[#BABAFF]">
      <DreamSectionTop />
      <div className=" mt-12">
        <Carousel
          items={propertyData}
          showNavigation={true}
          showDots={true}
          className="mb-12"
        />
      </div>
    </div>
  );
}
    
