"use client";
import React, { useRef } from "react";

export default function AchievementsSlider() {
  const imageUrl = "https://picsum.photos/300/400?random=";
  const achievements = Array.from({ length: 3 }, (_, i) => ({
    title: `Amazing Achievement Number ${i + 1} Showcase`,
    image: `${imageUrl}${i + 1}`,
  }));

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

  return (
    <div className="sm:p-5  max-w-full sm:max-w-7xl relative flex flex-col">
      <h1 className="text-center text-4xl font-medium mt-20 mb-10">
        Achievements Gallery
      </h1>

      <div className="relative flex-1">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 p-2 scrollbar-hide"
        >
          {achievements.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[300px] sm:h-[400px] relative rounded-lg overflow-hidden shadow-md flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-10 left-0 w-full text-white p-3 text-center text-xl sm:text-2xl font-semibold break-words">
                {item.title}
              </div>
            </div>
          ))}
        </div>

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
