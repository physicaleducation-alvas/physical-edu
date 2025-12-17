"use client";

import { useState } from "react";

export default function AefPage() {
  const [active, setActive] = useState("about");

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">

      {/* SIDEBAR */}
      <div className="
        w-full md:w-72 
        bg-gray-200 border-r border-gray-400 
        md:fixed md:h-screen
      ">
        <h1 className="text-xl font-bold p-4 bg-gray-300 text-center md:text-left">
          AEF Menu
        </h1>

        <SidebarButton label="About AEF" id="about" active={active} setActive={setActive} />
        <SidebarButton label="College List" id="college" active={active} setActive={setActive} />
        <SidebarButton label="Cultural Events" id="cultural" active={active} setActive={setActive} />
        <SidebarButton label="Sports" id="sports" active={active} setActive={setActive} />
      </div>

      {/* RIGHT CONTENT */}
      <div
        className="
          flex-1 p-4 md:p-8 
          md:ml-72 
          overflow-auto text-black
        "
      >
        {active === "about" && (
          <section>
            <h2 className="text-2xl font-bold mb-2">About AEF</h2>
            <p>Write AEF details here…</p>
          </section>
        )}

        {active === "college" && (
          <section>
            <h2 className="text-2xl font-bold mb-2">College List</h2>
            <p>List of colleges…</p>
          </section>
        )}

        {active === "cultural" && (
          <section>
            <h2 className="text-2xl font-bold mb-2">Cultural Events</h2>
            <p>Details of cultural events…</p>
          </section>
        )}

        {active === "sports" && (
          <section>
            <h2 className="text-2xl font-bold mb-2">Sports</h2>
            <p>Sports activities details…</p>
          </section>
        )}
      </div>
    </div>
  );
}

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
