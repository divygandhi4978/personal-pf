"use client";
import React, { useState } from "react";
import Image from "next/image";
import CaseStudyModal from "./CaseStudyModal";

const SingleProject = ({
  index,
  skills,
  head,
  data,
  preview,
  source,
  img,
  caseStudy, // 🔽 NEW (optional)
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="sticky w-full flex items-center justify-center px-4 md:px-6 mb-12"
        style={{
          top: `${index * 32}px`,
        }}
      >
        <div className="relative w-full max-w-7xl bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-[#562e66]/30">
          <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[60vh] xl:min-h-[70vh]">
            {/* Content Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-8 w-full lg:w-1/2 order-2 lg:order-1">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight group-hover:text-[#562e66] transition-colors duration-300">
                  {head}
                </h3>
                <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md">
                  {data}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-mono font-bold text-[#562e66] border border-[#562e66]/20 bg-[#562e66]/5 rounded-sm uppercase tracking-widest"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 md:gap-8 pt-4 flex-wrap">
                {preview && (
                  <a
                    href={preview}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#562e66] transition-colors flex items-center gap-1"
                  >
                    Live Preview <span className="text-[14px]">↗</span>
                  </a>
                )}

                {source && (
                  <a
                    href={source}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/40 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
                  >
                    Source Code
                  </a>
                )}

                {/* 🔽 BUSINESS CASE BUTTON */}
                {caseStudy && (
                  <button
                    onClick={() => setOpen(true)}
                    className="
      text-[#562e66] 
      border border-[#562e66]/40 
      bg-[#562e66]/10 
      hover:bg-[#562e66]/20 
      hover:border-[#562e66]
      px-4 py-2
      rounded-[3px]
      text-[10px] md:text-[11px]
      font-bold
      uppercase
      tracking-[0.2em]
      transition-all
      duration-300
      shadow-[0_0_0_rgba(0,0,0,0)]
      hover:shadow-[0_0_20px_rgba(86,46,102,0.35)]
    "
                  >
                    More about it
                  </button>
                )}
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative min-h-[250px] sm:min-h-[350px] lg:min-h-full bg-white/5 overflow-hidden order-1 lg:order-2">
              <Image
                src={img}
                alt={head}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 lg:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔽 MODAL */}
      {open && (
        <CaseStudyModal
          data={{ ...caseStudy, title: head }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default SingleProject;
