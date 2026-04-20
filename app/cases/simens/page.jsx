// app/cases/siemens/page.jsx
import Hero from "../../../components/cases/Hero";
import SnapshotPanel from "../../../components/cases/SnapShot_Panel";
// import IndustryOverview from "../../../components/cases/IndustryOverview";
import siemensStudyData from "../../../constants/data/cases/simens";
import Industry from "../../../components/cases/siemens/Industry";

export default function StudyPage() {
    return (
        <main className="bg-black text-gray-200 min-h-screen selection:bg-[#562e66]">
            {/* 1. HERO */}
            <Hero heroData={siemensStudyData.hero} />

            {/* 2. SNAPSHOT PANEL */}
            <SnapshotPanel snapshotData={siemensStudyData.studySnapshot} />

            {/* 3. DYNAMIC CONTENT SECTION */}
            <div>
                <Industry />
            </div>

            {/* 4. FOOTER NOTE */}
            <div className="border-t border-zinc-900 py-20 text-center">
                <p className="text-[10px] font-mono text-zinc-700 tracking-[0.5em] uppercase">
                    End of Strategic Brief // Siemens India
                </p>
            </div>
        </main>
    );
}