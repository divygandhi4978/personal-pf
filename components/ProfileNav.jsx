import React from "react";
import Link from "next/link";

const ProfileNav = () => {
  return (
    <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 py-10">

      {/* Text */}
      <p className="text-zinc-400 font-mono text-sm md:text-base tracking-wide">
        Where do you want to go next?
      </p>

      {/* CTA Group */}
      <div className="flex flex-col sm:flex-row gap-4">

        {/* CASE STUDIES (Primary) */}
        <Link
          href="/cases"
          className="group relative inline-flex items-center gap-3 px-8 py-4
            bg-[#562e66] text-white font-mono text-sm uppercase tracking-[0.2em]
            rounded-full
            shadow-[0_0_40px_rgba(86,46,102,0.6)]
            hover:shadow-[0_0_60px_rgba(86,46,102,0.9)]
            hover:scale-105
            transition-all duration-300"
        >
          <span className="absolute inset-0 rounded-full bg-[#562e66]/40 blur-xl opacity-60 group-hover:opacity-100 transition-all" />
          <span className="relative z-10">More Cases</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* PROFILE (Secondary) */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-8 py-4
            border border-white/10 text-white font-mono text-sm uppercase tracking-[0.2em]
            rounded-full
            hover:bg-white/5
            hover:scale-105
            transition-all duration-300"
        >
          <span>Go to Profile</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>
    </div>
  );
};

export default ProfileNav;