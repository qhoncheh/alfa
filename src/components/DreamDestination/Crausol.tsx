"use client";
import React, { useState } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";

interface CatCarouselItem {
  image: string;
  title: string;
  subtitle?: string;
}

interface CatCarouselProps {
  items: CatCarouselItem[];
  className?: string;
  showNavigation?: boolean;
  showDots?: boolean;
}

interface CatCarouselItemWithIndex extends CatCarouselItem {
  originalIndex: number;
}

const Carousel = ({
  items = [],
  className = "",
  showNavigation = true,
  showDots = true,
}: CatCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const getVisibleItems = (): CatCarouselItemWithIndex[] => {
    if (items.length <= 3) return items.map((item, idx) => ({ ...item, originalIndex: idx }));

    const visibleItems: CatCarouselItemWithIndex[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % items.length;
      visibleItems.push({ ...items[index], originalIndex: index });
    }
    return visibleItems;
  };

  if (!items.length) return null;

  return (
    <div className={`relative w-full  mx-auto ${className}  p-3`}>
      <div className="relative overflow-hidden">
        <div className="flex gap-4 transition-transform duration-300 ease-in-out">
          {getVisibleItems().map((item: CatCarouselItemWithIndex, index: number) => (
            <div
              key={`${item.originalIndex || index}-${currentIndex}`}
              className="flex-shrink-0 w-1/3 min-w-0"
            >
              <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    priority
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-semibold drop-shadow-lg">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-white/80 text-sm mt-1 drop-shadow">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showNavigation && items.length > 3 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-xl transition-all duration-200 z-10"
          >
            <FiChevronsLeft size="20" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-xl transition-all duration-200 z-10"
          >
            <MdOutlineKeyboardDoubleArrowRight size="20" />
          </button>
        </>
      )}

      {showDots && items.length > 3 && (
        <div className="flex justify-center space-x-2 mt-6">
          {items.map((_: typeof items[0], index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-blue-500 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Carousel;
