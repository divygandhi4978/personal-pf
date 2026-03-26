"use client";

import React, { useState, useEffect, useRef } from "react";

const MotivationVideoPopup = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  const videoRef = useRef(null);

  // Lock background scroll
  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [videoOpen]);

  // Open video handler
  const handleOpen = (src) => {
    setVideoSrc(src);
    setVideoOpen(true);
  };

  // Stop video when modal closes
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setVideoOpen(false);
  };

  return (
    <section className="relative bg-black border-t border-white/10 py-28 overflow-hidden">

      {/* Background Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[400px] bg-[#83479a]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 space-y-12 text-center">

        {/* BUTTON ROW */}
        <div className="pt-6 flex flex-wrap justify-center gap-6">

          {/* BUTTON 1 */}
          <button
            onClick={() => handleOpen("/videos/motivation.mp4")}
            className="border border-[#83479a]/40 bg-[#83479a]/10 text-white px-10 py-5 rounded-full font-semibold uppercase tracking-wide hover:bg-[#83479a]/20 transition-all duration-300"
          >
            ▶ TheCat
          </button>

          {/* BUTTON 2 */}
          <button
            onClick={() => handleOpen("/videos/dwarka.mp4")}
            className="border border-[#83479a]/40 bg-[#83479a]/10 text-white px-10 py-5 rounded-full font-semibold uppercase tracking-wide hover:bg-[#83479a]/20 transition-all duration-300"
          >
            ▶ TheLife
          </button>

        </div>

      </div>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center px-6">

          <div className="relative w-full max-w-5xl">

            {/* CLOSE BUTTON */}
            <div className="flex justify-end mb-4">
              <button
                onClick={handleClose}
                className="text-white text-sm uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
              >
                Close
              </button>
            </div>

            {/* VIDEO PLAYER */}
            <div className="rounded-2xl overflow-hidden border border-white/10">

              <video
                key={videoSrc}
                ref={videoRef}
                controls
                autoPlay
                className="w-full h-auto"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default MotivationVideoPopup;