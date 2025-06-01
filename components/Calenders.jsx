"use client";
import React, { useState } from "react";

import LeetCodeCalender from "./LeetCodeCalender";
import GitHubCalender from "./GitHubCalender";

export default function Example() {
  const [isGithub, setIsGithub] = useState(true);

  const handleToggle = () => {
    setIsGithub(!isGithub);
  };

  return (
    <div className="max-w-screen mt-10 flex-col justify-center">
      <div>
        <h1 className="text-start text-4xl  sm:text-5xl my-5 font-semibold">Calender</h1>
        <div
          className="relative w-48 h-12 bg-[#030303] rounded-md cursor-pointer transition-all duration-300 ease-in-out mb-5"
          onClick={handleToggle}
        >
          <div
            className={`absolute top-1 h-10 w-24 rounded-md transition-all duration-300 ease-in-out ${
              isGithub ? "left-1 bg-[#562e66]" : "left-23 bg-[#562e66]"
            }`}
          />

          <div
            className={`absolute left-0 top-0 w-24 h-12 flex items-center justify-center rounded-md transition-all duration-300 ease-in-out cursor-pointer ${
              isGithub ? "text-white font-bold" : "text-gray-600"
            }`}
          >
            <span className="text-sm font-medium">GitHub</span>
          </div>

          <div
            className={`absolute right-0 top-0 w-24 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
              !isGithub ? "text-white font-semibold" : "text-gray-600"
            }`}
          >
            <span className="text-sm font-medium">LeetCode</span>
          </div>
        </div>

        <div className="max-w-[850px] transition-all ease-in-out duration-200 pl-[4px]">
          {isGithub ? <GitHubCalender /> : <LeetCodeCalender />}
        </div>

        <div className="flex-col justify-center "></div>
      </div>
    </div>
  );
}
