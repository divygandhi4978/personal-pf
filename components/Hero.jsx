import React from "react";
import { LiquidDropLoader } from "react-loaderkit";

const PortfolioHero = () => {
  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center py-12 md:py-24 lg:py-32 overflow-hidden bg-black selection:bg-[#562e66] selection:text-white"
      id="Home"
    >
      {/* Background Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[300px] md:h-[400px] bg-[#562e66]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8">

          {/* Left Content */}
          <div className="space-y-8 md:space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-4xl">

            {/* Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm mx-auto lg:mx-0">
              <LiquidDropLoader size={12} color="#562e66" speed={1.5} />
              <span className="text-zinc-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                Currently in Vadodara // Open for global roles
              </span>
            </div>

            {/* Name & Role */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] lg:leading-[0.85]">
                Divy Gandhi
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-[#562e66] tracking-tight italic">
                Full-Stack Developer · Data Analyst · Finance Aspirant
              </h2>
            </div>

            {/* Value Proposition */}
            <p className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mx-auto lg:mx-0 text-center lg:text-left px-4 lg:px-0">
              I design <span className="text-white font-medium">scalable web applications</span> and transform raw data into
              <span className="text-white font-medium"> decision-ready insights</span>.  
              Experienced in <span className="text-white font-medium">Power BI dashboards</span>, financial analytics,
              and <span className="text-white font-medium">end-to-end data pipelines</span> using the MERN stack.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              <a
                href="https://in.linkedin.com/in/divy-gandhi-9713b6284"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#562e66] hover:text-white transition-all duration-300 active:scale-95 cursor-pointer shadow-xl shadow-white/5">
                  Contact Me
                </button>
              </a>

              <a
                href="/resume-divy.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] cursor-pointer"
              >
                <span>View Resume</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
