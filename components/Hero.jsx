import React from "react";

const PortfolioHero = () => {
  return (
    <div className="sm:min-h-screen text-white py-18 sm:py-24">
      <div className="flex flex-col items-center justify-center px-2 sm:px-8 py-13 text-center">
        <div className="sm:w-6/7 font-mono">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-3 text-start">
            Divy Gandhi
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#643d73] mb-12 text-start">
            Software Engineer{" "}
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-12 text-start">
            Developer based in Vadodara , India. Focused on writing clean code
            and improving problem-solving skills for scalable applications.
          </p>

          <div className="flex">
            <button className="bprpl text-white px-5 py-2 rounded-full text-lg justify-start">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
