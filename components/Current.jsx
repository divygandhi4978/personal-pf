"use client";

import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Current Focus",
    type: "Computer Science // Finance & Investing // Business Strategy",

    description:
      "Building foundations across computer science, financial markets, and business thinking. Focused on strengthening technical depth, market understanding, and analytical discipline while preparing for MBA-level learning.",

    skills: [
      "Computer Science Fundamentals",
      "Financial Markets & Investing",
      "Annual Report Analysis",
      "Business & Case Thinking",
      "FinTech Ecosystem Learning"
    ],

    preview: "#",
    source: "#",
  },

  {
    title: "Building Carvion",
    type: "Automotive Services // Operations // Business Systems",

    description:
      "Conceptualizing Carvion as a structured automotive care brand focused on steam-based cleaning, detailing workflows, and scalable vehicle service operations.",

    skills: [
      "Service Model Design",
      "Unit Economics Planning",
      "Operational Workflow Structuring",
      "Customer Acquisition Strategy",
      "Business Systems Thinking"
    ],

    preview: "#",
    source: "#"
  }
];

const Projects = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (title) => {
    if (title === "Building Carvion") {
      setModalTitle(title);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalTitle("");
  };

  /* FIX — Prevent background scroll */
  useEffect(() => {

    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [modalOpen]);

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

                    {(
                      project.title === "Building Carvion" ||
                      (project.preview && project.preview !== "#")
                    ) && (

                        project.title === "Building Carvion" ? (

                          <button
                            onClick={() => handleOpenModal(project.title)}
                            className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                          >
                            More →
                          </button>

                        ) : (

                          <a
                            href={project.preview}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                          >
                            Explore →
                          </a>

                        )

                      )}

                  </div>

                </div>

              </div>

              {/* Spacer */}

              <div className="h-[50vh]" />

            </React.Fragment>

          ))}

        </div>

      </div>

      {/* MODAL — MOVED OUTSIDE STACK (IMPORTANT) */}

      {modalOpen && modalTitle === "Building Carvion" && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#562e66]/20 rounded-full blur-[140px] opacity-40" />
          </div>

          <div className="relative isolate bg-[#050505] border border-white/10 rounded-[2rem] w-full max-w-xl p-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
            <div className="flex items-start justify-between gap-4 mb-6">

              <div>

                <span className="
      font-mono
      text-[9px]
      text-[#562e66]
      uppercase
      tracking-[0.3em]
    ">
                  Venture Summary
                </span>

                <h2 className="
      text-2xl md:text-3xl
      font-bold
      tracking-tight
      text-white
      mt-2
    ">
                  Carvion
                </h2>

                {/* Company Name */}

                <p className="
      font-mono
      text-[10px]
      text-gray-500
      uppercase
      tracking-[0.2em]
      mt-1
    ">
                  Carvion Automotive Private Limited
                </p>

              </div>


              {/* Close Button */}

              <button
                onClick={handleCloseModal}
                className="
      px-4 py-2
      text-[9px]
      font-mono
      uppercase
      tracking-widest
      border
      rounded-full
      text-gray-500
      border-[#9646b5]
      hover:text-white
      transition-all
    "
              >
                Close
              </button>

            </div>

            <div className="border-t border-dashed border-white/10 mb-6" />

            <div className="space-y-4 text-sm md:text-[15px] text-gray-400 leading-relaxed">
              <p>
                Carvion is a multi-service vehicle care platform focused on cleaning,
                maintenance, detailing, and long-term protection.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Core Units
                  </p>
                  <ul className="space-y-2">
                    <li><span className="text-[#562e66] mr-2">+</span><strong className="text-white">Steam:</strong> Doorstep cleaning</li>
                    <li><span className="text-[#562e66] mr-2">+</span><strong className="text-white">Care:</strong> Scheduled maintenance</li>
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Expansion
                  </p>
                  <ul className="space-y-2">

                    <li>
                      <span className="text-[#9646b5] mr-2">+</span>
                      <strong className="text-white">Studio:</strong>
                      Premium detailing
                    </li>

                    <li>
                      <span className="text-[#9646b5] mr-2">+</span>
                      <strong className="text-white">Shield:</strong>
                      Protection services
                    </li>

                    <li>
                      <span className="text-[#9646b5] mr-2">+</span>
                      <strong className="text-white">Drive:</strong>
                      Vehicle buying & selling services
                    </li>

                  </ul>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Rollout
                </p>
                <div className="grid grid-cols-2 gap-2 text-gray-400">
                  <span><span className="text-[#562e66] mr-2">01</span>Cleaning</span>
                  <span><span className="text-[#562e66] mr-2">02</span>Maintenance</span>
                  <span><span className="text-[#562e66] mr-2">03</span>Detailing</span>
                  <span><span className="text-[#562e66] mr-2">04</span>Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>

  );
};

export default Projects;