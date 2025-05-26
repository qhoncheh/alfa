import CategoryHelpText from "@/components/CategorySlider/categoryHelpText";
import { HeroSection } from "@/components/HeroSection";
import LandingShinyAlpha from "@/components/ShinyAlfa/shiny";
import { HotDealsSlider } from "@/components/HotDealsSlider";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <LandingShinyAlpha />
      <HotDealsSlider />
      <CategoryHelpText />
    </div>
  );
};

export default page;
