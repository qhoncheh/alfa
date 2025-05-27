import CategoryHelpText from "@/components/CategorySlider/categoryHelpText";
import { HeroSection } from "@/components/HeroSection";
import LandingShinyAlpha from "@/components/ShinyAlfa/shiny";
import { HotDealsSlider } from "@/components/HotDealsSlider";
import React from "react";
import { propertyData } from "@/components/CategorySlider/data";
import Carousel from "@/components/CategorySlider/Crausol";
import { Comments } from "@/components/comments";
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
          autoPlay={false}
          autoPlayInterval={5000}
          className="mb-12"
        />
      </div>
      <HotDealsSlider />
      <LandingShinyAlpha />
      <Comments />
    </div>
  );
};

export default page;
