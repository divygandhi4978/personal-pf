"use client";

/* =========================================================
   DAILY QUOTE COMPONENT — SAFE VERSION
========================================================= */

const WEEKLY_QUOTES = [

  "Do it for your father — he believed in you even when you didn't.",

  "No one is coming to save you. Work anyway.",

  "Make your parents proud without saying a word.",

  "Discipline today removes regret tomorrow.",

  "Every day wasted is self-betrayal.",

  "Your future is built from what you do when no one watches.",

  "Win quietly. Let results make noise."

];

function getTodayQuote() {

  const dayIndex = new Date().getDay();

  return WEEKLY_QUOTES[dayIndex];

}

export default function DailyQuoteSection() {

  const dayNames = [

    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

  ];

  const todayIndex =
    new Date().getDay();

  const todayName =
    dayNames[todayIndex];

  const quote =
    getTodayQuote();

  return (

    <section
      className="
        text-center
        py-10
        px-6
        border border-[#83479a]/30
        bg-[#83479a]/10
        rounded-xl
        space-y-4
        mb-8
      "
    >

     
      <p
        className="
          text-xl
          md:text-2xl
          font-medium
          text-white
          leading-relaxed
          max-w-2xl
          mx-auto
        "
      >
        {quote}
      </p>

    </section>

  );

}