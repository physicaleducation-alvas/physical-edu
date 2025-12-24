// Component file: SupportOrganizationsCarousel.js
"use client";
import Image from "next/image";

export default function TestimonialsCarousel() {
  const logos = [
    "/images/support1.png",
    "/images/support2.png",
    "/images/support3.png",
    "/images/support4.png",
    "/images/support5.png",
    "/images/support6.png",
    "/images/support7.png",
    "/images/support8.png",
  ];

  return (
    <section className="w-full py-12">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold title text-gray-900">
          Testimonials
        </h2>
        <div className="mx-auto mt-2 w-20 h-2 bg-[#e4322f] rounded-full" />
      </div>

      {/* Continuous scrolling strip */}
      <div className="w-full bg-[#fdf8f0] py-8 border rounded-md overflow-hidden">
        <div className="flex items-center gap-15 md:gap-5 animate-marquee-scroll">
          {/* First set of logos */}
          {logos.map((src, i) => (
            <div
              key={`logo-${i}`}
              className="relative w-28 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 shrink-0"
            >
              <Image
                src={src}
                alt={`Testimonials ${i + 1}`}
                fill
                className="object-contain content3"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((src, i) => (
            <div
              key={`logo-duplicate-${i}`}
              className="relative w-28 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 shrink-0"
            >
              <Image
                src={src}
                alt={`Testimonials ${i + 1}`}
                fill
                className="object-contain content3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
