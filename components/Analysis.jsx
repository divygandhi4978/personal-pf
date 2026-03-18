"use client";
import React from "react";

const projects = [
    {
        title: "CAMS: The Paradox of Growth",
        category: "Case Study",
        description:
            "A 70% market leader in India’s mutual fund infrastructure faces structural margin compression despite strong industry growth, driven by regressive pricing, regulatory constraints, and diversification into lower-margin segments.",
        link: "/cams",
    }
    //   {
    //     title: "Market Structure Analysis",
    //     category: "Case Study",
    //     description:
    //       "Study of how industry structure affects profitability and competitive advantage.",
    //     link: "/case-studies/market-structure",
    //   },
    //   {
    //     title: "E-Cell GECG Portal",
    //     category: "Project",
    //     description:
    //       "Platform to manage startup events, registrations, and community engagement.",
    //     link: "https://ecell-lake.vercel.app/",
    //   },
];

const Projects = () => {
    return (
        <section id="Projects" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-20 space-y-4">
                    <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
                        Selected // Work
                    </span>
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
                        Thinking.
                    </h2>
                </div>

                {/* Sticky Stack */}
                <div className="relative flex flex-col">
                    {projects.map((project, index) => (
                        <React.Fragment key={index}>

                            {/* Sticky Card */}
                            <div className="sticky top-24 w-full flex justify-center">
                                <div className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] md:rounded-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.9)] hover:border-[#562e66]/30 transition-colors duration-300 min-h-[320px]">

                                    <div className="p-8 md:p-12 lg:p-16 space-y-6">

                                        {/* Category */}
                                        <div className="inline-block bg-[#562e66]/5 border border-[#562e66]/20 px-3 py-1 rounded-sm">
                                            <p className="text-[10px] font-mono font-bold text-[#562e66] uppercase tracking-[0.2em]">
                                                {project.category}
                                            </p>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                                            {project.description}
                                        </p>

                                        {/* CTA */}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                                        >
                                            Explore →
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="h-[50vh]" />
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;