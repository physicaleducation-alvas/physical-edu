"use client";

import { useState } from "react";

export default function AefPage() {
  const [active, setActive] = useState("about");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      
      

      {/* RIGHT CONTENT */}
      <div
        style={{
          marginLeft: "300px",       // ⬅️ MATCHED NEW WIDTH
          padding: "30px",
          flex: 1,
          overflowY: "auto",
          color: "black",
        }}
      >
        {active === "about" && (
          <section>
            <h2>About AEF</h2>
            <p>Write AEF details here…</p>
          </section>
        )}

        {active === "college" && (
          <section>
            <h2>College List</h2>
            <p>List of colleges…</p>
          </section>
        )}

        {active === "cultural" && (
          <section>
            <h2>Cultural Events</h2>
            <p>Details of cultural events…</p>
          </section>
        )}

        {active === "sports" && (
          <section>
            <h2>Sports</h2>
            <p>Sports activities details…</p>
          </section>
        )}
      </div>
    </div>
  );
}

function SidebarButton({ label, id, active, setActive }) {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 22px",
    color: "black",
    fontSize: "18px", // slightly larger text for wider sidebar
    cursor: "pointer",
    borderBottom: "1px solid #999",
    backgroundColor: active === id ? "#b0b0b0" : "transparent",
    transition: "0.3s",
    fontWeight: active === id ? "bold" : "normal",
  };

  const arrowStyle = {
    fontSize: "20px",
    color: active === id ? "black" : "#666",
    fontWeight: active === id ? "bold" : "normal",
  };

  return (
    <div onClick={() => setActive(id)} style={style}>
      <span>{label}</span>
      <span style={arrowStyle}>›</span>
    </div>
  );
}
