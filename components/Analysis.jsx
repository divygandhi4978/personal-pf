"use client";
import React from "react";
import Link from "next/link";
import { caseStudies } from "@/constants/data/Cases";

const Projects = () => {
    const featured = caseStudies.slice(0, 3); // limit to 3

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
                    {featured.map((project, index) => (
                        <React.Fragment key={project.slug}>

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

                                        {/* CTA (FIXED ROUTING) */}
                                        <Link
                                            href={project.link}
                                            className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                                        >
                                            Read Case →
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="h-[50vh]" />
                        </React.Fragment>
                    ))}
                </div>

                {/* VIEW ALL CTA */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/cases"
                        className="group inline-flex items-center gap-3 px-8 py-4
                        bg-[#562e66] text-white font-mono text-sm uppercase tracking-[0.2em]
                        rounded-full
                        shadow-[0_0_40px_rgba(86,46,102,0.6)]
                        hover:shadow-[0_0_60px_rgba(86,46,102,0.9)]
                        hover:scale-105
                        transition-all duration-300"
                    >
                        View All Cases
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Projects;