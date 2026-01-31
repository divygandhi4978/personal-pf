"use client";
import React, { useRef, useState, useEffect } from "react";
import Achievements from "../constants/images/Achievements";
import Image from "next/image";

export default function AchievementsSlider() {
  const ach = [
    {
      title:
        "Completed Financial Accounting and Analysis Certification with 86/100 score",
      image: Achievements.iimbx,
    },
    {
      title: "Secured 2nd rank out of 133 Peers in Semester-3",
      image: Achievements.i2,
    },
    {
      title: "Completed SEBI Investor Certification with 45/50 marks",
      image: Achievements.NSIM,
    },
    {
      title: "Achieved Certificate of Excellence at Devang Mehta IT Awards",
      image: Achievements.i1,
    },
    {
      title: "Completed Capital Markets Course at Infosys Springboard",
      image: Achievements.i3,
    },
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
    window.history.pushState({ modalOpen: true }, "");
  };

  const closeImage = () => {
    setSelectedImage(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = () => setSelectedImage(null);
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeImage();
    };

    if (selectedImage) {
      window.addEventListener("popstate", handlePopState);
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section
      id="Achievements"
      className="py-24 bg-black border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="space-y-4">
            <span className="text-[#562e66] font-mono text-xs font-bold uppercase tracking-[0.4em]">
              Milestones // Recognition
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-7xl font-semibold tracking-tighter text-white">
              Achievements/Certifications.
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-4 bg-white/[0.03] border border-white/10 rounded-full hover:bg-[#562e66] transition-all active:scale-90"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 bg-white/[0.03] border border-white/10 rounded-full hover:bg-[#562e66] transition-all active:scale-90"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-10 scrollbar-hide snap-x snap-mandatory"
        >
          {ach.map((item, index) => (
            <div
              key={index}
              className="w-[62vw] sm:w-[85vw] md:w-[400px] h-[350px] md:h-[550px] flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer snap-center"
              onClick={() => openImage(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end">
                <div className="h-[2px] w-12 bg-[#562e66] mb-1 transition-all duration-500 group-hover:w-full" />
                <p className="text-white text-lg font-medium leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center backdrop-blur-xl"
          style={{ height: "100dvh" }}
          onClick={closeImage} // Clicking the backdrop closes the modal
        >
          {/* Navigation Bar - Stays at the top */}
          <div className="absolute top-0 w-full flex justify-end p-6 md:p-10 z-[1001] max-sm:mt-20">
            <button
              onClick={(e) => {
                e.stopPropagation(); // CRITICAL: Prevents the backdrop click from firing twice
                closeImage();
              }}
              className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#562e66] hover:text-white transition-all active:scale-90 shadow-2xl pointer-events-auto"
            >
              Close
            </button>
          </div>

          {/* Image Container */}
          <div
            className="relative w-[90%] h-[60%] md:h-[75%] mt-10"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Caption */}
          <div
            className="mt-8 max-w-xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-center text-sm md:text-base font-light leading-relaxed">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
