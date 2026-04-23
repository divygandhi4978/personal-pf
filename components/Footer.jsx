import socialLinks from "@/constants/data/socialLinks";
import React from "react";
import { Rss, Briefcase, ChevronRight } from "lucide-react"; 
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const bgVariants = [
    "bg-[#070707]",
    "bg-[#0c0c0c]",
    "bg-[#121212]",
    "bg-[#181818]",
  ];

  return (
    <footer className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Connections // Global
            </span>
            <div className="flex items-baseline gap-4">
              <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
                Network.
              </h2>
              {/* Highlighted Cases Link */}
              <Link 
                href="/cases" 
                className="group flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full hover:border-[#562e66] transition-all duration-300"
              >
                <Briefcase size={14} className="text-zinc-500 group-hover:text-[#562e66]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white">Research_Cases</span>
                <ChevronRight size={12} className="text-zinc-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="text-left md:text-right space-y-1">
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">  Profile: Active
</p>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest italic">Vadodara, Gujarat, India</p>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center justify-center py-12 ${bgVariants[index % bgVariants.length]} hover:bg-white/[0.025] transition-all duration-500`}
              aria-label={link.name}
            >
              <div className="text-zinc-500 group-hover:text-[#562e66] transition-colors duration-300 transform group-hover:scale-110">
                {link.icon}
              </div>
              <span className="mt-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 group-hover:text-white transition-colors">
                {link.name}
              </span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#562e66] transition-all duration-500 group-hover:w-1/3" />
            </a>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          
          <div className="flex items-center gap-6">
          
            <span>© {currentYear} // All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Highly Visible Feed Badge */}
            <a
              href="/atom.xml"
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-white/5 rounded-md hover:bg-[#562e66]/10 hover:border-[#562e66]/50 transition-all group"
            >
              <Rss size={12} className="text-zinc-500 group-hover:text-[#562e66]" />
              <span className="text-zinc-400 group-hover:text-white">RSS_FEED</span>
            </a>
            
            <span className="hidden md:inline text-zinc-800">|</span>
            <span>Last Indexed: 23 April 2026</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;