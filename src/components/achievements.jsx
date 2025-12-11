"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function AchievementsCarousel() {
  const IMAGES = [
    "/images/Achievements.png",
    "/images/campus1.jpg",
    "/images/campus2.jpg",
    "/images/campus3.jpg",
  ];

  const images = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const slideRef = useRef();

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => setIndex((prev) => prev + 1);

  useEffect(() => {
    if (index === images.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(images.length - 2);
      }, 700);
    }

    const t = setTimeout(() => setTransition(true), 50);
    return () => clearTimeout(t);
  }, [index, images.length]);

  return (
    <div className="">
      <div className="py-7 text-center text-3xl subtitle2 font-semibold md:py-7">
        Achievements <div className="mx-auto mt-2 w-25 h-2 bg-[#e4322f]  rounded-full" />
      </div>


      {/* SLIDER */}
      <div className="relative w-full overflow-hidden shadow-lg">
        <div
          ref={slideRef}
          className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""
            }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="min-w-full relative h-[180px] sm:h-100 md:h-[300px]"
            >
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                className="object-cover"
                priority={i === 1}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
