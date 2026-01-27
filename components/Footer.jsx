import socialLinks from "@/constants/data/socialLinks";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
const bgVariants = [
  "bg-[#070707]", // deepest
  "bg-[#0c0c0c]",
  "bg-[#121212]",
  "bg-[#181818]", // lightest
];


  return (
    <footer className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Footer Branding & Links Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Connections // Global
            </span>
            <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
              Links.
            </h2>
          </div>
          <div className="text-left md:text-right space-y-1">
             <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                System: Online
             </p>
             <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest italic">
                Vadodara, Gujarat, India
             </p>
          </div>
        </div>

        {/* Social Terminal: Clean, Full-Width Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {socialLinks.map((link, index) => (
          <a
  key={index}
  href={link.url}
  target="_blank"
  rel="noopener noreferrer"
  className={`group relative flex flex-col items-center justify-center py-12
    ${bgVariants[index % bgVariants.length]}
    hover:bg-white/[0.025]
    transition-all duration-500`}
  aria-label={link.name}
>

              {/* Subtle Icon Treatment */}
              <div className="text-zinc-500 group-hover:text-[#562e66] transition-colors duration-300 transform group-hover:scale-110">
                {link.icon}
              </div>
              
              {/* Monospaced Label */}
              <span className="mt-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 group-hover:text-white transition-colors">
                {link.name}
              </span>

              {/* Hover Indicator Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#562e66] transition-all duration-500 group-hover:w-1/3" />
            </a>
          ))}
        </div>

        {/* Legal & Versioning */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
         
          <div className="flex items-center gap-6">
            <span>Last Indexed: 26 Jan 2026</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#562e66] animate-pulse" />
              <span className="text-white">v2.0.0</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;