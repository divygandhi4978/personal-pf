"use client";
import React, { useRef, useState, useEffect } from "react";
import Achievements from "../constants/images/Achievements";
import Image from "next/image";

export default function AchievementsSlider() {
  const ach = [
    { title: "Secured 2nd rank out of 133 Peers in Semester-3", image: Achievements.i2 },
    { title: "Completed SEBI Investor Certification with 45/50 marks", image: Achievements.NSIM },
    { title: "Achieved Certificate of Excellence at Devang Mehta IT Awards", image: Achievements.i1 },
    { title: "Completed Capital Markets Course at Infosys Springboard", image: Achievements.i3 },
  ];

  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openImage = (item) => {
    setSelectedImage(item);
    // Push a dummy state to history so "Back" closes the modal
    window.history.pushState({ modalOpen: true }, "");
  };

  const closeImage = () => {
    setSelectedImage(null);
    // If we closed via UI, sync history
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      // Closes modal when phone "Back" button is pressed
      setSelectedImage(null);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeImage();
    };

    if (selectedImage) {
      window.addEventListener("popstate", handlePopState);
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling the background
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section id="Achievements" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">Milestones // Recognition</span>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">Achievements.</h2>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scroll("left")} className="p-3 bg-white/[0.03] border border-white/10 rounded-full hover:bg-[#562e66] transition-all">
              <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll("right")} className="p-3 bg-white/[0.03] border border-white/10 rounded-full hover:bg-[#562e66] transition-all">
              <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto gap-8 pb-10 scrollbar-hide snap-x">
          {ach.map((item, index) => (
            <div key={index} className="w-[280px] h-[400px] sm:w-[350px] sm:h-[480px] flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/5 group cursor-pointer snap-start" onClick={() => openImage(item)}>
              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="h-[1px] w-12 bg-[#562e66] mb-4 transition-all duration-500 group-hover:w-full" />
                <p className="text-white text-lg font-medium leading-tight">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-4 backdrop-blur-md"
          style={{ height: "100dvh" }} // Use Dynamic Viewport Height
          onClick={closeImage}
        >
          {/* Close Area for Mobile */}
          <div className="absolute top-0 w-full flex justify-between items-center p-6 lg:p-10">
            <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">Viewing Milestone</span>
            <button onClick={closeImage} className="text-white bg-white/10 px-4 max-sm:my-15 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest active:scale-95">
              Close
            </button>
          </div>

          <div className="relative w-full h-[60%] md:h-[75%]" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage.image} alt={selectedImage.title} fill className="object-contain" />
          </div>

          <div className="mt-8 max-w-xl">
             <p className="text-white text-center text-sm md:text-base font-light px-6 leading-relaxed">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
      `}</style>
    </section>
  );
}