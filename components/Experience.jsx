import React from "react";

const experiences = [
  {
    title: "Technical Lead",
    org: "Entrepreneurship Cell — GECG",
    period: "July 2025 — Present",
    website: "https://ecell.gecg28.ac.in/index.html",
    description: [
      "Led a technical team of 8 members to design and manage digital platforms, increasing event participation by 40%.",
      "Developed modern registration systems and interactive dashboards, reducing manual coordination time by 50%.",
    ],
    logo: "/images/ecell.jpg",
  },
  {
    title: "Finance",
    org: "Hack The Spring '26 — GECG",
    period: "Feb 2026 — Jan 2026",
    website: "https://www.hackthespring.in/",
    description: [
      "Owned end-to-end event budgeting and fund allocation across logistics, marketing, prizes, and operations, ensuring cost control and financial discipline.",
      "Managed sponsor funds, vendor payments, and expense tracking, delivering accurate post-event financial reconciliation and ROI assessment.",
    ],
    logo: "/images/hts.ico",
  },

  // Add more experience objects here to see the stack grow
];

const ExperienceSection = () => {
  return (
    <section
      id="Experience"
      className="sticky top-0 min-h-screen w-full bg-black border-t border-white/5 py-24 shadow-[0_-50px_100px_rgba(0,0,0,1)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Professional // Trajectory
            </span>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-none">
              The Journey.
            </h2>
          </div>
          <p className="text-white/30 text-sm md:text-base max-w-xs md:text-right font-light italic">
            "Applying engineering rigor to drive organizational growth and
            efficiency."
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className="space-y-1 bg-white/5 border border-white/5 rounded-2xl overflow-visible">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-[300px_1fr] group transition-all duration-150 border-b border-white/5 last:border-0
    ${
      index % 2 === 0
        ? "bg-black hover:bg-white/[0.02]"
        : "bg-white/[0.015] hover:bg-white/[0.03]"
    }
  `}
            >
              {/* Sidebar: Meta Data */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/5 space-y-4">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/link"
                >
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center overflow-hidden group-hover/link:grayscale-0 transition-all border border-white/10">
                    <img
                      src={exp.logo}
                      alt={`${exp.org} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover/link:text-[#562e66] transition-colors">
                    {exp.org}
                  </h3>
                </a>
                <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest pl-14">
                  {exp.period}
                </p>
              </div>

              {/* Main Content: Impact Points */}
              <div className="p-8 lg:p-12 space-y-6">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                    {exp.title}
                  </h4>
                  <div className="h-1 w-12 bg-[#562e66] rounded-full" />
                </div>

                <ul className="space-y-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-4 items-start group/point">
                      <span className="text-[#562e66] mt-1.5 font-bold">→</span>
                      <p className="text-white/60 text-base md:text-lg leading-relaxed font-light group-hover/point:text-white transition-colors">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Summary */}
        <div className="mt-12 flex justify-end lg:hidden">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            End of current records
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
