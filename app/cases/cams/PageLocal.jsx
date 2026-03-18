"use client";
import React from "react";
import ProfileNav from "@/components/ProfileNav";

// --- REUSABLE ATOMIC COMPONENTS ---

const Section = ({ title, subtitle, children, index }) => (
    <section className="space-y-10 pt-16 border-t border-white/5 first:border-t-0 first:pt-0">
        <div className="space-y-3">
            <div className="flex items-center gap-4">
                <span className="font-mono text-[#562e66] font-bold tracking-widest text-sm">SECTION_{index}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#562e66] to-transparent opacity-30" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic leading-none">
                {title}
            </h2>
            {subtitle && (
                <p className="text-[#9b51b3] text-xs font-bold uppercase tracking-[0.4em] max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
        <div className="text-white/70 text-lg leading-relaxed space-y-8">
            {children}
        </div>
    </section>
);

const DataTable = ({ headers, rows, caption }) => (
    <div className="my-8 space-y-3">
        <div className="overflow-x-auto border border-white/10 rounded-sm bg-white/[0.01]">
            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                <thead className="bg-[#562e66]/10 text-[#9b51b3] uppercase tracking-[0.2em] text-[10px] font-black">
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i} className="px-6 py-5 border-b border-white/10">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {rows.map((row, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                            {row.map((cell, j) => (
                                <td key={j} className="px-6 py-5 text-white/80 font-medium">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {caption && <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] text-right">{caption}</p>}
    </div>
);

const InvestmentInsight = ({ children }) => (
    <div className="relative p-8 bg-[#562e66]/5 border-l-4 border-[#562e66] rounded-r-xl my-6">
        <span className="absolute -top-3 left-4 bg-[#562e66] text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">
            Investment Insight
        </span>
        <p className="text-white font-medium italic text-lg">{children}</p>
    </div>
);

const VisualPlaceholder = ({ label, description, imageTag }) => (
    <div className="group space-y-4 my-10">
        <div className="w-full aspect-video bg-black border border-white/10 rounded-sm flex flex-col items-center justify-center p-12 text-center transition-all group-hover:border-[#562e66]/40">
            <div className="text-[#562e66] font-mono text-[10px] mb-4 tracking-[0.5em] uppercase font-bold">
                [ Institutional Chart Placeholder ]
            </div>
            <h5 className="text-white text-2xl font-black uppercase tracking-tighter mb-4">{label}</h5>
            <p className="text-white/40 text-sm max-w-lg font-light leading-relaxed">{description}</p>
            {imageTag && <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">{imageTag}</div>}
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---

export default function CamsInstitutionalResearch() {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <main className="bg-black text-white py-2 px-6 md:px-12 font-sans selection:bg-[#562e66] selection:text-white">
            <div className="max-w-6xl mx-auto space-y-40">
                <header className="min-h-[80vh] md:min-h-screen flex flex-col justify-center pt-24 md:pt-0 border-b border-white/5 relative overflow-hidden">
                    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end gap-10 md:gap-20 animate-in fade-in slide-in-from-left-8 duration-1000">

                        {/* RIGHT COLUMN: The Core Content */}
                        <div className="space-y-10 md:space-y-12 flex-1 px-2 md:px-0">

                            {/* Strategy Tag for Phone - Increased size and weight for mobile */}
                            <div className="md:hidden flex items-center gap-4">
                                <div className="h-[2px] w-8 bg-[#9b51b3]" />
                                <span className="text-[#9b51b3] text-[12px] tracking-[0.3em] uppercase font-black">
                                    Equity // Asset Strategy
                                </span>
                            </div>

                            {/* Main Title Block */}
                            <div className="relative group">
                                {/* Mobile: text-7xl ensures CAMS is massive. PC: clamp handles the rest */}
                                <h1 className="text-7xl md:text-[clamp(5rem,20vw,13rem)] font-black tracking-[-0.05em] leading-[0.8] uppercase text-white transition-all">
                                    CAMS
                                </h1>

                                <div className="mt-4 md:mt-6 space-y-1 md:space-y-0">
                                    {/* Increased mobile size to text-4xl and opacity for better legibility */}
                                    <span className="text-white/40 italic font-medium tracking-tight text-4xl md:text-8xl block uppercase leading-[1] text-balance">
                                        The Paradox
                                    </span>
                                    <span className="text-[#9b51b3] italic font-black tracking-tight text-4xl md:text-8xl block uppercase leading-[1]">
                                        of Growth
                                    </span>
                                </div>
                            </div>

                            {/* Summary / Lead Paragraph - Increased mobile text size to text-xl */}
                            <div className="max-w-xl md:max-w-2xl group cursor-crosshair">
                                <p className="text-xl md:text-3xl text-white/60 font-light leading-snug text-balance border-l-4 border-[#562e66] pl-6 py-2 transition-colors group-hover:text-white/90">
                                    Why a 70% market leader is forced to diversify into lower-margin businesses despite record-breaking industry expansion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator - Adjusted for better mobile visibility */}
                    <div className="absolute bottom-10 left-8 md:left-12 flex items-center gap-4">
                        <div className="h-px w-10 bg-[#562e66] animate-pulse" />
                        <span className="text-[#562e66] font-mono text-[11px] tracking-[0.4em] uppercase font-bold">
                            Start_Analysis
                        </span>
                    </div>
                </header>

                {/* 01. INTRODUCTION */}
                <Section
                    index="01"
                    title="The Paradox"
                    subtitle="What This Case Is Actually Testing"
                >
                    <p>
                        CAMS is not just another fintech or outsourcing business. It is the record-keeper and transaction processor for India’s mutual fund industry — effectively sitting at the intersection of investor activity, AMC operations, and regulatory infrastructure.
                        Every time an investor starts a SIP, redeems units, or updates KYC, it flows through CAMS.
                    </p>
                    <div className="max-w-3xl mx-auto my-10 border border-white/10 rounded-sm bg-black overflow-hidden shadow-2xl">
                        <img
                            src="/cams/img4.png"
                            alt="CAMS Ecosystem Visualization"
                            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <div className="max-w-3xl mx-auto my-10 border border-white/10 rounded-sm bg-black overflow-hidden shadow-2xl">
                        <img
                            src="/cams/img3.jpg"
                            alt="CAMS Ecosystem Visualization"
                            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold uppercase tracking-widest text-xs opacity-50">The Obvious Narrative</h4>
                            <ul className="space-y-3 text-base text-white/60">
                                <li>• AUM compounding at 15–18%</li>
                                <li>• SIP as a monthly habit (~₹30K Cr/month)</li>
                                <li>• 20% AUM/GDP → Huge runway vs 63% Global</li>
                                <li>• Dominant ~70% market share</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-sm">
                            <p className="text-white font-medium">Naive Conclusion:</p>
                            <p className="text-white/50 text-base italic mt-2">“This is a compounding machine with massive operating leverage.”</p>
                            <p className="text-white/50 text-base italic mt-2">“AUM compounds. CAMS monetization does not compound at the same rate.”</p>
                        </div>
                    </div>
                    <InvestmentInsight>
                        This case tests whether you can identify when industry growth does not equal business quality improvement.
                    </InvestmentInsight>
                </Section>

                {/* 02. EXECUTIVE SUMMARY */}
                <Section
                    index="02"
                    title="Executive Summary"
                    subtitle="Structural Adaptation vs Growth Scaling"
                >
                    <p>CAMS is not scaling like a SaaS or platform business. It is scaling like regulated infrastructure. It is not diversifying to accelerate growth, but to protect itself from structural erosion.</p>

                    <div className="max-w-3xl mx-auto my-10 border border-white/10 rounded-sm bg-black overflow-hidden shadow-2xl">
                        <img src="/cams/img1.png" alt="Executive Summary Visual"
                            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>

                    <DataTable
                        headers={["Metric", "Current Value / Target"]}
                        rows={[
                            ["MF Revenue Contribution", "~85–87%"],
                            ["Non-MF Revenue Contribution", "~13–15%"],
                            ["EBITDA Margin", "~44–46%"],
                            ["Market Share", "~70%"]
                        ]}
                    />
                    <InvestmentInsight>
                        You’re not evaluating how fast CAMS can grow; you’re evaluating how much of that growth converts into high-quality earnings.
                    </InvestmentInsight>
                </Section>

                {/* 03. INDUSTRY BACKBONE */}
                <Section
                    index="03"
                    title="Industry Backbone"
                    subtitle="Structural Drivers vs. Misleading Tailwinds"
                >
                    <p>The mutual fund industry is genuinely strong, driven by a young population entering the earning phase, the financialization of savings, and digital distribution via platforms like Zerodha and Groww.</p>

                    <div className="max-w-3xl mx-auto my-10 border border-white/10 rounded-sm bg-black overflow-hidden shadow-2xl">
                        <img src="/cams/img2.avif" alt="Executive Summary Visual"
                            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>

                    <DataTable
                        headers={["Metric", "Current Value", "Growth Status"]}
                        rows={[
                            ["Total AUM", "₹65T → ₹75T+", "~23% YoY Growth"],
                            ["SIP Flow", "₹29,000 Cr / Month", "Habitualized Retail Saving"],
                            ["Investor Base", "5.3+ Crore", "Steady Expansion"]
                        ]}
                    />
                    <InvestmentInsight>
                        The Critical Misread: Most investors assume CAMS is a direct beneficiary of AUM growth. CAMS benefits from activity volume, not from pricing expansion.
                    </InvestmentInsight>
                </Section>

                {/* 04. BUSINESS MODEL */}
                <Section
                    index="04"
                    title="Revenue Engine"
                    subtitle="Volume Explosion vs. Pricing Power"
                >
                    <div className="bg-[#562e66]/10 p-12 text-center rounded-sm border border-[#562e66]/20">
                        <span className="text-[10px] tracking-[0.5em] text-[#9b51b3] uppercase font-black">Revenue Equation</span>
                        <p className="text-3xl md:text-6xl font-black text-white mt-4 tracking-tighter">REVENUE = AUM × YIELD (bps)</p>
                    </div>

                    <DataTable
                        headers={["Metric", "Growth Magnitude", "Impact"]}
                        rows={[
                            ["AUM Expansion", "2.5x – 3x", "High Nominal Scale"],
                            ["Transaction Volume", "~9x", "High Operational Load"],
                            ["SIP Accounts", "~3x", "Habit Formation"]
                        ]}
                    />
                    <InvestmentInsight>
                        Operating leverage is finite. CAMS has already harvested most of it. Once technology and compliance infra costs are covered, only pricing can drive upside—and pricing is falling.
                    </InvestmentInsight>
                </Section>

                {/* 05. THE SUCCESS TRAP */}
                <Section
                    index="05"
                    title="The Success Trap"
                    subtitle="Regressive Pricing Mechanism"
                >
                    <p>This is not a bug; this is the business model. As CAMS grows, it handles larger AMCs who negotiate lower fees. The tiered pricing mechanism ensures that scale actually causes pricing decline.</p>

                    {/* <div className="py-10"> */}
                    {/* <VisualBox
                            label="Yield Compression"
                            description="Visual tracking of EBITDA from current 45% toward the 37% – 40% band as revenue mix changes."
                        /> */}
                    {/* </div> */}

                    <DataTable
                        headers={["Year / Slab", "AUM State", "Yield (bps)", "Observation"]}
                        rows={[
                            ["FY20", "₹27T", "~0.025", "High Margin Baseline"],
                            ["FY25", "₹75T", "~0.0234", "Structural Compression"],
                            ["FY30E", "₹150T", "~0.020 – 0.022", "Projected Floor"],
                            ["Slab: ₹10K Cr", "Small AMC", "~0.030", "Premium Yield"],
                            ["Slab: ₹1L Cr+", "Giant AMC", "~0.023", "Compressed Yield"]
                        ]}
                    />
                    <InvestmentInsight>
                        This structural truth is not cyclical or temporary. It is built into the business model: the larger CAMS becomes, the less it earns per unit.
                    </InvestmentInsight>
                </Section>

                {/* 06. REGULATORY WALL */}
                <Section
                    index="06"
                    title="Regulatory Wall"
                    subtitle="The Invisible Fee Ceiling"
                >
                    <p>CAMS has no independent pricing power. It inherits pressure from a regulatory chain where SEBI controls the AMC, and the AMC squeezes the vendor.</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <HighlightBox title="TER Caps & Passive Shift">
                            Limits on AMC earnings force them to cut vendor costs. Simultaneously, the shift toward lower-fee passive products (ETF/Index) further erodes the CAMS yield.
                        </HighlightBox>
                        <HighlightBox title="Performance-Based TER">
                            If fees become linked to fund performance, CAMS revenue becomes volatile. Earnings stability—a key part of the current multiple—would be compromised.
                        </HighlightBox>
                    </div>
                </Section>

                {/* 08. DIVERSIFICATION - SUBSIDIARIES */}
                <Section
                    index="07"
                    title="Segment Deep Dive"
                    subtitle="The Non-MF Expansion Strategy"
                >
                    <p>CAMS is moving from monopoly-like economics in RTA to competitive economics across seven major segments. Diversification is for survival, not choice.</p>

                    <div className="space-y-6">
                        <SubsidiaryCard title="01. Core RTA (Mutual Fund)" detail="High margin (~45%), Duopoly, Stable but slowing yield.">
                            The primary cash generator undergoing structural yield compression.
                        </SubsidiaryCard>

                        <SubsidiaryCard title="02. CAMSPay (Payments Infra)" detail="₹2–₹10 per transaction. Mandate + SIP processing.">
                            High volume, moderate margin. Competes with Razorpay and NPCI infra. Crucial for STP (Straight-Through Processing).
                        </SubsidiaryCard>

                        <SubsidiaryCard title="03. Account Aggregator (CAMSfinserv)" detail="Financial data-sharing infra. Early stage.">
                            Pure optionality; monetization remains unclear in the short term.
                        </SubsidiaryCard>

                        <SubsidiaryCard title="04. AIF / PMS Services" detail="Closest to MF economics. High yield potential.">
                            High-value segment but currently operates at a smaller scale compared to core MF.
                        </SubsidiaryCard>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 border border-white/10 rounded-sm bg-white/[0.01]">
                                <h5 className="text-[#9b51b3] text-[10px] font-black uppercase mb-2">05. KRA (KYC)</h5>
                                <p className="text-sm opacity-60 font-light">Commodity business, low margin, purely regulatory infra.</p>
                            </div>
                            <div className="p-6 border border-white/10 rounded-sm bg-white/[0.01]">
                                <h5 className="text-[#9b51b3] text-[10px] font-black uppercase mb-2">06. Insurance Repo</h5>
                                <p className="text-sm opacity-60 font-light">Slow industry adoption, limited monetization per unit.</p>
                            </div>
                            <div className="p-6 border border-white/10 rounded-sm bg-white/[0.01]">
                                <h5 className="text-[#9b51b3] text-[10px] font-black uppercase mb-2">07. Analytics (Think360)</h5>
                                <p className="text-sm opacity-60 font-light">Data services for lenders. Early monetization stage.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 09. MARGIN MATH */}
                <Section
                    index="08"
                    title="Margin Trajectory"
                    subtitle="Mathematical Constraints of Inevitable Compression"
                >
                    <p>Even with best-in-class execution, the mix shift toward Non-MF segments drags down the blended margin. The math of 75/25 diversification leads to a structural reset.</p>
                    <div className="grid md:grid-cols-2 gap-12 items-center py-12">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-white/40 font-mono text-sm uppercase tracking-widest underline decoration-[#562e66]">Blended Math (FY29 Target)</p>
                                <div className="text-3xl font-black italic space-y-1">
                                    <p>MF: 75% Mix × 45% Margin = 33.75</p>
                                    <p>NON-MF: 25% Mix × 15% Margin = 3.75</p>
                                </div>
                            </div>
                            <p className="text-6xl font-black tracking-tighter text-white">TOTAL ≈ 37.5%</p>
                        </div>
                    </div>
                </Section>

                {/* 10. SCENARIOS & RISKS */}
                <Section index="09" title="Risk Framework" subtitle="Scenario & Impact Analysis">
                    <DataTable
                        headers={["Scenario", "Margin Range", "Strategic Reality"]}
                        rows={[
                            ["Bull Case", "42 – 44%", "Best execution in Non-MF + AIF scale"],
                            ["Base Case", "40 – 42%", "Most likely trajectory; controlled dilution"],
                            ["Bear Case", "35 – 38%", "Aggressive yield cuts + passive dominance"]
                        ]}
                    />
                    <DataTable
                        headers={["Risk Factor", "Nature", "Severity"]}
                        rows={[
                            ["TER Cuts", "Structural", "Critical"],
                            ["Passive Shift", "Structural", "High"],
                            ["UPI / BBPS", "Disruption", "Moderate"],
                            ["AMC Consolidation", "Pricing", "High"],
                            ["Regulation", "External", "Ongoing"]
                        ]}
                    />
                    <InvestmentInsight>
                        Risks are not cyclical — they are structural. Stability improves with diversification, but returns compress.
                    </InvestmentInsight>
                </Section>

                {/* 12. VALUATION */}
                <Section index="10" title="Valuation" subtitle="Institutional Pricing Framework">
                    <div className="grid md:grid-cols-3 gap-8">
                        <HighlightBox title="Growth CAGR">
                            <p className="text-3xl font-black">12 – 16%</p>
                            <p className="text-xs opacity-50 mt-2">Sustainable realistic target; ignore hyper-growth noise.</p>
                        </HighlightBox>
                        <HighlightBox title="PE Multiple">
                            <p className="text-3xl font-black">~35x</p>
                            <p className="text-xs opacity-50 mt-2">Justified only by stability; fair value found in 20% dips.</p>
                        </HighlightBox>
                        <HighlightBox title="Strategy">
                            <p className="text-3xl font-black text-[#9b51b3]">CORRECTION</p>
                            <p className="text-xs opacity-50 mt-2">Buy on structural pullbacks, not on momentum breakouts.</p>
                        </HighlightBox>
                    </div>
                    <p className="text-xl font-light italic text-white/50 pt-6">Returns = Earnings Growth + Disciplined Entry (NOT Multiple Expansion).</p>
                </Section>

                {/* 13. CONCLUSION */}
                <Section index="11" title="The Final Verdict" subtitle="The Platform Trade-Off">
                    <div className="space-y-12">
                        <p className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
                            CAMS CANNOT DIVERSIFY WITHOUT MARGIN DILUTION. <br />
                            <span className="text-white/10 uppercase tracking-widest text-2xl md:text-5xl block mt-4">From Monopoly Margins to Platform Economics.</span>
                        </p>

                        <p className="text-xl text-white/60 max-w-4xl">
                            CAMS is not weakening; it is transitioning. The business is managing a structural shift: higher stability at the cost of lower economic quality. It is transitioning from a high-margin monopoly into a diversified infrastructure platform.
                        </p>

                        <div className="flex flex-col md:flex-row justify-between items-end gap-12 pt-12 border-t border-white/10">
                            <div className="space-y-4 w-full">
                                <span className="text-[10px] text-white/30 uppercase tracking-[0.4em]">Validation Resources</span>
                                <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-[#9b51b3]">

                                    <a
                                        href="https://www.camsonline.com/Annual_Report/FY2024-2025/pdf/corporate-overview.pdf"
                                        target="_blank"
                                        className="hover:text-white transition"
                                    >
                                        CAMS Annual Report
                                    </a>

                                    <a
                                        href="https://digital.camsonline.com/cams/documents/analyst_meet/PPT.pdf"
                                        target="_blank"
                                        className="hover:text-white transition"
                                    >
                                        Investor Presentation
                                    </a>

                                    <a
                                        href="https://www.amfiindia.com/Themes/Theme1/downloads/AMFI_AnnualMFReport2025.pdf"
                                        target="_blank"
                                        className="hover:text-white transition"
                                    >
                                        AMFI 2025 Report
                                    </a>

                                    <a
                                        href="https://www.sebi.gov.in/sebi_data/attachdocs/1418363406885.pdf"
                                        target="_blank"
                                        className="hover:text-white transition"
                                    >
                                        SEBI Circulars
                                    </a>

                                    <a
                                        href="https://sbsmail.icicisecurities.com/CRMPortal/ResearchDownload.aspx?Cid=ubrMarXuxi0%3D&Pid=4nwUheWkeRU%3D&fName=nRlvYkdVIu3hzC0cnuK8sLU83aL7ENrYgpRGzWdL%2Bhw%3D&typ=APSSeVhmQ%2B8%3D"
                                        target="_blank"
                                        className="hover:text-white transition"
                                    >
                                        ICICI Securities Report
                                    </a>

                                    <a
                                        href="https://investmentguruindia.com/editorial/uploads/news-pdf/b55d3a39_CAMS%20IC%20Report.pdf"
                                        target="_blank"
                                        className="hover:text-white transition"
                                    >
                                        Industry / KRA Report
                                    </a>

                                </div>
                            </div>
                            <div className="text-right italic text-white/40 text-sm whitespace-nowrap">
                                Lower margins in exchange for long-term survival.
                            </div>
                        </div>
                    </div>
                </Section>

                <footer className="text-center pb-24 text-white/10 text-[10px] font-mono tracking-[1em] uppercase">
                    Institutional Report // CAMS // 2026
                </footer>
            </div>
            <ProfileNav />
        </main>
    );
}

// --- HELPER SUB-COMPONENTS ---

const SubsidiaryCard = ({ title, detail, children }) => (
    <div className="p-8 border border-white/10 rounded-sm hover:border-[#562e66]/40 transition-all bg-white/[0.01]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h4 className="text-white font-black text-xl tracking-tighter uppercase">{title}</h4>
            <span className="text-[#9b51b3] font-mono text-xs font-bold tracking-widest uppercase">{detail}</span>
        </div>
        <p className="text-white/50 text-base">{children}</p>
    </div>
);

const HighlightBox = ({ title, children }) => (
    <div className="p-10 border border-white/5 bg-white/[0.01] rounded-sm flex flex-col justify-between h-full">
        <h5 className="text-[#562e66] font-black text-[10px] uppercase tracking-[0.4em] mb-6">{title}</h5>
        <div className="text-white/80 text-lg leading-relaxed">{children}</div>
    </div>
);

const VisualBox = ({ label, description }) => (
    <div className="w-full aspect-square md:aspect-video bg-black border border-white/10 rounded-sm flex flex-col items-center justify-center p-8 text-center">
        <div className="text-[#562e66] font-mono text-[10px] mb-4 tracking-widest uppercase">[ Financial Graph ]</div>
        <h5 className="text-white text-lg font-bold uppercase tracking-widest mb-2">{label}</h5>
        <p className="text-white/40 text-xs max-w-xs">{description}</p>
    </div>
);