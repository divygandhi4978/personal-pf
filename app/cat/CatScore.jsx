"use client";

import { useState } from "react";
const CAT_DATA = {
  2025: {
    held: "Held Nov 30, 2025",
    note: "",
    rows: [
      { percentile: "99.9%ile", varc: 53, dilr: 38, qa: 37, overall: 111.4 },
      { percentile: "99.5%ile", varc: 48, dilr: 33, qa: 31, overall: 93 },
      { percentile: "99%ile", varc: 44, dilr: 30, qa: 27, overall: 84.8 },
      { percentile: "98%ile", varc: 39, dilr: 26, qa: 25, overall: 73 },
      { percentile: "95%ile", varc: 33, dilr: 22, qa: 19, overall: 62.3 },
      { percentile: "90%ile", varc: 26, dilr: 17, qa: 15, overall: 51.5 },
      { percentile: "85%ile", varc: 21, dilr: 12, qa: 12, overall: 42 },
      { percentile: "80%ile", varc: 18, dilr: 10, qa: 11, overall: 38 },
    ],
  },

  2024: {
    held: "Held Nov 24, 2024",
    note: "Easier paper • Scores ran higher",
    rows: [
      { percentile: "99.9%ile", varc: 55, dilr: 50, qa: 45, overall: 127 },
      { percentile: "99.5%ile", varc: 44, dilr: 41, qa: 37, overall: 103 },
      { percentile: "99%ile", varc: 41, dilr: 38, qa: 33, overall: 95 },
      { percentile: "98%ile", varc: 36, dilr: 34, qa: 27, overall: 79 },
      { percentile: "95%ile", varc: 30, dilr: 27, qa: 22, overall: 70 },
      { percentile: "90%ile", varc: 24, dilr: 22, qa: 17, overall: 58 },
      { percentile: "85%ile", varc: 22, dilr: 17, qa: 14, overall: 45 },
      { percentile: "80%ile", varc: 20, dilr: 15, qa: 12, overall: 38 },
    ],
  },

  2023: {
    held: "Held Nov 26, 2023",
    note: "",
    rows: [
      { percentile: "99.9%ile", varc: 51, dilr: 37, qa: 38, overall: 101.43 },
      { percentile: "99.5%ile", varc: 44, dilr: 30, qa: 32, overall: 84.29 },
      { percentile: "99%ile", varc: 40, dilr: 27, qa: 28, overall: 76.02 },
      { percentile: "98%ile", varc: 35, dilr: 24, qa: 25, overall: 66.68 },
      { percentile: "95%ile", varc: 29, dilr: 19, qa: 19, overall: 54.86 },
      { percentile: "90%ile", varc: 23, dilr: 16, qa: 13, overall: 45.16 },
      { percentile: "85%ile", varc: 20, dilr: 13, qa: 11, overall: 38 },
      { percentile: "80%ile", varc: 18, dilr: 12, qa: 10, overall: 34 },
    ],
  },
};
export default function CATScoreHistory() {
  const [year, setYear] = useState("2025");

  const current = CAT_DATA[year];

  return (
    <section className="relative bg-black py-24 border-t border-white/10 overflow-hidden">

      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[1100px] h-[450px] bg-[#83479a]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="text-center space-y-4 mb-12">

       
       

          <p className="text-[#83479a] uppercase tracking-wider font-semibold">
            Compare Years. Plan Smarter.
          </p>

        </div>

        {/* Tabs */}

        <div className="flex justify-center mb-10">

          <div className="bg-white/5 border border-white/10 rounded-full p-1 flex gap-1">

            {Object.keys(CAT_DATA).map((y) => (

              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-7 py-2 rounded-full transition-all duration-300 text-sm font-bold

                ${
                  year === y
                    ? "bg-[#83479a] text-white shadow-lg"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                CAT {y}
              </button>

            ))}

          </div>

        </div>

        {/* Card */}

        <div className="rounded-3xl border border-white/10 overflow-hidden bg-[#0c0b10]/90 backdrop-blur-xl shadow-2xl">

          <div className="px-8 py-7 border-b border-white/10">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">

              <div>

                <h3 className="text-4xl font-bold text-white">
                  CAT {year}
                </h3>

                <p className="text-zinc-500 mt-1">
                  {current.date}
                </p>

                {current.note && (
                  <p className="text-[#83479a] text-sm mt-2">
                    {current.note}
                  </p>
                )}

              </div>

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-[#1b1325]">

                <tr className="text-left text-white">

                  <th className="p-6">Percentile</th>
                  <th className="p-6">VARC</th>
                  <th className="p-6">DILR</th>
                  <th className="p-6">QA</th>
                  <th className="p-6">Overall</th>

                </tr>

              </thead>

              <tbody>

                {current.rows.map((row) => {

                  const highlight = row.percentile === "95%ile";

                  return (

                    <tr
                      key={row.percentile}
                      className={`border-t border-white/5 transition

                      ${
                        highlight
                          ? "bg-[#83479a]/20"
                          : "hover:bg-white/[0.03]"
                      }`}
                    >

                      <td
                        className={`p-6 text-lg

                        ${
                          highlight
                            ? "text-[#a885ff] font-bold border-l-4 border-[#9d68ff]"
                            : "text-zinc-400"
                        }`}
                      >
                        {row.percentile}
                      </td>

                      <td className="p-6 text-white font-semibold">
                        {row.varc}
                      </td>

                      <td className="p-6 text-white font-semibold">
                        {row.dilr}
                      </td>

                      <td className="p-6 text-white font-semibold">
                        {row.qa}
                      </td>

                      <td className="p-6 text-white font-bold text-xl">
                        {row.overall}
                      </td>

                    </tr>

                  );
                })}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
}