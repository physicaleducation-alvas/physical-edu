"use client";
import { FocusCardsDemo } from "@/components/focusCards";
import SupportOrganizationsCarousel from "@/components/supportOrganizations";
import { useEffect, useRef } from "react";
import CampusInsights from "@/components/campusInsights";
import Link from "next/link";
import AchievementsCarousel from "@/components/achievements";


export default function SchoolsHeader() {
  const scrollRef = useRef(null);

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
      {/* -----Notice Board----- */}
      <section className="w-full mt-4 px-1 pb-6">
        <div className="w-full bg-[#fdf1dc] py-1 md:py-3 shadow-sm">

          {/* Left Red Box */}
          <div className="bg-[#e3342f] rounded-3xl text-white px-4 py-3 content3 flex items-center gap-3 font-semibold text-lg">
            Notice Board
            <span className="text-white text-xl">📣</span>
          </div>

          {/* Scrolling Text */}
          <Link href="/notice-board">
            <div
              ref={scrollRef}
              className="flex-1 overflow-x-hidden rounded whitespace-nowrap text-red-600 text-base py-3 pl-6"
            >
              <span className="inline-block subtitle1">
                CLICK HERE !!!! - AIET Alumni Association Registration 2025-26 •
                New Updates Coming Soon
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Link >

    </div >
  </div >
</section >

      <FocusCardsDemo />
      <AchievementsCarousel />
      <CampusInsights />
      <SupportOrganizationsCarousel />
    </>
  );
}
