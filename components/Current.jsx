import React from "react";

const projects = [
  {
    title: "PolicyLens",
    type: "RegTech // AI Compliance",
    description:
      "A smart compliance dashboard monitoring RBI, SEBI, and IRDAI circulars in real-time. Features AI-powered summaries and instant insights to bridge the gap between regulatory code and operational capital.",
    skills: ["LLMs", "Python", "React", "Financial Data"],
    preview: "https://policy-lens-plum.vercel.app/",
    source: "#",
  },
  {
    title: "E-Cell GECG Portal",
    type: "Full-Stack // Events",
    description:
      "A centralized platform for startup ecosystems, workshops, and bootcamps. Designed to streamline registration and showcase entrepreneurial development within the GECG network.",
    skills: ["MERN Stack", "Node.js", "MongoDB", "Tailwind"],
    preview: "https://ecell-lake.vercel.app/",
    source: "#",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
            Selected // Ventures
          </span>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
            Building.
          </h2>
        </div>

        {/* Sticky Stack */}
        <div className="relative flex flex-col">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              {/* Sticky Card */}
              <div className="sticky top-24 w-full flex justify-center">
                <div
                  className="
                    w-full
                    max-w-4xl
                    bg-[#0a0a0a]
                    border border-white/10
                    rounded-[1.5rem] md:rounded-[3rem]
                    shadow-[0_-30px_60px_rgba(0,0,0,0.9)]
                    transition-colors duration-300
                    hover:border-[#562e66]/30
                    min-h-[420px]
                  "
                >
                  <div className="p-8 md:p-12 lg:p-16 space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        {project.title}
                      </h3>

                      <div className="inline-block bg-[#562e66]/5 border border-[#562e66]/20 px-3 py-1 rounded-sm">
                        <p className="text-[10px] font-mono font-bold text-[#562e66] uppercase tracking-[0.2em]">
                          {project.type}
                        </p>
                      </div>

                      <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-[10px] font-mono font-bold text-white/40 border border-white/10 bg-white/5 rounded-sm uppercase tracking-widest"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                    >
                      Explore Preview →
                    </a>
                  </div>
                </div>
              </div>

              {/* Spacer — REQUIRED for sticky release */}
              <div className="h-[50vh]" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
