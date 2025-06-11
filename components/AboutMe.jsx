import React from "react";

const EducationCard = () => {
  return (
    <div id="About" className="max-sm:pt-16">
      <div className="sm:flex justify-center items-center">
        <div>
          <div className="bg-[#191a1f] rounded-xl m-3 p-6 max-w-md mx-auto border border-gray-600 hover:border-[#562e66] transition-all duration-300">
            <div className="sm:flex items-start gap-4">
              <div className="sm:flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Education
                </h3>
                <div>
                  <p>Bachelor's in Computer Science</p>
                  <p>CPI : 9.02 </p>
                  <div className="flex justify-start space-x-3.5">
                    <p className=" mb-3">GEC Gandhinagar </p>
                    <p className=" font-medium">2023 - 2027</p>
                  </div>
                </div>
                <p className="text-gray-300 ">Higher Secondary </p>
                <p>Percentile : 95 </p>
                <div className="flex justify-start space-x-3.5">
                  <p className="text-gray-300 mb-3">LBSV Vadodara</p>
                  <p className="font-medium">2021 - 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#191a1f] rounded-xl p-6 max-w-md mx-auto border border-gray-600 hover:border-[#562e66] transition-all duration-300 m-3">
            <div className="sm:flex items-start gap-4">
              <div className="sm:flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Work Experience
                </h3>
                <div>
                  <p>Full Stack Developer</p>
                  <p>0 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:ml-2 space-y-3">
          <div className="bg-[#191a1f] rounded-xl p-6 max-w-md mx-auto border border-gray-600 hover:border-[#562e66] transition-all duration-300">
            <div className="sm:flex items-start gap-4">
              <div className="sm:flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Problem Solver
                </h3>
                <p>Turning complex challenges into elegant solutions</p>
              </div>
            </div>
          </div>
          <div className="bg-[#191a1f] rounded-xl p-6 max-w-md mx-auto border border-gray-600 hover:border-[#562e66] transition-all duration-300">
            <div className="sm:flex items-start gap-4">
              <div className="sm:flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Fast Learner
                </h3>
                <p>Adapting quickly to new technologies</p>
              </div>
            </div>
          </div>
          <div className="bg-[#191a1f] rounded-xl p-6 max-w-md mx-auto border border-gray-600 hover:border-[#562e66] transition-all duration-300">
            <div className="sm:flex items-start gap-4">
              <div className="sm:flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Detail Oriented{" "}
                </h3>
                <p>Ensuring quality in every line of code</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
