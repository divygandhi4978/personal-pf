import skills from "../constants/data/backend";

const Backend = () => {
  return (
    <div className="p-2 sm:p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="bg-[#191a1f] hover:bg-[#1f2025] rounded-lg p-6 transition-all duration-300 hover:bg-gray-750 hover:scale-105 cursor-pointer">
              <div className="flex flex-col items-center space-y-3">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  {skill.icon}
                </div>
                <span className="text-gray-200 font-normal text-sm">
                  {skill.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
