"use client";

import React, { useEffect, useState, useMemo } from "react";

export default function SnapshotPanel({ snapshotData }) {
  const [liveData, setLiveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const metricSchema = [
    { id: "price", label: "Current Price", isCurrency: true },
    { id: "pe", label: "P/E Ratio", isDecimal: true },
    { id: "marketCap", label: "Market Cap", isValuation: true },
    { id: "roe", label: "Return on Equity", isPercent: true },
    { id: "debtToEquity", label: "Debt / Equity", isDecimal: true },
    { id: "beta", label: "Beta (Volatility)", isDecimal: true },
  ];

  /* -----------------------------------------------------------
      FIXED FORMATTING ENGINE (Lakh Cr & Decimal Control)
  ----------------------------------------------------------- */
  const format = (key, value) => {
    if (value === "N/A" || value === null || value === undefined) return "—";
    
    const field = metricSchema.find((m) => m.id === key);
    const num = Number(value);

    if (isNaN(num)) return value;

    // 1. Currency: Standard Indian Rounding
    if (field?.isCurrency) {
      return `₹${num.toLocaleString("en-IN", { 
        maximumFractionDigits: 2, 
        minimumFractionDigits: 2 
      })}`;
    }

    // 2. Valuation: Convert to Lakh Cr (Raw / 1e12)
    if (field?.isValuation) {
      const lakhCr = num / 1e12; 
      return `₹${lakhCr.toFixed(2)}L Cr`;
    }

    // 3. Percent: Handle decimals and scaling
    if (field?.isPercent) {
      const val = num <= 2 && num >= -2 ? num * 100 : num;
      return val.toFixed(2) + "%";
    }

    // 4. Default: Precision to 2 decimal places
    return num.toFixed(2);
  };

  useEffect(() => {
    let active = true;
    async function syncMarketData() {
      if (!snapshotData.ticker) return;
      setLoading(true);
      try {
        const response = await fetch(`/api/finance?ticker=${snapshotData.ticker}`);
        if (!response.ok) throw new Error("API_REJECTED");
        const data = await response.json();
        if (active) {
          setLiveData(data);
          setLoading(false);
        }
      } catch (err) {
        if (active) {
          setError(true);
          setLoading(false);
        }
      }
    }
    syncMarketData();
    return () => { active = false; };
  }, [snapshotData.ticker]);

  const returnPct = useMemo(() => {
    const historical = snapshotData.metricsThen.price;
    const current = liveData?.price;
    if (!historical || !current) return null;
    return (((current - historical) / historical) * 100).toFixed(2);
  }, [liveData, snapshotData.metricsThen.price]);

  return (
    <section className="bg-black py-20 border-y border-zinc-900 overflow-hidden font-sans selection:bg-[#7c3aed]/40">
      <div className="max-w-[1400px] mx-auto px-8">
        
        {/* HEADER SECTION - Reduced margins */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#7c3aed] shadow-[0_0_15px_#7c3aed]" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase">
                Intelligence Layer // {snapshotData.ticker}
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
              Market Snapshot
            </h2>
          </header>

          {returnPct && (
            <div className="relative group bg-[#0D0D12] border border-zinc-800 p-6 rounded-2xl min-w-[280px] transition-all hover:border-[#7c3aed]/50 shadow-xl overflow-hidden">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-2">Yield Since Study</p>
              <div className={`text-5xl font-bold font-mono tracking-tighter ${Number(returnPct) >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                {Number(returnPct) > 0 ? `+${returnPct}` : returnPct}%
              </div>
            </div>
          )}
        </div>

        {/* MAIN GRID - Reduced padding from 24 to 12/16 */}
        <div className="grid lg:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
          
          {/* COLUMN: HISTORICAL */}
          <div className="bg-[#08080A] p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800">
            <div className="flex items-center justify-between mb-16">
              <h3 className="text-zinc-600 font-mono text-[11px] uppercase tracking-[0.4em]">Baseline</h3>
              <span className="text-zinc-500 text-[10px] font-mono border border-zinc-900 px-4 py-1 rounded-full">{snapshotData.studyDate}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              {metricSchema.map((m) => (
                <div key={m.id} className="space-y-2">
                  <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-wider">{m.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-zinc-400 tracking-tight">
                    {format(m.id, snapshotData.metricsThen[m.id])}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN: ACTIVE FEED */}
          <div className="bg-[#0A0A0F] p-12 md:p-16 relative">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#7c3aed]/5 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="flex items-center justify-between mb-16 relative z-10">
              <h3 className="text-[#7c3aed] font-mono text-[11px] uppercase tracking-[0.4em] flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Active Feed
              </h3>
            </div>

            {loading ? (
              <div className="h-64 flex flex-col items-center justify-center space-y-4">
                <p className="text-zinc-800 font-mono text-[10px] tracking-[0.5em] uppercase animate-pulse">Syncing...</p>
              </div>
            ) : error ? (
              <div className="h-64 flex items-center justify-center">
                <p className="text-rose-500/50 font-mono text-[10px] uppercase border border-rose-950/30 px-6 py-3 rounded-full">Link_Offline</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-y-12 gap-x-8 relative z-10">
                {metricSchema.map((m) => (
                  <div key={m.id} className="space-y-2 group">
                    <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider transition-colors group-hover:text-purple-400">
                      {m.label}
                    </p>
                    <p className="text-2xl md:text-4xl font-bold text-white tracking-tight transition-all group-hover:translate-x-1">
                      {format(m.id, liveData?.[m.id])}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}