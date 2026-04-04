"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    ReferenceDot
} from "recharts";

import { useMemo } from "react";

const CatGrowthCurve = () => {

    // ===== DATES =====

    const startDate = new Date("2026-04-01");
    const examDate = new Date("2026-11-29");

    const today = new Date();

    // ===== GENERATE DATA =====

    const data = useMemo(() => {

        const daysTotal =
            Math.ceil(
                (examDate - startDate) /
                (1000 * 60 * 60 * 24)
            );

        const todayIndex =
            Math.ceil(
                (today - startDate) /
                (1000 * 60 * 60 * 24)
            );

        const arr = [];

        for (let i = 0; i <= daysTotal; i++) {

            const currentDate =
                new Date(startDate);

            currentDate.setDate(
                startDate.getDate() + i
            );

            // Exponential growth curve

            const progress =
                Math.pow(i / daysTotal, 2.5) * 100;

            arr.push({

                day: i,

                date:
                    currentDate
                        .toLocaleDateString(
                            "en-IN",
                            {
                                day: "numeric",
                                month: "short"
                            }
                        ),

                progress:
                    Number(
                        progress.toFixed(2)
                    ),

                isPast:
                    i <= todayIndex

            });

        }

        return arr;

    }, []);

    // ===== TODAY POSITION =====

    const todayPoint =
        data.find(d => d.isPast === true);

    return (

        <div className="
            w-full
            max-w-3xl
            mx-auto
            mt-10
            p-6
            rounded-2xl
            border border-[#83479a]/30
            bg-[#83479a]/5
        ">

            {/* TITLE */}

            <div className="text-center mb-6">

                <h2 className="
                    text-2xl
                    font-bold
                    text-white
                    tracking-wide
                ">
                    Effort compounds slowly — then suddenly.
                </h2>


            </div>

            {/* CHART */}

            <ResponsiveContainer
                width="100%"
                height={260}
            >

                <LineChart data={data}>

                    {/* X AXIS */}

                    <XAxis
                        dataKey="date"
                        stroke="#71717a"
                        tick={{ fontSize: 10 }}
                        interval={30}
                    />

                    {/* Y AXIS */}

                    <YAxis
                        stroke="#71717a"
                        tick={{ fontSize: 10 }}
                        domain={[0, 100]}
                    />

                    {/* TOOLTIP */}

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#0a0a0c",
                            border: "1px solid #83479a",
                            borderRadius: "10px"
                        }}
                    />

                    {/* PAST DATA */}

                    <Line
                        type="monotone"
                        dataKey={(d) =>
                            d.isPast ? d.progress : null
                        }
                        stroke="#a855f7"
                        strokeWidth={3}
                        dot={false}
                        isAnimationActive={true}
                    />

                    {/* FUTURE DATA (DOTTED) */}

                    <Line
                        type="monotone"
                        dataKey={(d) =>
                            !d.isPast ? d.progress : null
                        }
                        stroke="#a855f7"
                        strokeWidth={2}
                        strokeDasharray="6 6"
                        opacity={0.4}
                        dot={false}
                        isAnimationActive={false}
                    />

                    {/* TODAY DOT */}

                    {todayPoint && (

                        <ReferenceDot
                            x={todayPoint.date}
                            y={todayPoint.progress}
                            r={6}
                            fill="#a855f7"
                            stroke="white"
                        />

                    )}

                </LineChart></ResponsiveContainer>

            {/* FOOTER TEXT */}


        </div>

    );

};

export default CatGrowthCurve;