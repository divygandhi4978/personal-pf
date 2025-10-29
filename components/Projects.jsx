"use client";
import React, { useState } from "react";
import SingleProject from "../components/SingleProject";
import projects from "../constants/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Show only 3 unless "showAll" is true
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="w-full">
      {/* Title */}
      <h1 className="text-center text-4xl font-medium mt-20 mb-10">
        Featured Projects
      </h1>

      {/* Project List — full-width like original */}
      <section className="relative w-full flex flex-col">
        {visibleProjects.map((item) => (
          <SingleProject
            key={item.head}
            skills={item.skills}
            head={item.head}
            data={item.data}
            preview={item.preview}
            source={item.source}
            img={item.img}
          />
        ))}
      </section>

      {/* Toggle Button */}
      {projects.length > 3 && (
        <div className="flex justify-center mt-2 mb-5">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-lg bg-[#513063] text-white hover:bg-[#774990] transition-all"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
