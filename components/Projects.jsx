"use client";
import React, { useState } from "react";
import SingleProject from "../components/SingleProject";
import projects from "../constants/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="Projects" className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 pt-24 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
            Portfolio // Archive
          </span>
          <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
            The Works.
          </h2>
        </div>
      </div>

      {/* The Stack Container: No overflow-hidden here */}
      <div className="relative w-full flex flex-col">
        {visibleProjects.map((item, index) => (
          <SingleProject
            key={item.head}
            index={index}
            skills={item.skills}
            head={item.head}
            data={item.data}
            preview={item.preview}
            source={item.source}
            img={item.img}
            caseStudy={item.caseStudy}
          />
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center py-20 bg-black">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-4 py-4 px-10 rounded-full border border-white/10 hover:border-[#562e66] transition-all duration-500"
          >
            <span className="text-white/40 group-hover:text-white text-xs font-bold uppercase tracking-[0.2em]">
              {showAll ? "Collapse Archive" : "Expand Full Portfolio"}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
