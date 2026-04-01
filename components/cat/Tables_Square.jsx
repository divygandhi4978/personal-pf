"use client";
import React, { useState } from "react";

/* =========================
   TRIG GRID TABLE — THEME MATCHED
========================= */

const TrigGridTable = () => {

  const angles = ["0°", "30°", "45°", "60°", "90°"];

  const rows = [

    {
      label: "sin θ",
      values: ["0", "1/2", "1/√2", "√3/2", "1"]
    },

    {
      label: "cos θ",
      values: ["1", "√3/2", "1/√2", "1/2", "0"]
    },

    {
      label: "tan θ",
      values: ["0", "1/√3", "1", "√3", "∞"]
    },

    /* FULL COVERAGE — Don't skip these */

    {
      label: "cosec θ",
      values: ["∞", "2", "√2", "2/√3", "1"]
    },

    {
      label: "sec θ",
      values: ["1", "2/√3", "√2", "2", "∞"]
    },

    {
      label: "cot θ",
      values: ["∞", "√3", "1", "1/√3", "0"]
    }

  ];

  return (

    <div className="border border-white/10 rounded-sm overflow-hidden bg-white/[0.01]">

      {/* Header */}

      <div className="
        grid grid-cols-6
        bg-[#562e66]/20
        text-[#9b51b3]
        text-sm
        font-black
        uppercase
        tracking-widest
        text-center
      ">

        <div></div>

        {angles.map((angle, i) => (

          <div
            key={i}
            className="px-3 py-3 border-l border-white/10"
          >
            {angle}
          </div>

        ))}

      </div>


      {/* Body */}

      {rows.map((row, r) => (

        <div
          key={r}
          className="grid grid-cols-6 text-center text-[15px] text-white/90 font-medium"
        >

          {/* Row Label */}

          <div className="
            px-3 py-4
            text-[#9b51b3]
            font-black
            border-t border-white/10
          ">

            {row.label}

          </div>


          {/* Values */}

          {row.values.map((val, i) => (

            <div
              key={i}
              className="
                px-3 py-4
                border-l border-white/10
                border-t border-white/10
                font-bold text-white
              "
            >

              {val}

            </div>

          ))}

        </div>

      ))}

    </div>

  );

};
const TableBlock = ({ number }) => {
  return (
    <div className="border border-white/10 rounded-sm p-3 bg-white/[0.01]">

      <h3 className="text-[#9b51b3] text-sm font-black tracking-widest text-center mb-2">
        TABLE {number}
      </h3>

      <div className="space-y-[2px] text-[15px] md:text-sm text-white/90 font-medium">

        {Array.from({ length: 10 }, (_, i) => (

          <div key={i}>
            {number} × {i + 1} ={" "}
            <span className="font-bold text-white">
              {number * (i + 1)}
            </span>
          </div>

        ))}

      </div>

    </div>
  );
};


/* =========================
   ROW TABLE
========================= */

const RowTable = ({ headers, rows }) => {
  return (

    <div className="border border-white/10 rounded-sm overflow-hidden">

      <div className="grid grid-cols-2 bg-[#562e66]/20 text-[#9b51b3] text-sm font-black uppercase tracking-widest">

        {headers.map((h, i) => (

          <div
            key={i}
            className="px-3 py-2"
          >
            {h}
          </div>

        ))}

      </div>

      {rows.map((row, i) => (

        <div
          key={i}
          className="grid grid-cols-2 px-3 py-2 border-t border-white/5 text-[15px] text-white/90"
        >

          <div>
            {row[0]}
          </div>

          <div className="font-bold text-white">
            {row[1]}
          </div>

        </div>

      ))}

    </div>

  );
};


/* =========================
   MAIN COMPONENT
========================= */

export default function MathMemoryToolkit() {

  const [active, setActive] = useState("tables");


  /* =========================
     DATA GENERATORS
  ========================= */

  const squares = Array.from({ length: 25 }, (_, i) => [
    i + 1,
    (i + 1) ** 2,
  ]);

  const cubes = Array.from({ length: 15 }, (_, i) => [
    i + 1,
    (i + 1) ** 3,
  ]);

  const power2 = Array.from({ length: 12 }, (_, i) => [
    `2^${i + 1}`,
    2 ** (i + 1),
  ]);

  const power3 = Array.from({ length: 6 }, (_, i) => [
    `3^${i + 1}`,
    3 ** (i + 1),
  ]);

  const power5 = Array.from({ length: 6 }, (_, i) => [
    `5^${i + 1}`,
    5 ** (i + 1),
  ]);

  /* NEW — FRACTIONS */

  const fractions = Array.from({ length: 25 }, (_, i) => {

    const denominator = i + 1;

    return [
      `1/${denominator}`,
      (100 / denominator).toFixed(2) + "%",
    ];

  });


  /* =========================
     TABLE RENDER
  ========================= */

  const renderTables = () => {

    return (

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">

        {Array.from({ length: 25 }, (_, i) => (

          <TableBlock
            key={i}
            number={i + 1}
          />

        ))}

      </div>

    );

  };


  /* =========================
     BUTTON STYLE
  ========================= */

  const btn =
    "px-4 py-2 text-xs font-black uppercase tracking-widest border border-white/10";

  const activeBtn =
    "bg-[#562e66] text-white border-[#562e66]";

  const inactiveBtn =
    "bg-white/[0.02] text-white/50 hover:text-white";


  /* =========================
     UI
  ========================= */

  return (

    <main className="bg-black text-white p-6 space-y-5 min-h-screen">

      {/* Title */}

      <div>

        <h1 className="text-4xl font-black uppercase">
          Math Memory Toolkit
        </h1>

        <p className="text-[#9b51b3] text-xs uppercase tracking-[0.4em] font-bold">
          Tables • Squares • Powers • Fractions
        </p>

      </div>


      {/* Navigation */}

      <div className="flex flex-wrap gap-2">

        <button
          onClick={() => setActive("tables")}
          className={`${btn} ${active === "tables" ? activeBtn : inactiveBtn}`}
        >
          Tables
        </button>

        <button
          onClick={() => setActive("squares")}
          className={`${btn} ${active === "squares" ? activeBtn : inactiveBtn}`}
        >
          Squares
        </button>

        <button
          onClick={() => setActive("cubes")}
          className={`${btn} ${active === "cubes" ? activeBtn : inactiveBtn}`}
        >
          Cubes
        </button>

        <button
          onClick={() => setActive("p2")}
          className={`${btn} ${active === "p2" ? activeBtn : inactiveBtn}`}
        >
          Power 2
        </button>

        <button
          onClick={() => setActive("p3")}
          className={`${btn} ${active === "p3" ? activeBtn : inactiveBtn}`}
        >
          Power 3
        </button>

        <button
          onClick={() => setActive("p5")}
          className={`${btn} ${active === "p5" ? activeBtn : inactiveBtn}`}
        >
          Power 5
        </button>

        {/* NEW BUTTON */}

        <button
          onClick={() => setActive("fractions")}
          className={`${btn} ${active === "fractions" ? activeBtn : inactiveBtn}`}
        >
          Fractions
        </button>
        
        <button
          onClick={() => setActive("trig")}
          className={`${btn} ${active === "trig" ? activeBtn : inactiveBtn}`}
        >
          Trig Table
        </button>

      </div>

      {/* Content */}

      <div>

        {active === "tables" && renderTables()}

        {active === "squares" && (
          <RowTable
            headers={["Number", "Square"]}
            rows={squares}
          />
        )}

        {active === "trig" && (

          <TrigGridTable />

        )}

        {active === "cubes" && (
          <RowTable
            headers={["Number", "Cube"]}
            rows={cubes}
          />
        )}

        {active === "p2" && (
          <RowTable
            headers={["Power", "Value"]}
            rows={power2}
          />
        )}

        {active === "p3" && (
          <RowTable
            headers={["Power", "Value"]}
            rows={power3}
          />
        )}

        {active === "p5" && (
          <RowTable
            headers={["Power", "Value"]}
            rows={power5}
          />
        )}

        {/* NEW SECTION */}

        {active === "fractions" && (
          <RowTable
            headers={["Fraction", "Percentage"]}
            rows={fractions}
          />
        )}

      </div>

    </main>

  );
}