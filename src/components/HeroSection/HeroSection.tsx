import React from 'react'
import ImageHero from './components/Right'
import TextHero from './components/Left'

const HeroSection = () => {
  return (
    <div className='w-full h-[600px] flex flex-row gap-4 mt-10'>
      <div className="w-1/2 h-full mt-6">
      <ImageHero />
      </div>
      <div className="w-1/2 h-full">
          <TextHero />
      </div>
    </div>
  )
}

export default HeroSection