"use client";

import React, { useState } from "react";
import tabs from "../constants/NavTab";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <div className="flex items-center justify-center min-h-[80px] sm:mt-3 sticky top-0.5 z-100">
        <nav className="flex items-center space-x-1 sm:space-x-3 backdrop-blur-sm p-2 rounded-4xl shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 rounded-4xl font-large text-lg sm:text-xl transition-all duration-200 ease-in-out 
                ${
                  activeTab === tab.id
                    ? "bg-[#562e66] text-slate-50 hover:bg-[#562e66a5]"
                    : "bg-[#111113] text-white hover:bg-[#030303]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Nav;
