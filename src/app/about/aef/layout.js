"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function AEFLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/about/aef/about-aef", label: "About AEF" },
    { href: "/about/aef/colleges-list", label: "College List" },
    { href: "/about/aef/cultural-events", label: "Cultural Events" },
    { href: "/about/aef/sports", label: "Sports" },
  ];

  return (
    <div className="w-full py-10">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex gap-10">

        {/* ---------- SIDE MENU ---------- */}
        <aside className="w-72 flex-shrink-0">
          <div className="p-5"></div>
          <div
            className="
              bg-white border border-gray-200 rounded-xl shadow-sm
               top-28 py-6 px-6
            "
          >
            <ul className="space-y-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        group flex items-center justify-between
                        px-5 py-4 rounded-xl text-lg border transition-all duration-300
                        ${
                          isActive
                            ? "font-bold bg-gray-100 border-gray-300 text-black shadow-sm"
                            : "text-gray-700 border-transparent hover:bg-gray-100 hover:border-gray-300"
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* ---------- MAIN CONTENT ---------- */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
