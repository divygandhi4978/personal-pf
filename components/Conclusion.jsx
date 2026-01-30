import Image from "next/image";
import React from "react";
import profile from "../constants/images/profile1.jpg";

const Conclusion = () => {
  return (
    <section
      id="Conclusion"
      className="py-24 bg-black border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Final // Perspective
            </span>
            <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
              In Brief.
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">
              Status: Profile Verified [01]
            </p>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">

          {/* Bio Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                I'm <span className="text-[#562e66]">Divy Gandhi</span>, an engineer
                turning data into capital decisions.
              </h3>

              <div className="space-y-8 text-white/60 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  I design scalable <span className="text-white border-b-2 border-[#562e66]/50">Full-Stack systems</span> and operate as a
                  <span className="text-white"> Data Analyst</span>, translating complex datasets into
                  actionable insights for business and finance use-cases.
                </p>

                <p>
                  My work spans <span className="text-white">Power BI dashboards</span>, financial modeling,
                  and data pipelines that support <span className="text-white">equity research and strategic decision-making</span>.
                  I am preparing for an MBA in Finance to formalize this intersection of analytics, engineering, and markets.
                </p>
              </div>
            </div>

            {/* Capability Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "MERN Stack",
                "Data Analytics & BI",
                "Power BI Dashboards",
                "Python & SQL",
                "Equity Research",
                "FinTech Systems",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono text-white/40 uppercase tracking-widest hover:border-[#562e66] hover:text-white transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Visual */}
          <div className="relative group w-full max-w-[400px] lg:ml-auto">
            <div className="absolute -inset-6 bg-[#562e66]/20 blur-[80px] rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl transition-all duration-700 group-hover:border-[#562e66]/40">
              <Image
                src={profile}
                alt="Divy Gandhi"
                fill
                priority
                className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 400px"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="space-y-1">
                  <span className="block text-[#562e66] text-[10px] font-mono font-bold uppercase tracking-widest">
                    Location
                  </span>
                  <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                    Vadodara, IN
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Conclusion;
