import skills from "@/constants/data/OtherSkills";

const OtherSkills = () => {
  return (
    <div>
      <div className="my-5 overflow-x-auto overflow-y-clip space-x-2 scroll-my-0 h-8 flex sm:ml-8 ml-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#1E1E1E] flex justify-center items-center px-4 py-2 rounded-lg"
          >
            <h1 className="text-sm text-white sm:text-lg">{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
