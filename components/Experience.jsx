import React from "react";

const experiences = [
  {
    title: "Technical Lead",
    org: "Entrepreneurship Cell - GECG (E-Cell)",
    period: "July 2025 — Present",
    website: "https://ecell.gecg28.ac.in/index.html", // add organization website
    description: [
      "Led a technical team of 8 members to design and manage digital platforms, increasing event participation by 40%.",
      "Developed modern registration systems and interactive dashboards, reducing manual coordination time by 50% and improving attendee engagement.",
    ],
    logo: "/images/ecell.jpg",
  },
  // Add other experiences similarly with website links
];

const ExperienceSection = () => {
  return (
    <section className="text-white py-16 sm:px-9 lg:px-16 ">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center">
        Work Experience
      </h2>

      <div className="max-w-3xl mx-auto space-y-10 ">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-3">
            {/* Clickable Logo and Organization Name */}
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-center gap-2 hover:opacity-80 transition-opacity duration-150"
            >
              <img
                src={exp.logo}
                alt={`${exp.org} logo`}
                className="w-14 h-14 sm:w-12 sm:h-12 object-contain"
              />
              <h3 className="text-2xl sm:text-xl font-bold text-white">{exp.org}</h3>
            </a>

            {/* Title */}
            <p className="text-xl sm:text-base font-semibold text-[#9C6A8C]">{exp.title}</p>

            {/* Period */}
            <p className="text-xl sm:text-sm text-white/60">{exp.period}</p>

            {/* Description */}
            <ul className="list-disc list-inside space-y-1 text-base sm:text-sm text-white/80">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
