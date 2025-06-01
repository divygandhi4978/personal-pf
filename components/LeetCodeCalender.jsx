'use client';

import React from "react";
import LeetCodeCalendar from "leetcode-calendar";

export default function LeetCodeCalendarComponent() {
  // Custom theme with GitHub-like green colors, from light to dark
  const customTheme = {
    dark: ["#161b22", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
  };

  return (
    <div >
      <LeetCodeCalendar
        username="divygandhi4978"
        blockSize={15}     
        blockMargin={3}  
        fontSize={14}      
        theme={customTheme}  
      />
    </div>
  );
}
