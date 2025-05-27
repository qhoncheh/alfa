import { HeroSection } from "@/components/HeroSection";
import LandingShinyAlpha from "@/components/ShinyAlfa/shiny";
import { HotDealsSlider } from "@/components/HotDealsSlider";
import React from "react";
import CatCraosel from "@/components/CategorySlider/Crausol";

const page = () => {
  return (
    <div>
      <HeroSection />
      <CatCraosel />
      <HotDealsSlider />
      <LandingShinyAlpha />
    </div>
  );
};

export default page;
