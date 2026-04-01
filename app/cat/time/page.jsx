"use client";

import React, { useEffect, useState } from "react";

/* =========================
    SCHEDULE (VERIFIED)
========================= */
const schedules = {
  normal: [
    { label: "VARC", start: 8, end: 11, time: "8:00 AM – 11:00 AM" },
    { label: "DILR", start: 11, end: 13, time: "11:00 AM – 1:00 PM" },
    { label: "Break", start: 13, end: 14, time: "1:00 PM – 2:00 PM" },
    { label: "QA", start: 14, end: 16, time: "2:00 PM – 4:00 PM" },
    { label: "Gym", start: 16, end: 17.5, time: "4:00 PM – 5:30 PM" },
    { label: "Practice", start: 18.5, end: 20, time: "6:30 PM – 8:00 PM" },
    { label: "Revision/Book", start: 21, end: 23, time: "9:00 PM – 11:00 PM" }
  ],
  classDay: [
    { label: "VARC", start: 8, end: 11, time: "8:00 AM – 11:00 AM" },
    { label: "DILR", start: 11, end: 13, time: "11:00 AM – 1:00 PM" },
    { label: "Break", start: 13, end: 14, time: "1:00 PM – 2:00 PM" },
    { label: "QA", start: 14, end: 16, time: "2:00 PM – 4:00 PM" },
    { label: "Gym", start: 16, end: 17.5, time: "4:00 PM – 5:30 PM" },
    { label: "IMS Class", start: 19, end: 21, time: "7:00 PM – 9:00 PM" },
    { label: "Revision/Book", start: 22, end: 23, time: "10:00 PM – 11:00 PM" }
  ]
};

export default function DailyExecutionPage() {
  const [currentTime, setCurrentTime] = useState(0);
  const [todaySchedule, setTodaySchedule] = useState([]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hour = now.getHours() + now.getMinutes() / 60;
      setCurrentTime(hour);

      const day = now.getDay();
      const isClassDay = [2, 4, 6].includes(day);
      setTodaySchedule(isClassDay ? schedules.classDay : schedules.normal);
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const isActive = (block) => currentTime >= block.start && currentTime < block.end;

  return (
    <main className="fixed inset-0 bg-[#0a0a0c] text-zinc-100 flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md flex flex-col gap-2.5">
        
        {todaySchedule.map((block, i) => {
          const active = isActive(block);

          return (
            <div
              key={i}
              className={`
                relative transition-all duration-700 ease-in-out
                rounded-2xl p-[1.5px]
                ${active 
                  ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] scale-[1.02] z-10" 
                  : "bg-white/10 opacity-80"
                }
              `}
            >
              <div className={`
                relative flex justify-between items-center
                px-6 py-5 rounded-[15px] 
                ${active ? "bg-[#0a0a0c]" : "bg-[#18181b]"}
              `}>
                
                <div className="flex items-center gap-4">
                  {/* The Bloating Pulse Point */}
                  {active && (
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </div>
                  )}
                  
                  <span className={`
                    text-xl font-black tracking-widest uppercase
                    ${active ? "text-white" : "text-zinc-400"}
                  `}>
                    {block.label}
                  </span>
                </div>

                <div className="text-right">
                  <span className={`
                    text-sm font-mono font-bold
                    ${active ? "text-zinc-200" : "text-zinc-500"}
                  `}>
                    {block.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </main>
  );
}