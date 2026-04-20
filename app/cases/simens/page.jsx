import Hero from "../../../components/cases/Hero";

import SnapshotPanel
  from "../../../components/cases/SnapShot_Panel";

import siemensStudyData
  from "../../../constants/data/cases/simens";



export default function StudyPage() {

  return (

    <main className="bg-black text-gray-200">

      {/* HERO */}

      <Hero
        heroData={siemensStudyData.hero}
      />



      {/* SNAPSHOT PANEL */}

      <SnapshotPanel
        snapshotData={
          siemensStudyData.studySnapshot
        }
      />



      {/* FUTURE CONTENT */}

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Sections will render here */}

      </div>

    </main>

  );

}