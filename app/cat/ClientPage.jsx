"use client";

import MotivationVideoPopup from "@/components/cat/video_modal";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import DailyQuoteSection from "@/components/cat/Quotes"

const CatPrimaryMission = () => {


    const steps = [

        {
            title: "B.Tech CSE",
            subtitle: "Build Core Engineering Base"
        },


        {
            title: "CAT 2026 : 90+ Pr",
            subtitle: "Biggest Differentiator"
        },

        {
            title: "CFA Level 1",
            subtitle: "Formal Finance Credential"
        },

        {
            title: "Finance + Data Projects",
            subtitle: "Equity Models • Dashboards"
        },

        {
            title: "Equity Research OR Fintech Analytics",
            subtitle: "First Professional Role"
        },

        {
            title: "Buy-side / Fintech Platforms",
            subtitle: "Advanced Analytical Role"
        },

        {
            title: "Portfolio / Strategy Role",
            subtitle: "Final Destination"
        }

    ];
    const [daysRemaining, setDaysRemaining] = useState(0);
    const [weeksRemaining, setWeeksRemaining] = useState(0);
    const [monthsRemaining, setMonthsRemaining] = useState(0);

    const [timeRemaining, setTimeRemaining] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const data = [
        { percentile: "99.9%ile", varc: 53, lrdi: 38, qa: 37, overall: 111 },
        { percentile: "99.5%ile", varc: 48, lrdi: 33, qa: 31, overall: 93 },
        { percentile: "99%ile", varc: 44, lrdi: 30, qa: 27, overall: 84 },
        { percentile: "95%ile", varc: 33, lrdi: 22, qa: 18, overall: 62 },
        { percentile: "90%ile", varc: 26, lrdi: 17, qa: 15, overall: 52 },
        { percentile: "85%ile", varc: 22, lrdi: 14, qa: 14, overall: 44 },
        { percentile: "80%ile", varc: 19, lrdi: 12, qa: 10, overall: 38 },
    ];

    const today = new Date();

    const dayNumber = today.getDay();

    // TTS → Tue Thu Sat
    const classDays = [2, 4, 6];

    const isClassDay = classDays.includes(dayNumber);
    const [errorOpen, setErrorOpen] = useState(false);
    const [careerOpen, setCareerOpen] = useState(false);
    // Day Name (display purpose)

    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const todayName = dayNames[dayNumber];

    // 🎯 Target Date
    const TARGET_DATE =
        new Date("2026-11-29T00:00:00");


    // ===== DAYS + WEEKS =====

    const getDaysAndWeeksRemaining = () => {

        // Clone dates
        const today = new Date();
        const target = new Date(TARGET_DATE);

        // Remove time completely (critical)
        today.setHours(0, 0, 0, 0);
        target.setHours(0, 0, 0, 0);

        // Raw difference
        const diffTime = target - today;

        // Convert to days
        let days = Math.ceil(
            diffTime / (1000 * 60 * 60 * 24)
        );


        // Safety guard
        if (days < 0) days = 0;

        // Weeks calculation
        const weeks = Math.floor(days / 7);

        return { days, weeks };

    };


    // ===== MONTHS =====

    const getMonthsRemaining = () => {

        const now = new Date();

        let months =
            (TARGET_DATE.getFullYear() - now.getFullYear()) * 12 +
            (TARGET_DATE.getMonth() - now.getMonth());

        if (TARGET_DATE.getDate() < now.getDate()) {
            months--;
        }

        return months;

    };


    // ===== LIVE TIME =====



    useEffect(() => {

        const updateCountdown = () => {

            const { days, weeks } =
                getDaysAndWeeksRemaining();

            const months =
                getMonthsRemaining();



            setDaysRemaining(days);
            setWeeksRemaining(weeks);
            setMonthsRemaining(months);

        };

        // Run immediately
        updateCountdown();

        // Run every second
        const interval =
            setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);

    }, []);

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
        <>
            <section className="relative min-h-[85vh] flex flex-col justify-center bg-black overflow-hidden pt-6">

                {/* Background Aura */}

                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[400px] bg-[#83479a]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-6xl mx-auto px-6 space-y-8 text-center">

                    {/* TITLE */}

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">

                        <span className="text-[#83479a]">
                            CAT 2026</span>

                    </h1>

                    {/* COUNTDOWN */}

                    <div className="space-y-6">

                        <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white leading-none">

                            {daysRemaining}

                        </h2>

                        <p className="text-[#83479a] text-xl md:text-2xl font-light italic">

                            Days Until 29 November 2026

                        </p>
                        <div className="flex justify-center gap-8">

                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">

                                {weeksRemaining} Weeks

                            </p>

                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">

                                {monthsRemaining} Months

                            </p>

                        </div>
                        <div className="w-full max-w-md flex flex-col gap-2.5">
                            {todaySchedule.map((block, i) => {
                                const active = isActive(block);

                                return (
                                    <div
                                        key={i}
                                        className={`
                relative transition-all duration-700 ease-in-out
                rounded-xl sm:rounded-2xl 
                p-[1px] sm:p-[1.5px]
                
                ${active
                                                ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)] sm:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] scale-[1.01] sm:scale-[1.02] z-10"
                                                : "bg-white/10 opacity-80"
                                            }
            `}
                                    >
                                        <div className={`
                relative flex justify-between items-center
                px-3 sm:px-5 md:px-6 
                py-3 sm:py-4 md:py-5
                rounded-[12px] sm:rounded-[15px]

                ${active ? "bg-[#0a0a0c]" : "bg-[#18181b]"}
            `}>

                                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">

                                                {/* Pulse */}
                                                {active && (
                                                    <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-full w-full bg-purple-500"></span>
                                                    </div>
                                                )}

                                                <span className={`
                        text-sm sm:text-lg md:text-xl
                        font-black tracking-wide sm:tracking-widest uppercase
                        truncate

                        ${active ? "text-white" : "text-zinc-400"}
                    `}>
                                                    {block.label}
                                                </span>

                                            </div>

                                            <div className="text-right shrink-0">

                                                <span className={`
                        text-xs sm:text-sm
                        font-mono font-bold

                        ${active ? "text-zinc-200" : "text-zinc-500"}
                    `}>
                                                    {block.time}
                                                </span>

                                            </div>

                                        </div>
                                    </div>
                                );
                            })}

                        </div><div className="flex flex-col items-center justify-center text-center space-y-3 md:space-y-4 px-6 py-8">

                            <h2 className="text-[#83479a] text-3xl sm:text-3xl md:text-3xl font-light italic">
                                Accuracy over Ego.
                            </h2>

                            <h2 className="text-[#e0dee0] text-3xl sm:text-3xl md:text-3xl font-light italic">
                                Learn. Analyse. Resolve.
                            </h2>

                            <h2 className="text-[#83479a] text-xl sm:text-2xl md:text-3xl font-light italic max-w-2xl leading-relaxed">
                                Don't just solve — Solve with proper approach.
                            </h2>

                        </div>

                        <DailyQuoteSection />
                    </div>

                    {/* PRIMARY RULES — BULLET FORMAT */}

                    <div className="grid md:grid-cols-2 gap-5 ">

                        <Link href="/cat/math">

                            <button
                                className="
      px-5 py-3
      text-sm
      font-black
      uppercase
      tracking-widest
      border
      border-[#562e66]
      bg-[#562e66]/20
      text-[#9b51b3]
      hover:bg-[#562e66]
      hover:text-white
      transition-all
      rounded-sm
      mb-10
    "
                            >
                                Math Remember Page
                            </button>

                        </Link>
                        {/* LEFT CARD */}

                        <div className="border border-[#83479a]/30 bg-[#83479a]/5 rounded-2xl p-8">

                            <ul className="space-y-4 text-lg md:text-xl text-left">

                                <li className="flex gap-3 hover:translate-x-1 transition-transform duration-200">

                                    <span className="text-[#83479a] font-bold">
                                        01
                                    </span>

                                    <span className="text-zinc-300">
                                        Target Percentile —
                                        <span className="text-white font-semibold ml-1">
                                            99+
                                        </span>
                                    </span>

                                </li>

                                <li className="flex gap-3 hover:translate-x-1 transition-transform duration-200">

                                    <span className="text-[#83479a] font-bold">
                                        02
                                    </span>

                                    <span className="text-zinc-300">
                                        Finish Daily Study Blocks
                                    </span>

                                </li>

                            </ul>

                        </div>

                        {/* RIGHT CARD */}

                        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-8">

                            <ul className="space-y-4 text-lg md:text-xl text-left">

                                <li className="flex gap-3 hover:translate-x-1 transition-transform duration-200">

                                    <span className="text-[#83479a] font-bold">
                                        03
                                    </span>

                                    <span className="text-zinc-300">
                                        Concept → Practice → Analysis → Repeat
                                    </span>

                                </li>

                                <li className="flex gap-3 hover:translate-x-1 transition-transform duration-200">

                                    <span className="text-[#83479a] font-bold">
                                        04
                                    </span>

                                    <span className="text-zinc-300">
                                        Accuracy First. Attempts Later.
                                    </span>

                                </li>

                            </ul>

                        </div>

                    </div>
                </div>



            </section>

            <MotivationVideoPopup />


            <section className="relative bg-black border-t border-white/10 py-24 overflow-hidden">

                {/* Background Aura */}

                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[150%] max-w-[900px] h-[350px] bg-[#83479a]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-6xl mx-auto px-6 space-y-14">

                    {/* Header */}

                    <div className="text-center space-y-4">

                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">
                            Performance Target Map
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">

                            Percentile vs Score Targets

                        </h2>

                        <p className="text-[#83479a] font-semibold uppercase tracking-wide">
                            Know The Numbers. Not Just The Goal.
                        </p>

                    </div>

                    {/* Table */}

                    <div className="overflow-x-auto border border-white/10 rounded-2xl">

                        <table className="w-full text-left border-collapse">

                            {/* Header */}

                            <thead className="bg-[#83479a]/20">

                                <tr className="text-white text-lg">

                                    <th className="p-5">Percentile</th>
                                    <th className="p-5">VARC</th>
                                    <th className="p-5">LRDI</th>
                                    <th className="p-5">QA</th>
                                    <th className="p-5">Overall</th>

                                </tr>

                            </thead>

                            {/* Rows */}

                            <tbody>

                                {data.map((row, index) => {

                                    const highlight = row.percentile === "95%ile";

                                    return (

                                        <tr
                                            key={index}
                                            className={`border-t border-white/10 text-lg
                    ${highlight
                                                    ? "bg-[#83479a]/15 text-white font-semibold"
                                                    : "text-zinc-300"
                                                }`}
                                        >

                                            <td className="p-5">
                                                {row.percentile}
                                            </td>

                                            <td className="p-5">
                                                {row.varc}
                                            </td>

                                            <td className="p-5">
                                                {row.lrdi}
                                            </td>

                                            <td className="p-5">
                                                {row.qa}
                                            </td>

                                            <td className="p-5 font-bold">
                                                {row.overall}
                                            </td>

                                        </tr>

                                    );

                                })}

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>


            <section className="relative bg-black border-t border-white/10 py-24 overflow-hidden">

                {/* Background Aura */}

                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[400px] bg-[#83479a]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-6xl mx-auto px-6 space-y-20">

                    {/* HEADER */}

                    <div className="text-center space-y-6">

                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">
                            Daily Output + Execution Rules
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                            Minimum Productive Work
                        </h2>

                        {/* Hard Rule */}

                        <p className="text-[#83479a] text-xl md:text-2xl font-semibold uppercase tracking-wide">

                            No Careless Errors Allowed

                        </p>

                    </div>

                    {/* ============================= */}
                    {/* DAILY OUTPUT TARGETS */}
                    {/* ============================= */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* VARC */}

                        <div className="border border-[#83479a]/30 bg-[#83479a]/5 rounded-2xl p-8 space-y-4">

                            <h3 className="text-[#83479a] font-bold text-xl">
                                VARC
                            </h3>

                            <ul className="space-y-2 text-zinc-300 text-lg">

                                <li>Reading — 1 hour</li>
                                <li>RC — 3 passages</li>
                                <li>VA — 20–25 questions</li>
                                <li>Analysis — 1 hour</li>

                            </ul>

                        </div>

                        {/* QA */}

                        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 space-y-4">

                            <h3 className="text-[#83479a] font-bold text-xl">
                                QA
                            </h3>

                            <ul className="space-y-2 text-zinc-300 text-lg">

                                <li>40–50 Questions</li>
                                <li>Arithmetic → Algebra → Geometry</li>

                            </ul>

                        </div>

                        {/* DILR */}

                        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 space-y-4">

                            <h3 className="text-[#83479a] font-bold text-xl">
                                DILR
                            </h3>

                            <ul className="space-y-2 text-zinc-300 text-lg">

                                <li>3 Sets Daily</li>
                                <li>Full Analysis Required</li>

                            </ul>

                        </div>

                        {/* REVISION */}

                        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 space-y-4">

                            <h3 className="text-[#83479a] font-bold text-xl">
                                Revision
                            </h3>

                            <ul className="space-y-2 text-zinc-300 text-lg">

                                <li>Reattempt Mistakes</li>
                                <li>Daily Review Required</li>

                            </ul>

                        </div>

                    </div>

                    {/* ============================= */}
                    {/* SUBJECT EXECUTION RULES */}
                    {/* ============================= */}

                    <div className="grid md:grid-cols-3 gap-10 pt-10">

                        {/* VARC RULES */}

                        <div className="border border-[#83479a]/30 bg-[#83479a]/5 rounded-2xl p-8 space-y-6">

                            <h3 className="text-[#83479a] font-bold text-2xl">
                                VARC Rules
                            </h3>

                            <ul className="space-y-3 text-zinc-300 text-lg">

                                <li>Read for Structure</li>

                                <li>
                                    Identify:
                                    <ul className="ml-4 mt-2 space-y-1 text-zinc-400">
                                        <li>Main Idea</li>
                                        <li>Author Tone</li>
                                        <li>Central Argument</li>
                                    </ul>
                                </li>

                                <li>Use Elimination, Not Guessing</li>

                                <li>
                                    Ignore:
                                    <ul className="ml-4 mt-2 space-y-1 text-zinc-400">
                                        <li>Extreme Options</li>
                                        <li>Personal Opinions</li>
                                        <li>Fancy Sounding Answers</li>
                                    </ul>
                                </li>

                            </ul>

                        </div>

                        {/* DILR RULES */}

                        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 space-y-6">

                            <h3 className="text-[#83479a] font-bold text-2xl">
                                DILR Rules
                            </h3>

                            <ul className="space-y-3 text-zinc-300 text-lg">

                                <li>Selection is Everything</li>
                                <li>Scan Sets First</li>
                                <li>Pick Solvable Sets</li>
                                <li>Draw Tables / Diagrams</li>
                                <li>Never Solve in Head</li>
                                <li>Analyze Every Set</li>
                                <li>Rebuild Full Solution</li>

                            </ul>

                        </div>

                        {/* QA RULES */}

                        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 space-y-6">

                            <h3 className="text-[#83479a] font-bold text-2xl">
                                QA Rules
                            </h3>

                            <ul className="space-y-3 text-zinc-300 text-lg">

                                <li>Identify Topic Quickly</li>
                                <li>Solve Easy First</li>
                                <li>Skip Early if Stuck</li>
                                <li>Maintain High Accuracy</li>
                                <li>Revise Formulas Daily</li>
                                <li>Focus on Arithmetic First</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>    <section className="relative bg-black border-t border-white/10 py-24 overflow-hidden">

                {/* Background Aura */}

                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[350px] bg-[#83479a]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-5xl mx-auto px-6 space-y-16">

                    {/* Header */}

                    <div className="text-center space-y-6">

                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">
                            Critical Warning
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">

                            Traps To Avoid

                        </h2>

                        <p className="text-red-400 text-lg md:text-xl font-semibold uppercase tracking-wide">

                            These Kill Percentile Silently

                        </p>

                    </div>

                    {/* Trap Cards */}

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Trap 1 */}

                        <div className="border border-red-500/20 bg-red-500/5 rounded-2xl p-8">

                            <ul className="space-y-4 text-lg text-zinc-300">

                                <li className="hover:translate-x-1 transition-transform duration-200">
                                    Solving Without Analysis
                                </li>

                                <li className="hover:translate-x-1 transition-transform duration-200">
                                    Practicing Only Comfortable Topics
                                </li>

                                <li className="hover:translate-x-1 transition-transform duration-200">
                                    Watching Solutions Without Trying
                                </li>

                                <li className="hover:translate-x-1 transition-transform duration-200">
                                    Skipping Revision
                                </li>

                            </ul>

                        </div>

                        {/* Trap 2 */}

                        <div className="border border-red-500/20 bg-red-500/5 rounded-2xl p-8">

                            <ul className="space-y-4 text-lg text-zinc-300">

                                <li className="hover:translate-x-1 transition-transform duration-200">
                                    Studying Without Targets
                                </li>

                                <li className="hover:translate-x-1 transition-transform duration-200">
                                    Over-Attempting in Mocks
                                </li>

                                <li className="hover:translate-x-1 transition-transform duration-200">
                                    Ignoring Weak Sections
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

            <section className="relative bg-black border-t border-white/10 py-24 overflow-hidden">

                {/* Background Aura */}

                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[350px] bg-[#83479a]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-6xl mx-auto px-6 space-y-16">

                    {/* Header */}

                    <div className="text-center space-y-6">

                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">
                            Execution Behavior Rules
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">

                            Discipline Before Motivation

                        </h2>

                    </div>

                    {/* Rules Grid */}

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* ================= */}
                        {/* READING RULES */}
                        {/* ================= */}

                        <div className="border border-[#83479a]/30 bg-[#83479a]/5 rounded-2xl p-8 space-y-6">

                            <h3 className="text-[#83479a] font-bold text-2xl">
                                Reading Rules
                            </h3>

                            <ul className="space-y-3 text-zinc-300 text-lg">

                                <li>Read Daily Without Fail</li>

                                <li>Focus on Argument</li>

                                <li>
                                    Ask:
                                    <ul className="ml-4 mt-2 space-y-1 text-zinc-400">
                                        <li>Why is author writing this?</li>
                                    </ul>
                                </li>

                                <li>
                                    Identify:
                                    <ul className="ml-4 mt-2 space-y-1 text-zinc-400">
                                        <li>Tone</li>
                                        <li>Assumptions</li>
                                    </ul>
                                </li>

                                <li>Summarize After Reading</li>

                            </ul>

                        </div>

                        {/* ================= */}
                        {/* BTECH RULES */}
                        {/* ================= */}

                        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 space-y-6">

                            <h3 className="text-[#83479a] font-bold text-2xl">
                                BTech Rules
                            </h3>

                            <ul className="space-y-3 text-zinc-300 text-lg">

                                <li>Do Minimum Work Daily</li>

                                <li>Avoid Last-Minute Panic</li>

                                <li>Track Submission Deadlines</li>

                                <li>Maintain Passing Performance</li>

                                <li>No Backlogs Allowed</li>

                            </ul>

                        </div>

                        {/* ================= */}
                        {/* THINKING RULES */}
                        {/* ================= */}

                        <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 space-y-6">

                            <h3 className="text-[#83479a] font-bold text-2xl">
                                Thinking Principles
                            </h3>

                            <ul className="space-y-3 text-zinc-300 text-lg">

                                <li>Do Not Rush</li>

                                <li>Do Not Guess Blindly</li>

                                <li>Skip Early If Stuck</li>

                                <li>Focus on Accuracy</li>

                                <li>Finish What You Start</li>

                                <li>Stay Consistent Daily</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
            <section className="relative bg-black border-t border-white/10 py-20">

                {/* BUTTONS */}

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">

                    {/* ERROR BUTTON */}

                    <button
                        onClick={() => setErrorOpen(true)}
                        className="border border-red-500/40 bg-red-500/10 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-red-500/20 transition"
                    >
                        ⚠ Error Control Manual
                    </button>

                    {/* CAREER BUTTON */}

                    <button
                        onClick={() => setCareerOpen(true)}
                        className="border border-[#83479a]/40 bg-[#83479a]/10 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-[#83479a]/20 transition"
                    >
                        🎯 Career Roadmap
                    </button>

                    <Link
                        href="/cat/remember"
                        className="border border-[#83479a]/40 bg-[#83479a]/10 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-[#83479a]/20 transition"
                    >
                        SIMCAT Playbook
                    </Link>

                </div>

                {/* ========================= */}
                {/* ERROR MODAL */}
                {/* ========================= */}

                {errorOpen && (

                    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto">

                        <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

                            {/* CLOSE */}

                            <div className="flex justify-end">

                                <button
                                    onClick={() => setErrorOpen(false)}
                                    className="text-white text-sm uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                                >
                                    Close
                                </button>

                            </div>

                            {/* HEADER */}

                            <div className="text-center space-y-6">

                                <h2 className="text-5xl md:text-7xl font-bold text-white">

                                    Error Control Manual

                                </h2>

                                <p className="text-red-400 uppercase tracking-wide font-semibold">

                                    Every Careless Error Is Preventable

                                </p>

                            </div>

                            {/* ERROR TYPES */}

                            <div className="border border-red-500/30 bg-red-500/5 rounded-2xl p-10">

                                <ul className="space-y-3 text-zinc-300 text-lg">

                                    <li>Misreading Question</li>
                                    <li>Wrong Calculation</li>
                                    <li>Ignoring Given Condition</li>
                                    <li>Skipping Units</li>
                                    <li>Rushing Without Checking</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                )}

                {/* ========================= */}
                {/* CAREER MODAL */}
                {/* ========================= */}

                {careerOpen && (

                    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto">

                        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                            {/* CLOSE */}

                            <div className="flex justify-end">

                                <button
                                    onClick={() => setCareerOpen(false)}
                                    className="text-white text-sm uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                                >
                                    Close
                                </button>

                            </div>

                            {/* HEADER */}

                            <div className="text-center space-y-6">

                                <h2 className="text-5xl md:text-7xl font-bold text-white">

                                    Career Roadmap

                                </h2>

                                <p className="text-[#83479a] uppercase tracking-wide font-semibold">

                                    Long-Term Direction Defines Daily Effort

                                </p>

                            </div>

                            {/* ROADMAP */}

                            <div className="flex flex-col items-center space-y-8">

                                {steps.map((step, index) => (

                                    <React.Fragment key={index}>

                                        <div className="w-full border border-white/10 bg-white/[0.03] rounded-2xl p-8 text-center hover:border-[#83479a]/40 transition">

                                            <h3 className="text-2xl font-bold text-white">

                                                {step.title}

                                            </h3>

                                            <p className="text-zinc-400 mt-2">

                                                {step.subtitle}

                                            </p>

                                        </div>

                                        {index !== steps.length - 1 && (

                                            <div className="text-[#83479a] text-3xl">

                                                ↓

                                            </div>

                                        )}

                                    </React.Fragment>

                                ))}

                            </div>

                        </div>

                    </div>

                )}

            </section>

        </>
    );

};

export default CatPrimaryMission;