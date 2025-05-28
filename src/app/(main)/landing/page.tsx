import {
  HeroSection,
  SeasonalDeals,
  LandingShinyAlpha,
  HotDealsSlider,
  Comments,
} from "@/components";
import CategoryHelpText from "@/components/CategorySlider/categoryText";
import Carousel from "@/components/CategorySlider/Crausol";
import { propertyData } from "@/components/CategorySlider/data";
import DreamSection from "@/components/DreamDestination";

const page = () => {
  return (
    <div className="flex flex-col bg-black  px-5 items-center w-full h-full gap-24">
      <HeroSection />

      <div className="flex gap-8 border-2 rounded-2xl !border-dashed !border-[#7575FE] p-10">
        <CategoryHelpText />
        <Carousel
          items={propertyData}
          showNavigation={true}
          showDots={true}
          className="mb-12"
        />
      </div>
      <SeasonalDeals />
      <DreamSection />
      <LandingShinyAlpha />
      <HotDealsSlider />
      <Comments />
    </div>
  );
};

export default page;
