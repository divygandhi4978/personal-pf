import FrontendSkills from "./FrontEndSkills";
import BackendSkills from "./BackendSkills";
import DevopsAndTools from "./DevopsAndTools";
import OtherSkills from "./OtherSkills";

const TechStack = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-medium mt-20 mb-10">
          Technical Skills
        </h1>
        <section>
          <h1 className="font-bold text-2xl my-5 text-[#956c8a]">Frontend</h1>
          <FrontendSkills />
          <h1 className="font-bold text-2xl my-5   text-[#956c8a]">Backend</h1>
          <BackendSkills />
          <h1 className="my-5 font-bold text-2xl  text-[#956c8a]">DevOps & Tools</h1>
          <DevopsAndTools />
          <h1 className="my-5 font-bold text-2xl  text-[#956c8a]">Others</h1>
          <OtherSkills/>
        </section>
      </div>
    </div>
  );
};

export default TechStack;
