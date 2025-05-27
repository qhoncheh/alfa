import CategoryHelpText from "@/components/CategorySlider/categoryText";
import { HeroSection } from "@/components/HeroSection";
import LandingShinyAlpha from "@/components/ShinyAlfa/shiny";

import React from "react";
import { propertyData } from "@/components/CategorySlider/data";
import Carousel from "@/components/CategorySlider/Crausol";
import DreamSection from "@/components/DreamDestination";
import { Comments } from "@/components/comments";
import { HotDealsSlider } from "@/components/HotDealsSlider";
import { SeasonalDeals } from "@/components/SeasonalDeals";
const page = () => {
  return (
    <div className="flex flex-col bg-black  px-5 items-center w-full h-full gap-12">
      <HeroSection />
      <SeasonalDeals />
      
      <div className="flex gap-8 border-2 rounded-2xl !border-dashed !border-[#BABAFF] p-4">
        <CategoryHelpText />
        <Carousel
          items={propertyData}
          showNavigation={true}
          showDots={true}
          className="mb-12"
        />
      </div>
      <DreamSection />
      <LandingShinyAlpha />
      <HotDealsSlider />
      <Comments />
    </div>
  );
};

export default page;
