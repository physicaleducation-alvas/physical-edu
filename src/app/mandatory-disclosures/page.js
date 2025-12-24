"use client";

import { useState } from "react";
import Link from "next/link";

export default function MandatoryDisclosurePage() {
  const [active, setActive] = useState("affidavitA");

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">

      {/* SIDEBAR */}
      <div
        className="
          w-full md:w-72
          bg-gray-200 border-r border-gray-400
          md:fixed md:h-screen
        "
      >
        <h1 className="text-xl font-bold p-4 bg-gray-300 text-center md:text-left">
          Mandatory Disclosure
        </h1>

        <SidebarButton label="Affidavit A" id="affidavitA" active={active} setActive={setActive} />
        <SidebarButton label="Affidavit B" id="affidavitB" active={active} setActive={setActive} />
        <SidebarButton label="Audit Report" id="audit" active={active} setActive={setActive} />
        <SidebarButton label="Balance Report" id="balance" active={active} setActive={setActive} />
        <SidebarButton label="FDR and RDR" id="fdr" active={active} setActive={setActive} />
        <SidebarButton label="Fee Structure" id="fee" active={active} setActive={setActive} />
        <SidebarButton label="Funds" id="funds" active={active} setActive={setActive} />
        <SidebarButton label="Income and Expenditure" id="income" active={active} setActive={setActive} />
        <SidebarButton label="Land Document" id="land" active={active} setActive={setActive} />
        <SidebarButton label="NCTE Order" id="ncte" active={active} setActive={setActive} />
        <SidebarButton label="Nil Encumbrance Certificate" id="nil" active={active} setActive={setActive} />
        <SidebarButton label="Receipts and Payments" id="receipts" active={active} setActive={setActive} />
      </div>

      {/* RIGHT CONTENT */}
      <div
        className="
          flex-1 p-4 md:p-8
          md:ml-72
          overflow-auto text-black
        "
      >
        {active === "affidavitA" && <Content title="Affidavit A" link="/mandatory-disclosures/affidavit" />}
        {active === "affidavitB" && <Content title="Affidavit B" link="/mandatory-disclosure/affidavitB" />}
        {active === "audit" && <Content title="Audit Report" link="/mandatory-disclosure/audit-report" />}
        {active === "balance" && <Content title="Balance Report" link="/mandatory-disclosure/balance-sheet" />}
        {active === "fdr" && <Content title="FDR and RDR" link="/mandatory-disclosure/fdr-and-rdr" />}
        {active === "fee" && <Content title="Fee Structure" link="/mandatory-disclosure/fees-structure" />}
        {active === "funds" && <Content title="Funds" link="/mandatory-disclosure/funds" />}
        {active === "income" && <Content title="Income and Expenditure" link="/mandatory-disclosure/income-and-expenditure" />}
        {active === "land" && <Content title="Land Document" link="/mandatory-disclosure/land-document" />}
        {active === "ncte" && <Content title="NCTE Order" link="/mandatory-disclosure/ncte-order" />}
        {active === "nil" && <Content title="Nil Encumbrance Certificate" link="/mandatory-disclosure/nil-encumbrance-certificate" />}
        {active === "receipts" && <Content title="Receipts and Payments" link="/mandatory-disclosure/receipts-and-payments" />}
      </div>
    </div>
  );
}

/* Sidebar Button */
function SidebarButton({ label, id, active, setActive }) {
  return (
    <div
      onClick={() => setActive(id)}
      className={`
        flex justify-between items-center
        px-5 py-4 text-lg cursor-pointer
        border-b border-gray-400
        transition-all
        ${active === id ? "bg-gray-400 font-bold" : "bg-transparent"}
      `}
    >
      <span>{label}</span>
      <span className={`text-xl ${active === id ? "text-black" : "text-gray-600"}`}>
        ›
      </span>
    </div>
  );
}

/* Right Content Section */
function Content({ title, link }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="w-16 h-[3px] bg-red-500 mb-6"></div>
      <Link href={link} className="text-blue-600 underline text-lg">
        View / Download Document
      </Link>
    </section>
  );
}
