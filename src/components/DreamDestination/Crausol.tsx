"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CatCarouselItemWithIndex, CatCarouselProps } from "../DreamDestination/model";

const Carousel = ({
  items = [],
  className = "",
  showDots = true,
}: CatCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (items.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % items.length;
        console.log("Slide changed from", prevIndex, "to", nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

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
    <div className={`relative w-full max-w-[900px] mx-auto ${className} p-3`}>
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-4 transition-transform duration-300 ease-in-out w-full">
          {getVisibleItems().map((item: CatCarouselItemWithIndex) => (
            <div
              key={`${item.originalIndex}-${currentIndex}`}
              className="flex-shrink-0 w-1/3 min-w-0"
              style={{ minWidth: "33.3333%" }}
            >
              <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    // className="h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-semibold drop-shadow-lg">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-white/80 text-sm mt-1 drop-shadow">{item.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDots && items.length > 3 && (
        <div className="flex justify-center space-x-2 mt-6">
          {items.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-6 h-2 rounded-full transition-colors duration-200 transform ${index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400 scale-100"
                }`}
              style={{ flexShrink: 0 }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
