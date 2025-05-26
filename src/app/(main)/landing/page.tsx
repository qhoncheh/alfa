import CategoryHelpText from "@/components/CategorySlider/categoryHelpText";
import { HeroSection } from "@/components/HeroSection";
import LandingShinyAlpha from "@/components/ShinyAlfa/shiny";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <LandingShinyAlpha />
      <CategoryHelpText />
    </div>
  );
};

export default page;
