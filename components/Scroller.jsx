"use client";
import React, { useRef, useState } from "react";
import Achievements from "../constants/images/Achievements";
import Image from "next/image";

export default function AchievementsSlider() {
  const ach = [
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

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (item) => setSelectedImage(item);

  const closeImage = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedImage(null);
  };

  return (
    <div className="sm:p-5 max-w-full sm:max-w-7xl relative flex flex-col">
      <h1 className="text-center text-4xl font-medium mt-20 mb-10">
        Achievements Gallery
      </h1>

      {/* Horizontal Scroll Gallery */}
      <div className="relative flex-1">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 p-2 scrollbar-hide"
        >
          {ach.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[350px] sm:w-[300px] sm:h-[400px] relative rounded-lg overflow-hidden shadow-md flex-shrink-0 cursor-pointer"
              onClick={() => openImage(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 flex items-end">
                <p class="text-white text-xl font-semibold bottom-3 mb-5">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              width={selectedImage.image.width || 800}
              height={selectedImage.image.height || 600}
            />

            <button
              onClick={closeImage}
              type="button"
              className="absolute sm:top-50% top-11 right-0 z-50 bg-red-400 text-black p-2 rounded-sm shadow hover:bg-red-200 transition-colors"
            >
              close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
