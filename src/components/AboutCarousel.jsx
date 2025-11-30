import React, { useState, useEffect } from "react";
import { getImageUrl } from "../utils/imageResolver";

export default function AboutCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageMap = {
    peak1: getImageUrl("peak1.svg"),
    peak2: getImageUrl("peak2.svg"),
    peak3: getImageUrl("peak3.svg"),
  };

  const cards = [
    { image: imageMap.peak1 },
    { image: imageMap.peak2 },
    { image: imageMap.peak3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardClasses = (index) => {
    const diff = (index - currentIndex + cards.length) % cards.length;

    if (diff === 0) {
      return "translate-x-0 scale-110 z-30 opacity-100";
    } else if (diff === 1) {
      return "translate-x-[45%] scale-85 opacity-70 z-20";
    } else {
      return "-translate-x-[45%] scale-85 opacity-70 z-20";
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Carousel container with perspective */}
      <div
        className="relative w-full max-w-6xl h-96 md:h-[500px] overflow-x-hidden"
        style={{ perspective: "1500px" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-50 md:w-80 h-50 md:h-96 rounded-3xl shadow-2xl transition-all duration-700 ease-out cursor-pointer ${getCardClasses(
                index
              )}`}
              style={{
                transformStyle: "preserve-3d",
                transform: `$${
                  (index - currentIndex + cards.length) % cards.length === 0
                    ? "translateX(0%) scale(1.1) rotateY(0deg)"
                    : (index - currentIndex + cards.length) % cards.length === 1
                    ? "translateX(30%) scale(0.85) rotateY(-25deg)"
                    : "translateX(-30%) scale(0.85) rotateY(25deg)"
                }`,
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className={`rounded-3xl overflow-hidden`}>
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-3 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all rounded-full ${
              index === currentIndex
                ? "w-12 h-3 bg-gray-800"
                : "w-3 h-3 bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
