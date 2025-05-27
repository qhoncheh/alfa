import CategoryHelpText from "@/components/CategorySlider/categoryText";
import { HeroSection } from "@/components/HeroSection";
import LandingShinyAlpha from "@/components/ShinyAlfa/shiny";
import { HotDealsSlider } from "@/components/HotDealsSlider";
import React from "react";
import { propertyData } from "@/components/CategorySlider/data";
import Carousel from "@/components/CategorySlider/Crausol";
import DreamSection from "@/components/DreamDestination";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex gap-8">
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
    </div>
  );
};

export default page;
