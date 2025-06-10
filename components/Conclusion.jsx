import Image from "next/image";
import profile from "../constants/images/profile1.jpg";

const Conclusion = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-center text-4xl font-medium mt-20 mb-10">About Me</h1>

      <div className="sm:flex justify-between items-center">
        <div className="text-xl sm:max-w-3/5">
          Hi, I’m <span className="text-[#2c75db] font-bold"> Divy Gandhi</span>
          , a passionate Web Developer with a keen eye for creating seamless and
          engaging digital experiences. With a strong foundation in front-end
          and back-end web technologies, I thrive at the intersection of design
          and functionality.  From responsive layouts to complex
          interactive features, my projects emphasize performance, security, and
          a user-first approach.
        </div>
        <div className="flex justify-center max-sm:py-10">
          <Image
            className="rounded-md  transform sm:rotate-6 w-[250px]"
            src={profile}
            alt="ProfileImage"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
