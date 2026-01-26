"use client";

import React, { useState, useEffect } from "react";
import tabs from "../constants/NavTab";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // Monitors scroll to add depth when moving away from the top
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 flex justify-center z-[100] px-4">
      <nav 
        className={`
          flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500
          ${scrolled 
            ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl shadow-black" 
            : "bg-white/[0.03] backdrop-blur-md border-white/5"}
        `}
      >
        {tabs.map((tab) => (
          <a 
            href={`#${tab.id}`} 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative"
          >
            {/* Active Highlight Layer */}
            {activeTab === tab.id && (
              <div className="absolute inset-0 bg-[#562e66] rounded-full shadow-[0_0_15px_rgba(86,46,102,0.4)] transition-all duration-300" />
            )}
            
            <button
              className={`
                relative px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300
                ${activeTab === tab.id 
                  ? "text-white" 
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"}
              `}
            >
              {tab.label}
            </button>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Nav;