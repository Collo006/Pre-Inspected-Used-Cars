"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/header-bg.jpg",
  "/images/header-bg.jpg"
 
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // change delay (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden "
      style={{ width: 1720, height: 600 }}
    >
      {/* Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-white w-4" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
