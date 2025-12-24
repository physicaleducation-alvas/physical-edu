"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CoursesLayout({ children }) {
    const pathname = usePathname();
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    const menuItems = [
  { href: "/mandatory-disclosures/affidavit", label: "Affidavit A" },
  { href: "/mandatory-disclosures/affidavitB", label: "Affidavit B" },
  { href: "/mandatory-disclosures/audit-report", label: "Audit Report" },
  { href: "/mandatory-disclosures/balance-sheet", label: "Balance Sheet" },
  { href: "/mandatory-disclosures/fdr-and-rdr", label: "FDR & RDR" },
  { href: "/mandatory-disclosures/fee-structure", label: "Fee Structure" },
  { href: "/mandatory-disclosures/funds", label: "Funds" },
  { href: "/mandatory-disclosures/income-and-expenditure", label: "Income & Expenditure" },
  { href: "/mandatory-disclosures/land-document", label: "Land Document" },
  { href: "/mandatory-disclosures/ncte-order", label: "NCTE Order" },
  { href: "/mandatory-disclosures/nil-encumbrance-certificate", label: "Nil Encumbrance Certificate" },
  { href: "/mandatory-disclosures/receipts-and-payments", label: "Receipts & Payments" },
];


    // Find current active item for mobile dropdown display
    const activeItem = menuItems.find(item => item.href === pathname);

    return (
        <div className="w-full py-10">
            {/* CONTAINER */}
            <div className="max-w-7xl mx-auto px-4 md:px-10">

                {/* ---------- MOBILE DROPDOWN (visible only on mobile) ---------- */}
                <div className="md:hidden mb-6 mt-6 ">
                    <div className="relative">
                        <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="w-[70%] mx-auto flex items-center justify-between 
           px-4 py-3 bg-white border border-gray-200 
           rounded-lg shadow-sm text-base font-medium text-gray-700"

                        >
                            <span>{activeItem ? activeItem.label : "Select Course"}</span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Dropdown */}
                        {mobileDropdownOpen && (
                           <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 
                w-[70%] bg-white border border-gray-200 
                rounded-lg shadow-lg z-50 overflow-hidden">

                                {menuItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileDropdownOpen(false)}
                                            className={`block px-5 py-4 text-lg transition-colors
                                                    ${isActive
                                                    ? "bg-gray-100 font-bold text-black"
                                                    : "text-gray-700 hover:bg-gray-50"
                                                }
                border-b last:border-b-0 border-gray-100
              `}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="flex gap-10">
                    {/* ---------- SIDE MENU (hidden on mobile, visible on desktop) ---------- */}
                    <aside className="hidden md:block w-72 shrink-0">
                        <div className="p-5"></div>
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm top-28 py-6 px-6">
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
                                                    ${isActive
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
        </div>
    );
}
