import React from "react";

const EducationCard = () => {
  return (
    <section id="About" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-zinc-500 font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Background // Experience
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
              The Foundation.
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-white font-black text-4xl leading-none tracking-tight opacity-10">
               CODE. SHIP. REPEAT.
             </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16">
          
          {/* Left Side: Education & Work */}
          <div className="space-y-16">
            <div className="space-y-10">
              <h3 className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-3">
                Academic History
              </h3>
              <div className="space-y-12">
                {/* Degree 1 */}
                <div className="group border-l border-white/20 pl-8 hover:border-white transition-colors duration-500">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                    <h4 className="text-2xl font-bold text-white tracking-tight">Bachelor's in Computer Science</h4>
                    <span className="text-zinc-500 font-mono text-xs mt-1">2023 — 2027</span>
                  </div>
                  <p className="text-zinc-400 text-lg">GEC Gandhinagar</p>
                  <div className="inline-block mt-4 px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
                    <p className="text-white text-xs font-mono uppercase tracking-widest">CGPA: 8.88</p>
                  </div>
                </div>

                {/* Degree 2 */}
                <div className="group border-l border-white/10 pl-8 hover:border-white transition-colors duration-500">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                    <h4 className="text-2xl font-bold text-white tracking-tight">Higher Secondary</h4>
                    <span className="text-zinc-500 font-mono text-xs mt-1">2021 — 2023</span>
                  </div>
                  <p className="text-zinc-400 text-lg">LBSV Vadodara</p>
                  <p className="text-zinc-600 text-sm mt-3 font-medium uppercase tracking-tighter">Percentile: 95</p>
                </div>
              </div>
            </div>

            {/* Work Experience Area */}
            <div className="space-y-8">
              <h3 className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-3">
                Professional Trajectory
              </h3>
              <div className="group flex justify-between items-center py-6 px-8 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all">
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Full Stack Developer</h4>
                  <p className="text-zinc-500 text-sm font-mono mt-1 uppercase">Early Career Stage</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Competencies */}
          <div className="lg:border-l lg:border-white/5 lg:pl-24 space-y-16">
            <div className="space-y-14">
               <h3 className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                 Core Competencies
               </h3>
               
               <div className="space-y-16">
                  {/* Skill 1 */}
                  <div className="group space-y-4">
                    <h4 className="text-3xl font-bold text-white tracking-tighter group-hover:translate-x-2 transition-transform duration-300">Problem Solver</h4>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-md">
                      Turning complex engineering challenges into elegant, 
                      scalable systems with a focus on clean, modular architecture.
                    </p>
                  </div>

                  {/* Skill 2 */}
                  <div className="group space-y-4">
                    <h4 className="text-3xl font-bold text-white tracking-tighter group-hover:translate-x-2 transition-transform duration-300">Fast Learner</h4>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-md">
                      Rapidly adapting to the shifting FinTech landscape and 
                      evolving MERN stack paradigms with zero friction.
                    </p>
                  </div>

                  {/* Skill 3 */}
                  <div className="group space-y-4">
                    <h4 className="text-3xl font-bold text-white tracking-tighter group-hover:translate-x-2 transition-transform duration-300">Detail Oriented</h4>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-md">
                      Ensuring absolute precision in data pipelines and high-level 
                      quality in every line of code for mission-critical applications.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center">
          <span className="text-zinc-800 font-mono text-[10px] uppercase">Divy Gandhi // 2026</span>
          <div className="h-[1px] flex-grow mx-8 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <span className="text-zinc-800 font-mono text-[10px] uppercase tracking-widest">Portfolio Edition v2</span>
        </div>
      </div>
    </section>
  );
};

export default EducationCard;