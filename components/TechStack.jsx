import React from "react";

const TechStack = () => {
  const stack = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "FastAPI", "Python", "DJango", "Java", "Flask", "Redis"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "ML & Data Science", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Streamlit", "Scikit-learn"] },
    { category: "DevOps & Tools", items: ["Git", "Docker", "Kubernetes"] },
  ];

  return (
    <section id="TechStack" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header: Bold & Expansive */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Technical // Capabilities
            </span>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-none">
              The Stack.
            </h2>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-xs md:text-right font-light italic">
            "Engineered for high-performance data processing and scalable financial architecture."
          </p>
        </div>

        {/* Capabilities Grid: Clean & Structured */}
        <div className="grid gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {stack.map((group) => (
            <div 
              key={group.category} 
              className="grid md:grid-cols-[250px_1fr] bg-black group transition-colors duration-500 hover:bg-white/[0.01]"
            >
              {/* Category Label */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/5">
                <h3 className="text-[#562e66] text-xs font-bold uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>

              {/* Skill Tags: Clean Glassmorphic Style */}
              <div className="p-8 flex flex-wrap gap-3 items-center">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 rounded-full text-sm font-mono tracking-tight text-zinc-400 border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-[#562e66] hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modern Call to Action */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://planet-lifter-33b.notion.site/Technical-Stuff-242cd5d8cae480ff9a48e4a9c9b2c23c"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 py-4 px-8 rounded-full border border-white/10 hover:border-[#562e66] transition-all duration-300"
          >
            <span className="text-zinc-400 group-hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
              Explore deep-dive documentation
            </span>
            <div className="w-8 h-8 rounded-full bg-[#562e66]/10 flex items-center justify-center group-hover:bg-[#562e66] transition-all">
              <svg className="w-4 h-4 text-[#562e66] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;