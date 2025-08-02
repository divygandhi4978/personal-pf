const TechStack = () => {
  const Frontend = ["React", "Next.js", "Tailwind", "Framer Motion"];
  const Backend = [
    "Node.js",
    "Express",
    "FastAPI",
    "Python",
    "DJango",
    "Java",
    "Flask",
  ];
  const Database = ["MongoDB", "MySQL"];
  const ML = ["NumPy", "Pandas", "Matplotlib", "Seaborn","Streamlit"];
  const DevOps = ["Git", "Docker"];

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-medium mt-20 mb-10 space-x-3">
          <span className="text-white">Tech Stack</span>{" "}
          <span>
            <span className="text-gray-400 text-4xl font-bold">{"{"}</span>
            <span className="text-gray-400 text-4xl font-bold">{"}"}</span>
          </span>
        </h1>
        <section>
          <h1 className="font-bold text-2xl my-5 text-[#956c8a]">Frontend</h1>
          <div className="space-x-3 space-y-3">
            {Frontend?.map((e) => {
              return (
                <span
                  className="relative inline-block px-4 py-1 rounded-md text-md font-mono tracking-wide text-gray-300 border border-gray-600 hover:border-[#562e66] hover:shadow-xl transition duration-300 cursor-pointer max-sm:space-y-3"
                  key={e}
                >
                  {e}
                </span>
              );
            })}
          </div>

          <h1 className="font-bold text-2xl my-5   text-[#956c8a]">Backend</h1>
          <div className="space-x-3 space-y-3">
            {Backend?.map((e) => {
              return (
                <span
                  className="relative inline-block px-4 py-1 rounded-md text-md font-mono tracking-wide text-gray-300 border border-gray-600 hover:border-[#562e66] hover:shadow-xl transition duration-300 cursor-pointer"
                  key={e}
                >
                  {e}
                </span>
              );
            })}
          </div>
          <h1 className="my-5 font-bold text-2xl  text-[#956c8a]">Database</h1>
          <div className="space-x-3 space-y-3">
            {Database?.map((e) => {
              return (
                <span
                  className="relative inline-block px-4 py-1 rounded-md text-md font-mono tracking-wide text-gray-300 border border-gray-600 hover:border-[#562e66] hover:shadow-xl transition duration-300 cursor-pointer"
                  key={e}
                >
                  {e}
                </span>
              );
            })}
          </div>
          <h1 className="my-5 font-bold text-2xl  text-[#956c8a]">
            DataScience and Machine Learning
          </h1>
          <div className="space-x-3 space-y-3">
            {ML?.map((e) => {
              return (
                <span
                  className="relative inline-block px-4 py-1 rounded-md text-md font-mono tracking-wide text-gray-300 border border-gray-600 hover:border-[#562e66] hover:shadow-xl transition duration-300 cursor-pointer"
                  key={e}
                >
                  {e}
                </span>
              );
            })}
          </div>
          <h1 className="my-5 font-bold text-2xl  text-[#956c8a]">
            DevOps & Tools
          </h1>
          <div className="space-x-3 space-y-3">
            {DevOps?.map((e) => {
              return (
                <span
                  className="relative inline-block px-4 py-1 rounded-md text-md font-mono tracking-wide text-gray-300 border border-gray-600 hover:border-[#562e66] hover:shadow-xl transition duration-300 cursor-pointer"
                  key={e}
                >
                  {e}
                </span>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechStack;
