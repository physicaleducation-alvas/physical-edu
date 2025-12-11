"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { navRoutes } from "@/config/routeConfig";
import CaretDownIcon from "@/components/caretDownIcon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto"
});

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export default function RootLayout({ children }) {

  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="w-full">

          {/* ===== TOP DARK STRIP ===== */}
          <div className="w-full flex content3">
            {/* Left orange Facebook block */}
            <div className="bg-[#e4322f] px-6 flex items-center justify-center text-white text-xl font-bold">
              Ig
            </div>

            {/* Right ORANGE info strip */}
            <div className="flex-1 bg-[#fbb040] text-white text-sm flex items-center justify-between px-4 md:px-10 gap-4">
              {/* Phone left */}
              <div className="flex items-center gap-2">
                <span className="">+91-7760272525</span>
              </div>

              {/* Center: location */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-red-400">📍</span>
                <span className="">Moodubidire Dakshina Kannada - 574227</span>
              </div>

              {/* Right: email */}
              <div className="flex items-center gap-2">
                <span className="text-red-400">✉</span>
                <span>alvasphysicaledu@alvas.org</span>
              </div>
            </div>
          </div>

          {/* ===== MAIN HEADER ROW: LOGO + NAV + CALL BADGE ===== */}
          <div className="w-full bg-white py-1.5 px-4 md:px-10 flex items-center justify-between gap-6">

            {/* LEFT: LOGO + TITLE */}
            <div className="flex items-center gap-7">
              {/* Logo (keep your existing image path / props) */}
              <Link href="/" className="cursor-pointer">
                <Image src="/images/alvas-logo.png" width={65} height={70} alt="Alva's Logo" />
              </Link>

              <div className="leading-tight">
                <div className=" md:text-l title tracking-wide text-lg">
                  Alva's College Of Physical Education
                </div>
                <div className="content3">
                  A Unit of Alva's Education Foundation (R.) Moodbidri
                </div>
                <div className="text-xs content2 text-gray-600">
                  Recgonized by NCTE Delhi & Govt. of Karnataka
                </div>
              </div>
            </div>

            {/* CENTER: NAVIGATION */}
            <nav
              className="flex items-center gap-8 text-lg text-gray-600"
              onMouseLeave={() => setActiveMenu(null)}
            >
              {navRoutes.map((route) => {
                const hasDropdown = Array.isArray(route.dropdown) && route.dropdown.length > 0;
                const dropdownItems = route.dropdown ?? [];

                const normalItems = dropdownItems.filter((it) => it.type !== "rich-card");
                const richItems = dropdownItems.filter((it) => it.type === "rich-card");
                const hasRichItems = richItems.length > 0;

                return (
                  <div
                    key={route.id}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setActiveMenu(route.id)}
                  >
                    {/* Parent Link */}
                    <Link
                      href={route.path}
                      className="flex items-center gap-1 hover:text-orange-600 whitespace-nowrap"
                    >
                      {route.name}
                      {hasDropdown && (
                        <CaretDownIcon className="w-3 h-3 transition-transform duration-200"
                          style={{ transform: activeMenu === route.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      )}
                    </Link>

                    {/* Hover Buffer */}
                    {hasDropdown && (
                      <div className="absolute left-0 top-full w-full h-3 pointer-events-none" />
                    )}

                    {/* Dropdown with Animation */}
                    <AnimatePresence>
                      {hasDropdown && activeMenu === route.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.85, y: 10 }}
                          transition={transition}
                          className={`absolute left-0 top-full mt-3 bg-white shadow-lg rounded-lg py-4 z-50 ${hasRichItems ? "min-w-[700px]" : normalItems.length > 5 ? "min-w-[460px]" : "min-w-[220px]"
                            }`}
                        >
                          {hasRichItems ? (
                            // Layout: Normal links on left, Rich cards on right
                            <div className="grid grid-cols-[220px_1fr] gap-6">
                              {/* Left Column: Normal Links */}
                              <div className="flex flex-col">
                                {normalItems.map((sub) => (
                                  <Link
                                    key={sub.id}
                                    href={sub.path}
                                    className="px-6 py-3 hover:bg-gray-50 rounded-md text-gray-700 hover:text-orange-600 transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>

                              {/* Right Column: Rich Cards */}
                              <div className="border-l border-gray-200 pl-6 pr-4">
                                <div className="grid grid-cols-2 gap-6">
                                  {richItems.map((sub) => (
                                    <div key={sub.id} className="flex flex-col">
                                      {/* Section Title */}
                                      {sub.title && (
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                          {sub.title}
                                        </h3>
                                      )}

                                      {/* Image */}
                                      {sub.image ? (
                                        <img
                                          src={sub.image}
                                          alt={sub.name ?? sub.title ?? ""}
                                          className="w-full h-[140px] object-cover rounded-lg mb-3"
                                        />
                                      ) : (
                                        <div className="w-full h-[140px] bg-gray-100 rounded-lg mb-3" />
                                      )}

                                      {/* Name */}
                                      {sub.name && (
                                        <div className="text-base font-semibold text-gray-900 mb-1">
                                          {sub.name}
                                        </div>
                                      )}

                                      {/* Qualification */}
                                      {sub.qualification && (
                                        <div className="text-xs text-gray-500 mb-2">
                                          {sub.qualification}
                                        </div>
                                      )}

                                      {/* Description */}
                                      {sub.description && (
                                        <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">
                                          {sub.description}
                                        </p>
                                      )}

                                      {/* Button */}
                                      {sub.button?.href && sub.button?.label && (
                                        <Link
                                          href={sub.button.href}
                                          className="inline-block px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs w-fit transition-colors"
                                        >
                                          {sub.button.label}
                                        </Link>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Standard dropdown without rich cards - with two column support
                            (() => {
                              const normalLength = normalItems.length;
                              const normalHasTwoCols = normalLength > 5;
                              const normalIsBalanced = normalLength > 5 && normalLength <= 10;
                              const normalSplitIndex = normalIsBalanced ? Math.ceil(normalLength / 2) : 5;

                              return normalHasTwoCols ? (
                                <div className="grid grid-cols-[220px_auto] gap-6 px-4">
                                  <div>
                                    {normalItems.slice(0, normalSplitIndex).map((sub) => (
                                      <Link
                                        key={sub.id}
                                        href={sub.path}
                                        className="block px-9 py-3 hover:bg-gray-100 whitespace-nowrap"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                  <div>
                                    {normalItems.slice(normalSplitIndex).map((sub) => (
                                      <Link
                                        key={sub.id}
                                        href={sub.path}
                                        className="block px-9 py-3 hover:bg-gray-100 whitespace-nowrap"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  {normalItems.map((sub) => (
                                    <Link
                                      key={sub.id}
                                      href={sub.path}
                                      className="block px-6 py-3 hover:bg-gray-50 rounded-md text-gray-700 hover:text-orange-600 transition-colors"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              );
                            })()
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>



          </div>
        </header>

        {/* College Picture */}
        <main className="">
          <section className="relative mt-1">

            {/* Hero image wrapper – full width, not shrunken */}
            <div className="overflow-hidden shadow">
              <Image src="/images/hero-section.png" width={1920} height={800} alt="Campus" className="w-full h-auto" priority />
            </div>

            {/* Enquiry strip overlay */}
            <div className="absolute left-0 -bottom-10  w-[92%] md:w-[85%] bg-white/95 rounded-r-full p-4 flex items-center justify-between shadow-lg border">
              <div>
                <h3 className="font-semibold">Enquiry</h3>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Contact Number</div>
                <div className="font-bold text-red-600">88888-99999-00000</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Email ID</div>
                <div className="font-semibold text-red-600">info@alvas.org</div>
              </div>
            </div>

          </section>
        </main>
        {children}
        {/* FOOTER SECTION */}
        <footer className="w-full bg-[#1e1919] text-white py-12">
          <div className="max-w-7xl mx-auto px-6">

            {/* FLEX CONTAINER */}
            <div className="flex flex-col md:flex-row justify-between gap-12">

              {/* CONTACT US */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>

                <img
                  src="/images/alvas-logo.png"
                  alt="Alvas Logo"
                  className="w-24 mb-4"
                />

                <p className="leading-relaxed text-sm mb-4">
                  Alva's College of Physical Education,<br />
                  Smt. Sundari Ananda Alva Campus,<br />
                  Vidyagiri, Moodabidri - 574227,<br />
                  Dakshina Kannada, Karnataka.
                </p>

                <p className="text-sm">Phone No: 9743700154,</p>
                <p className="text-sm">Mobile No: 8150079070</p>
              </div>

              {/* CAMPUS */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Campus</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-gray-300">Alva's Celebrations</a></li>
                  <li><a href="#" className="hover:text-gray-300">Education</a></li>
                  <li><a href="#" className="hover:text-gray-300">Literature</a></li>
                  <li><a href="#" className="hover:text-gray-300">Sports</a></li>
                </ul>
              </div>

              {/* COURSES */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Courses</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      B.P.Ed - Bachelor Of <br /> Physical Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      M.P.Ed - Master Of <br />Physical Education
                    </a>
                  </li>
                </ul>
              </div>

              {/* ABOUT */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">About</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-gray-300">College</a></li>
                  <li><a href="#" className="hover:text-gray-300">Management</a></li>
                </ul>
              </div>

            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
