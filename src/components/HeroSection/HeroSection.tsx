import React from 'react'
import ImageHero from './components/Right'
import TextHero from './components/Left'

const HeroSection = () => {
  return (
    <div className="w-full bg-black h-[600px] flex  gap-12 ">
      <ImageHero />
      <TextHero />
    </div>
  );
}

export default HeroSection