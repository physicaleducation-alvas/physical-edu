"use client";
import { useState } from "react";

export default function CoursesPage() {
    const [active, setActive] = useState("college");

    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen font-sans">

                {/* SIDEBAR */}
                <div className="
        w-full md:w-72 
        bg-gray-200 border-r border-gray-400 
        md:fixed md:h-screen
      ">
                    <h1 className="text-xl font-bold p-4 bg-gray-300 text-center md:text-left">
                        Infrastructure Menu
                    </h1>

                    <SidebarButton label="ATM" id="atm" active={active} setActive={setActive} />
                    <SidebarButton label="Canteen" id="canteen" active={active} setActive={setActive} />
                    <SidebarButton label="Class Room" id="classroom" active={active} setActive={setActive} />
                    <SidebarButton label="Ground" id="ground" active={active} setActive={setActive} />
                    <SidebarButton label="Hostel" id="hostel" active={active} setActive={setActive} />
                    <SidebarButton label="Laboratories" id="laboratories" active={active} setActive={setActive} />
                    <SidebarButton label="Library" id="library" active={active} setActive={setActive} />
                    <SidebarButton label="Multi-purpose Hall" id="mutlipurposehall" active={active} setActive={setActive} />
                    <SidebarButton label="Open-Air Theatre" id="openairtheatre" active={active} setActive={setActive} />
                    <SidebarButton label="Post Office" id="postoffice" active={active} setActive={setActive} />
                    <SidebarButton label="Transport" id="transport" active={active} setActive={setActive} />
                </div>

                {/* RIGHT CONTENT */}
                <div
                    className="
          flex-1 p-4 md:p-8 
          md:ml-72 
          overflow-auto text-black
        "
                >
                    {active === "atm" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">A.T.M</h2>
                            <p>ATM details</p>
                        </section>
                    )}
                    {active === "canteen" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Canteen</h2>
                            <p>Canteen details</p>
                        </section>
                    )}

                    {active === "classroom" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Classroom</h2>
                            <p>Classroom details</p>
                        </section>
                    )}
                    {active === "ground" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Ground</h2>
                            <p>Ground details</p>
                        </section>
                    )}

                    {active === "hostel" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Hostel</h2>
                            <p>Hostel details</p>
                        </section>
                    )}
                    {active === "laboratories" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Laboratories</h2>
                            <p>Laboratories details</p>
                        </section>
                    )}

                    {active === "multipurposehall" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Multi-purpose Hall</h2>
                            <p>Multi-purpose Hall details</p>
                        </section>
                    )}
                    {active === "openairtheatre" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Open-air Theatre</h2>
                            <p>Open-air Theatre details</p>
                        </section>
                    )}

                    {active === "postoffice" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Post-Office</h2>
                            <p>Post-Office details</p>
                        </section>
                    )}
                    {active === "transport" && (
                        <section>
                            <h2 className="text-2xl font-bold mb-2">Transport</h2>
                            <p>Transport details</p>
                        </section>
                    )}
                </div>
            </div>
        </>
    )
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
