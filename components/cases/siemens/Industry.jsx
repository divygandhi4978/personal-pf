"use client";
import React from "react";

const DetailedSiemensIndustrialOverview = () => {
  return (
    <section className="bg-black text-white font-sans w-full selection:bg-[#562e66]/50 overflow-x-hidden">
      
      {/* --- HEADER: CINEMATIC FULL-WIDTH --- */}
      <div className="w-full border-b border-zinc-900 py-12 px-10 md:px-20 bg-gradient-to-r from-black via-[#0a0a0a] to-black">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#562e66] shadow-[0_0_15px_#562e66]" />
              <span className="text-[10px] font-mono tracking-[0.6em] text-zinc-500 uppercase">
                Industry Intelligence // Tier-1 Asset
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
              INDUSTRIAL <br /> <span className="text-zinc-600">INFRASTRUCTURE</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Sector Multiplier</p>
            <p className="text-3xl font-bold italic text-[#562e66]">2.4x GDP</p>
          </div>
        </div>
      </div>

      {/* --- SECTION 01: MACRO DYNAMICS (FULL WIDTH GRID) --- */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-900 border-b border-zinc-900">
        <div className="bg-black p-12 md:p-20 space-y-8">
          <h3 className="text-[10px] font-mono text-[#562e66] uppercase tracking-[0.4em]">01 / Energy Transmission</h3>
          <p className="text-3xl font-light leading-snug tracking-tight">
            Dominating the <span className="text-white font-medium">Extra High Voltage (EHV)</span> segment. 
            Siemens is the backbone of the Green Energy Corridor, enabling the integration of 500GW of renewable capacity by 2030.
          </p>
          <div className="pt-8 border-t border-zinc-900">
            <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Key Tech Asset</p>
            <p className="text-sm text-zinc-400 italic">1200kV Ultra High Voltage transformers and gas-insulated switchgear.</p>
          </div>
        </div>

        <div className="bg-[#050505] p-12 md:p-20 space-y-8 border-x border-zinc-900">
          <h3 className="text-[10px] font-mono text-[#562e66] uppercase tracking-[0.4em]">02 / Digital Industries</h3>
          <p className="text-3xl font-light leading-snug tracking-tight">
            The <span className="text-white font-medium">Xcelerator Ecosystem</span> is merging OT with IT. 
            Transforming Indian SMEs from manual assembly to AI-driven predictive maintenance and Digital Twins.
          </p>
          <div className="pt-8 border-t border-zinc-900">
            <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Software Moat</p>
            <p className="text-sm text-zinc-400 italic">Proprietary MindSphere IoT operating system with 90% customer retention.</p>
          </div>
        </div>

        <div className="bg-black p-12 md:p-20 space-y-8">
          <h3 className="text-[10px] font-mono text-[#562e66] uppercase tracking-[0.4em]">03 / Rail & Mobility</h3>
          <p className="text-3xl font-light leading-snug tracking-tight">
            Scaling <span className="text-white font-medium">High-Speed Rail</span> signaling. 
            The ₹26,000 Cr locomotive order provides a decadal revenue runway with massive recurring service revenue.
          </p>
          <div className="pt-8 border-t border-zinc-900">
            <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Backlog Visibility</p>
            <p className="text-sm text-zinc-400 italic">9000HP high-horsepower locomotives manufacturing in Dahod, Gujarat.</p>
          </div>
        </div>
      </div>

      {/* --- SECTION 02: THE "OPERATING LAYER" (HUD STRIP) --- */}
      <div className="w-full bg-black py-32 px-10 md:px-20 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#562e66]/5 blur-[120px] -z-10" />
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="lg:w-1/3">
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em] mb-6">Strategic Positioning</h4>
            <h3 className="text-5xl font-bold tracking-tighter italic">
              Horizontal <br /> Synergy.
            </h3>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <p className="text-sm font-mono text-[#562e66] uppercase tracking-widest">Cross-Selling Engine</p>
              <p className="text-zinc-400 font-light leading-relaxed">
                Siemens leverages its Smart Infrastructure presence to cross-sell Industrial Software. 
                A client using Siemens grid components is 3x more likely to adopt their Digital Twin solutions, 
                creating an unbreakable ecosystem of hardware-software dependency.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-mono text-[#562e66] uppercase tracking-widest">Asset Localization</p>
              <p className="text-zinc-400 font-light leading-relaxed">
                With 22 factories in India, Siemens has the highest degree of localization among MNCs. 
                This insulates margins against global supply chain volatility and provides a 15% cost advantage 
                under the 'Make in India' procurement norms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 03: TECHNICAL DATA HUD (NO PADDING - FULL EDGE) --- */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900">
        <div className="bg-black hover:bg-[#080808] transition-all p-12 group">
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] group-hover:text-[#562e66]">EBITDA Margin</p>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-5xl font-bold tracking-tighter">14.2</span>
            <span className="text-xl font-light text-zinc-500">%</span>
          </div>
          <p className="text-[9px] font-mono text-emerald-500 mt-2">▲ 120bps YoY</p>
        </div>

        <div className="bg-black hover:bg-[#080808] transition-all p-12 group">
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] group-hover:text-[#562e66]">Order Inflow</p>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-5xl font-bold tracking-tighter">₹45.6</span>
            <span className="text-xl font-light text-zinc-500">K Cr</span>
          </div>
          <p className="text-[9px] font-mono text-emerald-500 mt-2">▲ 18% Growth</p>
        </div>

        <div className="bg-black hover:bg-[#080808] transition-all p-12 group">
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] group-hover:text-[#562e66]">ROCE</p>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-5xl font-bold tracking-tighter">24.5</span>
            <span className="text-xl font-light text-zinc-500">%</span>
          </div>
          <p className="text-[9px] font-mono text-zinc-500 mt-2 uppercase italic tracking-tighter">Industry Leading</p>
        </div>

        <div className="bg-black hover:bg-[#080808] transition-all p-12 group">
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] group-hover:text-[#562e66]">Cash Reserves</p>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-5xl font-bold tracking-tighter">Zero</span>
            <span className="text-xl font-light text-zinc-500">Debt</span>
          </div>
          <p className="text-[9px] font-mono text-zinc-500 mt-2 uppercase italic tracking-tighter">Net Cash Pos.</p>
        </div>
      </div>

      {/* --- FOOTER STATEMENT --- */}
      <div className="w-full py-20 px-10 border-t border-zinc-900 bg-black text-center">
        <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.8em]">
          End of Industry Intelligence // Confidential Analysis
        </p>
      </div>

    </section>
  );
};

export default DetailedSiemensIndustrialOverview;