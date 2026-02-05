"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudyModal({ data, onClose }) {
  if (!data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 max-sm:pt-10">
        {/* Backdrop with heavy blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          className="relative max-w-4xl w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* HEADER */}
          <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-gradient-to-b from-white/[0.02] to-transparent">
            <div>
              <h3 className="text-2xl font-medium text-white tracking-tight">
                {data.title || "Business Case"}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#562e66] animate-pulse" />
                <p className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold">
                  Strategic Breakdown
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="group w-10 h-10 flex items-center justify-center rounded-full border border-red-700 text-white/40 hover:text-white hover:border-[#562e66]/50 transition-all duration-300"
            >
              <span className="text-lg group-hover:rotate-90 transition-transform duration-300">
                ✕
              </span>
            </button>
          </div>

          {/* CONTENT AREA */}
          <div className="p-8 space-y-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
            <Section title="Context" text={data.context} />

            <TwoColumn>
              <ListSection
                title="Problems Identified"
                items={data.problems}
                bulletColor="text-red-500/50"
              />
              <ListSection
                title="Solution Designed"
                items={data.solution}
                bulletColor="text-emerald-500/50"
              />
            </TwoColumn>

            <Divider />

            <TwoColumn>
              <ListSection title="Key Insights" items={data.insights} />
              <ListSection title="Trade-offs" items={data.tradeoffs} />
            </TwoColumn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
              <Section title="The Mistake" text={data.mistake} />
              <Section
                title="The Correction"
                text={data.correction}
                isCorrection
              />
            </div>

            <Section title="Why MBA" text={data.whyMBA} highlight />
          </div>

          {/* FOOTER DECORATION */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#562e66]/40 to-transparent" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ---------- UI HELPERS ---------- */

function Section({ title, text, highlight = false, isCorrection = false }) {
  if (!text) return null;
  return (
    <div className="relative">
      <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3 font-bold">
        {title}
      </h4>
      <p
        className={`text-sm leading-relaxed ${
          highlight
            ? "text-white bg-[#562e66]/10 border border-[#562e66]/20 rounded-lg p-5 ring-1 ring-inset ring-white/5"
            : isCorrection
              ? "text-emerald-400/90"
              : "text-white/70"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function ListSection({ title, items, bulletColor = "text-[#562e66]" }) {
  if (!items || !items.length) return null;
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm text-white/70 group">
            <span
              className={`${bulletColor} mt-[2px] transition-colors group-hover:text-white`}
            >
              —
            </span>
            <span className="group-hover:text-white/90 transition-colors">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TwoColumn({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">{children}</div>
  );
}

function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
  );
}
