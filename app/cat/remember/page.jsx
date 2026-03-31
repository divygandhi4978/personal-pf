"use client";
import React from "react";

const SimcatExecutionManual = () => {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 space-y-4">

          <span className="text-[#562e66] font-mono text-xs tracking-[0.3em] uppercase">
            CAT Execution System
          </span>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            SIMCAT Playbook
          </h2>

          <p className="text-white/50 max-w-2xl">
            Performance is not random. It is built through repeated test-analysis cycles.
          </p>

        </div>

        {/* HERO RULE */}
        <div className="mb-16 bg-[#562e66]/10 border border-[#562e66]/30 rounded-[2rem] p-10 text-center">

          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            The 4-Hour Rule
          </h3>

          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Every mock must be followed by minimum 4 hours of analysis.  
            No analysis = no improvement.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">

            {[
              "Take Mock",
              "Analyze Deeply",
              "Record Insights",
              "Fix Weakness"
            ].map((step, i) => (

              <span
                key={i}
                className="bg-[#562e66]/20 border border-[#562e66]/30 px-4 py-2 rounded-full"
              >
                {step}
              </span>

            ))}

          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* CORE PRINCIPLES */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8">

            <h3 className="text-xl font-bold mb-6 text-[#562e66]">
              Core Principles
            </h3>

            <div className="space-y-5 text-white/70">

              <div>
                <p className="font-semibold text-white">
                  Consistency beats peak scores
                </p>
                <p className="text-sm">
                  Stable performance across mocks matters more than rare highs.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  SIMCAT builds execution muscle
                </p>
                <p className="text-sm">
                  CAT tests application — mocks build readiness.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Low percentile early is normal
                </p>
                <p className="text-sm">
                  Many toppers begin low and improve through repetition.
                </p>
              </div>

            </div>

          </div>

          {/* WEEKLY STRUCTURE */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8">

            <h3 className="text-xl font-bold mb-6 text-[#562e66]">
              Weekly Execution Model
            </h3>

            <div className="space-y-4 text-white/70">

              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Proctored SIMCAT</span>
                <span className="font-bold">1x</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Take-Home SIMCAT</span>
                <span className="font-bold">1x</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Sectionals</span>
                <span className="font-bold">Weak Areas</span>
              </div>

              <div className="flex justify-between">
                <span>Review Time</span>
                <span className="font-bold text-[#562e66]">
                  4+ Hours
                </span>
              </div>

            </div>

          </div>

          {/* TEST ARSENAL */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8">

            <h3 className="text-xl font-bold mb-6 text-[#562e66]">
              Available Test Arsenal
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm">

              {[
                "20 Proctored",
                "20 Take-Home",
                "15 Past CAT",
                "60 Sectionals"
              ].map((item, i) => (

                <div
                  key={i}
                  className="bg-black border border-white/10 rounded-xl p-4 text-center"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

        {/* TIMELINE */}
        <div className="mt-20 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-10">

          <h3 className="text-2xl font-bold mb-10 text-[#562e66]">
            Past CAT Paper Usage Timeline
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-white/70">

            <div>
              <p className="font-semibold text-white mb-2">
                Apr – Aug
              </p>
              <p className="text-sm">
                Build fundamentals.  
                Avoid heavy use of past CAT papers.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white mb-2">
                Sept – Oct
              </p>
              <p className="text-sm">
                Use 1 past paper weekly.  
                Integrate strategies.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white mb-2">
                November
              </p>
              <p className="text-sm">
                Alternate SIMCAT and past CAT papers.  
                Full exam realism phase.
              </p>
            </div>

          </div>

        </div>

        {/* PERFORMANCE TRACKING */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">

          {[
            "Attempts vs Accuracy",
            "Time per Section",
            "Percentile Trend",
            "Weak Topic Patterns"
          ].map((item, i) => (

            <div
              key={i}
              className="bg-[#562e66]/10 border border-[#562e66]/30 rounded-2xl p-6 text-center"
            >
              <p className="font-semibold">
                {item}
              </p>
            </div>

          ))}

        </div>

        {/* SCORE INTERPRETATION */}
        <div className="mt-24 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-10">

          <h3 className="text-2xl font-bold mb-10 text-[#562e66]">
            Score Interpretation Logic
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-white/70">

            <div>
              <p className="font-semibold text-white">
                High Score + High Percentile
              </p>
              <p className="text-sm">
                Avoid complacency. Increase difficulty.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                High Score + Low Percentile
              </p>
              <p className="text-sm">
                Improve speed and precision.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Low Score + High Percentile
              </p>
              <p className="text-sm">
                Paper was tough — reinforce strategy.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Low Score + Low Percentile
              </p>
              <p className="text-sm">
                Diagnose accuracy, speed, or selection issues.
              </p>
            </div>

          </div>

        </div>

        {/* DANGER ZONE */}
        <div className="mt-24 bg-red-500/10 border border-red-500/30 rounded-[2rem] p-10">

          <h3 className="text-2xl font-bold mb-8 text-red-400">
            Failure Traps
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-white/70">

            <div>
              Giving up mid-test  
              <span className="block text-sm text-white">
                Always complete every mock.
              </span>
            </div>

            <div>
              Comparing raw scores  
              <span className="block text-sm text-white">
                Compare percentiles only.
              </span>
            </div>

            <div>
              Skipping take-home tests  
              <span className="block text-sm text-white">
                Strategy develops here.
              </span>
            </div>

            <div>
              Delayed analysis  
              <span className="block text-sm text-white">
                Review within 24 hours.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SimcatExecutionManual;