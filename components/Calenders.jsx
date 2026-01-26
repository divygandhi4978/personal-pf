"use client";
import React, { useState } from "react";
import GitHubCalender from "./GitHubCalender";

export default function Calenders() {
  const [isGithub, setIsGithub] = useState(true);

  return (
    <section id="Contributions" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header: Inspired by Parallel AI's bold spacing */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Activity // Performance
            </span>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-none">
              The Hustle.
            </h2>
          </div>

          {/* Clean SaaS Toggle Switch */}
          <div 
            onClick={() => setIsGithub(!isGithub)}
            className="group relative flex items-center bg-white/[0.03] border border-white/10 p-1 rounded-full cursor-pointer transition-all hover:border-[#562e66]/50"
          >
            <div 
              className={`absolute h-8 w-28 bg-[#562e66] rounded-full transition-all duration-300 ease-out ${
                isGithub ? "translate-x-0" : "translate-x-[110px]"
              }`} 
            />
            <button className={`relative z-10 w-28 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors ${isGithub ? "text-white" : "text-zinc-500"}`}>
              GitHub
            </button>
            <button className={`relative z-10 w-28 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors ${!isGithub ? "text-white" : "text-zinc-500"}`}>
              LeetCode
            </button>
          </div>
        </div>

        {/* Calendar Display Area: Clean and Centered */}
        <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-10 flex justify-center items-center min-h-[280px] transition-all duration-500 hover:bg-white/[0.02]">
          <div className="w-full max-w-[880px] overflow-hidden  opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {isGithub ? (
              <GitHubCalender />
            ) : (
              <div className="flex flex-col items-center gap-4 py-12">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-[#562e66] animate-pulse" />
                </div>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                  Initializing LeetCode Node...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Metric Hook */}
        <div className="mt-8 flex justify-end">
           <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic">
             "Precision in code, persistence in problem-solving."
           </p>
        </div>
      </div>
    </section>
  );
}