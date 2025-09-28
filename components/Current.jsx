import React from "react";

const projects = [
  {
    title: "PolicyLens",
    description:
      "A smart compliance dashboard that monitors RBI, SEBI, and IRDAI circulars in real-time. With AI-powered summaries, instant alerts, and insights — helps your team stay compliant while saving hours of manual effort.",
    preview: "https://policy-lens-plum.vercel.app/",
  },
  {
    title: "E-Cell GECG Events Portal",
    description:
      "A work-in-progress platform to showcase all E-Cell events, workshops, and bootcamps. Helps students explore upcoming events, register easily, and stay updated with past highlights.",
    preview: "#", 
  },
];

const SingleProject = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-medium mt-20 mb-10">Working On</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#1E1E1E] rounded-2xl my-10 p-5 overflow-hidden hover:bg-[#212121] transition-all ease-in duration-100"
        >
          <div className="sm:flex justify-around">
            <div className="sm:w-full h-fit pl-3 pt-7">
              <h2 className="font-bold text-3xl text-[#9C6A8C]">{project.title}</h2>
              <p className="my-5 text-lg text-blue-50">{project.description}</p>
              <div className="flex justify-items-start gap-7 text-xl">
                <a
                  className="hover:underline hover:text-gray-100 transition-all duration-100 ease-in flex items-center space-x-2"
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Waitlist
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleProject;
