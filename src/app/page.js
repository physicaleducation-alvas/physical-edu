"use client";
import HeroSlider from "@/components/achievements";
import { FocusCardsDemo } from "@/components/focusCards";
import SupportOrganizationsCarousel from "@/components/supportOrganizations";
import { useEffect, useRef } from "react";
import CampusInsights from "@/components/campusInsights";
import Link from "next/link";


export default function SchoolsHeader() {
  const scrollRef= useRef(null);

  useEffect(() => {
    const scrollText = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scrollText, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {/* === BELOW ENQUIRY STRIP SECTION === */}
      <section className=" w-full mt-3 px-1 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 w-full">
        </div>
        <div className="w-full bg-[#fdf1dc] py-3">
      <div className="flex items-center w-full overflow-hidden">

        {/* Left Red Box */}
        <div className="bg-[#e3342f] text-white px-4 py-3 flex items-center gap-3 font-semibold text-lg">
          Notice Board
          <span className="text-white text-xl">📣</span>
        </div>

        {/* Scrolling Text */}
        <Link href="/notice-board">
        <div
          ref={scrollRef}
          className="flex-1 overflow-x-hidden whitespace-nowrap text-red-600 text-lg py-3 pl-6"
        >
          <span className="inline-block">
            CLICK HERE !!!! - AIET Alumni Association Registration 2025-26 •
            New Updates Coming Soon
          </span>
        </div>
        </Link>
      </div>
    </div>
      </section>
      <FocusCardsDemo />
    <HeroSlider />
    <CampusInsights/>
    <SupportOrganizationsCarousel/>
      </>
  );
}
