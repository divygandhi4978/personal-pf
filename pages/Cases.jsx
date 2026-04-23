"use client";
import React from "react";
import Link from "next/link";
import { caseStudies } from "@/constants/data/Cases";

export default function CaseStudiesPage() {
  return (
    <section className="py-24 md:py-44 bg-[#050505] border-t border-white/[0.03] min-h-screen selection:bg-[#562e66] selection:text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- Header: Refined Weight & Tracking --- */}
        <header className="mb-32 md:mb-52 space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[#562e66]" />
            <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.5em] font-medium">
              Research // Archive            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-medium tracking-[-0.06em] text-[#f4f4f5] leading-[0.8]">
            Case Studies<span className="text-[#562e66] tracking-normal font-light">.</span>
          </h1>
        </header>

        {/* --- List: High-Contrast Typography --- */}
        <div className="border-t border-white/10">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={study.link}
              className="group block border-b border-white/[0.04] py-14 md:py-24 transition-colors duration-700 hover:bg-white/[0.03] rounded-2xl "
            >
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16 items-start ]">

                {/* Index & Title (Cols 1-7) */}
                <div className="lg:col-span-7 flex gap-6 md:gap-14">
                  <span className="text-[#562e66] font-mono text-[11px] font-bold pt-2 shrink-0 opacity-80">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="space-y-6">
                    {/* Title: Medium weight with tight tracking looks sharper than Bold */}
                    <h2 className="text-3xl md:text-5xl lg:text-[4.2rem] font-medium text-[#d1d1d6] tracking-[-0.04em] leading-[1.05] transition-colors duration-500 group-hover:text-white">
                      {study.title}
                    </h2>

                    {/* Meta Row: Monospace for technical data */}
                    <div className="flex items-center gap-5 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                      <span className="group-hover:text-[#8b4ca5] transition-colors duration-500 font-semibold">{study.category}</span>
                      <span className="w-[1px] h-3 bg-zinc-800" />
                      <span className="font-medium">{study.date}</span>
                      <span className="hidden sm:inline w-[1px] h-3 bg-zinc-800" />
                      <span className="hidden sm:inline font-medium">{study.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Description (Cols 8-12) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
                  {/* Paragraph: Light weight (300) for that elegant "documentation" feel */}
                  <p className="sm:text-zinc-500 text-sm md:text-base lg:text-lg leading-relaxed font-light tracking-wide transition-colors duration-700 group-hover:text-zinc-300">
                    {study.description}
                  </p>

                  {/* Subtle Link Indicator */}
                  <div className="mt-10 flex items-center gap-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#562e66] opacity-0 group-hover:opacity-100 transition-all duration-700 font-bold">
                      Case Detail
                    </span>
                    <div className="h-[1px] w-0 bg-[#562e66] group-hover:w-16 transition-all duration-700 ease-in-out" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* --- Home Navigation --- */}
        <div className="mt-40 md:mt-60 flex flex-col items-center">
          <div className="h-32 w-[1px] bg-gradient-to-b from-[#562e66] to-transparent mb-16" />

          <Link
            href="/"
            className="group relative flex items-center gap-8 px-14 py-6 border border-white/[0.08] transition-all duration-700 hover:border-white/20"
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500 font-bold">
              Return to Home
            </span>
            <span className="text-zinc-700 font-mono text-[10px] transition-colors group-hover:text-[#562e66] font-bold max-sm:hidden">
              [ ESC ]
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}