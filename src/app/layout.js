"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { navRoutes } from "@/config/routeConfig";
import CaretDownIcon from "@/components/caretDownIcon";
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/heroCarousel";


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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);

  const toggleMobileSubmenu = (routeId) => {
    setMobileExpandedMenu(mobileExpandedMenu === routeId ? null : routeId);
  };
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="w-full">
          {/* TOP DARK STRIP */}
          <div className="w-full flex">
            <div className="bg-[#e4322f] px-6 flex items-center justify-center text-white text-xl font-bold">
              <Link href="https://www.instagram.com/alvas_physical_education/"><img src="/images/insta-icon.png" className="w-8 h-8 p-1" /></Link>
            </div>
            <div className="flex-1 bg-[#fbb040] text-white text-sm flex items-center justify-between px-4 md:px-10 gap-4">
              <div className="flex items-center gap-2">
                <span><img src="/images/call-icon.png" className="w-4 h-4" /></span>
                <span>+91-7760272525</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="text-red-400">📍</span>
                <span>Moodubidire Dakshina Kannada - 574227</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-red-400"><img src="/images/mail-icon.png" className="w-4 h-4" /></span>
                <Link href="mailto:alvasphysicaledu@alvas.org"><span>alvasphysicaledu@alvas.org</span></Link>
              </div>
            </div>
          </div>

          {/* MAIN HEADER ROW */}
          <div className="w-full bg-white py-1.5 px-4 md:px-10 flex items-center justify-between gap-6">
            {/* LEFT: LOGO + TITLE */}
            <div className="flex items-center gap-3 md:gap-7">
              <Link href="/" className="cursor-pointer">
                <Image src="/images/alvas-logo.png" width={65} height={70} alt="Alva's Logo" />
              </Link>
              <div className="leading-tight">
                <div className="text-sm md:text-lg font-semibold tracking-wide">
                  Alva's College Of Physical Education
                </div>
                <div className="hidden md:block text-xs text-gray-600">
                  A Unit of Alva's Education Foundation (R.) Moodbidri
                </div>
                <div className="hidden md:block text-xs text-gray-600">
                  Recognized by NCTE Delhi & Govt. of Karnataka
                </div>
              </div>
            </div>

            {/* DESKTOP NAVIGATION - Hidden on mobile */}
            <nav
              className="hidden lg:flex items-center gap-8 text-lg text-gray-600"
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
                    <Link
                      href={route.path}
                      className="flex items-center gap-1 hover:text-orange-600 whitespace-nowrap"
                    >
                      {route.name}
                      {hasDropdown && (
                        <CaretDownIcon
                          className="w-3 h-3 transition-transform duration-200"
                          style={{ transform: activeMenu === route.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      )}
                    </Link>

                    {hasDropdown && (
                      <div className="absolute left-0 top-full w-full h-3 pointer-events-none" />
                    )}

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
                            <div className="grid grid-cols-[220px_1fr] gap-6">
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
                              <div className="border-l border-gray-200 pl-6 pr-4">
                                <div className="grid grid-cols-2 gap-6">
                                  {richItems.map((sub) => (
                                    <div key={sub.id} className="flex flex-col">
                                      {sub.title && (
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                          {sub.title}
                                        </h3>
                                      )}
                                      {sub.image ? (
                                        <img
                                          src={sub.image}
                                          alt={sub.name ?? sub.title ?? ""}
                                          className="w-full h-[140px] object-cover rounded-lg mb-3"
                                        />
                                      ) : (
                                        <div className="w-full h-[140px] bg-gray-100 rounded-lg mb-3" />
                                      )}
                                      {sub.name && (
                                        <div className="text-base font-semibold text-gray-900 mb-1">
                                          {sub.name}
                                        </div>
                                      )}
                                      {sub.qualification && (
                                        <div className="text-xs text-gray-500 mb-2">
                                          {sub.qualification}
                                        </div>
                                      )}
                                      {sub.description && (
                                        <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">
                                          {sub.description}
                                        </p>
                                      )}
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

            {/* MOBILE MENU BUTTON - Visible only on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <Cross1Icon className="w-6 h-6 text-gray-700" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* MOBILE DRAWER MENU */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Drawer */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 overflow-y-auto lg:hidden"
                >
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-md hover:bg-gray-100"
                    >
                      <Cross1Icon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="p-4">
                    {navRoutes.map((route) => {
                      const hasDropdown = Array.isArray(route.dropdown) && route.dropdown.length > 0;
                      const dropdownItems = route.dropdown ?? [];
                      const normalItems = dropdownItems.filter((it) => it.type !== "rich-card");
                      const richItems = dropdownItems.filter((it) => it.type === "rich-card");
                      const isExpanded = mobileExpandedMenu === route.id;

                      return (
                        <div key={route.id} className="mb-2">
                          {hasDropdown ? (
                            <>
                              <button
                                onClick={() => toggleMobileSubmenu(route.id)}
                                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                              >
                                <span className="font-medium">{route.name}</span>
                                <CaretDownIcon
                                  className="w-4 h-4 transition-transform duration-200"
                                  style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pl-4 pt-2 space-y-1">
                                      {/* Normal Items */}
                                      {normalItems.map((sub) => (
                                        <Link
                                          key={sub.id}
                                          href={sub.path}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-600 rounded-md transition-colors"
                                        >
                                          {sub.name}
                                        </Link>
                                      ))}

                                      {/* Rich Card Items */}
                                      {richItems.map((sub) => (
                                        <div key={sub.id} className="border-t mt-2 pt-2">
                                          <div className="px-4 py-2">
                                            {sub.title && (
                                              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                                                {sub.title}
                                              </div>
                                            )}
                                            {sub.image && (
                                              <img
                                                src={sub.image}
                                                alt={sub.name ?? ""}
                                                className="w-full h-24 object-cover rounded-md mb-2"
                                              />
                                            )}
                                            {sub.name && (
                                              <div className="text-sm font-semibold text-gray-900">
                                                {sub.name}
                                              </div>
                                            )}
                                            {sub.qualification && (
                                              <div className="text-xs text-gray-500 mb-1">
                                                {sub.qualification}
                                              </div>
                                            )}
                                            {sub.description && (
                                              <p className="text-xs text-gray-600 mb-2">
                                                {sub.description}
                                              </p>
                                            )}
                                            {sub.button?.href && sub.button?.label && (
                                              <Link
                                                href={sub.button.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="inline-block px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs"
                                              >
                                                {sub.button.label}
                                              </Link>
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <Link
                              href={route.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors font-medium"
                            >
                              {route.name}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </header>

        {/* College Picture */}
        
          <section className="relative mt-1">

            {/* Hero image wrapper – full width, not shrunken */}
            <HeroCarousel />

            {/* Enquiry strip overlay */}
            <div className="absolute left-0 -bottom-10  w-[92%] md:w-[85%] bg-white/95 rounded-r-full p-4 flex items-center justify-between shadow-lg border">
              <div>
                <h3 className="font-semibold subtitle1 md:text-sm text-sm">Enquiry</h3>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500 subtitle1">Contact Number</div>
                <div className="font-bold text-red-600 subtitle1 md:text-sm text-sm">88888-99999</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 subtitle1">Email ID</div>
                <div className="font-semibold text-red-600 md:text-sm text-sm">info@alvas.org</div>
              </div>
            </div>

          </section>
          <main className="">
          {children}
        </main>
        
        {/* FOOTER SECTION */}
        <Footer />

      </body>
    </html>
  );
}
