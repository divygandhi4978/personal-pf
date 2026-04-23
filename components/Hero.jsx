import Link from "next/link";
import React from "react";
import { LiquidDropLoader } from "react-loaderkit";

const PortfolioHero = () => {
  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center py-16 md:py-24 lg:py-32 overflow-hidden bg-black selection:bg-[#562e66] selection:text-white"
      id="Home"
    >
      {/* Background Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[300px] md:h-[400px] bg-[#562e66]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8">

          {/* Left Content */}
          <div className="space-y-10 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-4xl w-full">

            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center space-x-3 bg-white/[0.03] border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
                <LiquidDropLoader size={14} color="#562e66" speed={1.5} />
                <span className="text-zinc-500 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                  Learning & Building // Vadodara
                </span>
              </div>
            </div>

            {/* Name & Role: Increased mobile font size to 6xl and leading to 1.1 */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white导致 leading-[1.1] lg:leading-[0.85]">
                Divy Gandhi
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#562e66] tracking-tight italic px-2 lg:px-0">
Learning finance through markets, data, and code.              </h2>
            </div>

            {/* Value Proposition: Bumped base text to text-lg for mobile */}
            <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-light mx-auto lg:mx-0 text-center lg:text-left px-2 sm:px-6 lg:px-0">
             I am building a foundation in financial markets and business strategy while pursuing my B.Tech in Computer Science. Alongside technical work, I apply code and data tools to analyze financial information and strengthen investment thinking.
            </p>

            {/* CTAs: Larger padding for easier tapping on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-6 pt-6">

              <Link href="/cases" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#562e66] hover:text-white transition-all duration-300 active:scale-95 cursor-pointer shadow-xl shadow-white/5">
                  Case Studies                </button>
              </Link>

              <a
                href="https://in.linkedin.com/in/divy-gandhi-9713b6284"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto border border-white/20 bg-white/5 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 active:scale-95 cursor-pointer">
                  Say Hello
                </button>
              </a>

              <a
                href="/resume-divy.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-4 text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] cursor-pointer py-4 sm:py-0"
              >
                <span>My Resume</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;