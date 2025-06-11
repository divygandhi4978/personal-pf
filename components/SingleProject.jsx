import Image from "next/image";
import React from "react";

const SingleProject = ({ head, data, source, preview, img,skills }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl sticky top-20 h-[450px] sm:h-[400px] my-10 p-5 overflow-hidden">
      <div className="sm:flex justify-around">
        <div className="sm:w-1/3 h-fit pl-3 pt-7">
          <h1 className="font-bold text-3xl text-[#9C6A8C]">{head}</h1>
          <p className="my-5 text-lg text-blue-50">{data}</p>

          <div className="flex justify-items-start gap-7 text-xl">
            <a
              className="hover:underline hover:text-gray-100 transition-all duration-100 ease-in flex items-center space-x-2"
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </a>
            <a
              className="hover:underline hover:text-gray-100 transition-all duration-100 ease-in flex items-center space-x-2 "
              href={preview}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
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
          <div className="my-5 overflow-auto space-x-2 scroll-my-0 h-8">
            {skills?.map((item)=>{
              return <h1 className="bg-[#040404] inline px-2 text-center rounded-sm py-1" key={item}>{item}</h1>
            })}
          </div>
        </div>
        <div className="sm:w-2/3 relative">
          <div className="absolute top-[3px] -right-[60px] sm:-right-[50px] object-cover rounded-lg">
            <Image
              className="rounded-md h-[300px] sm:h-[350px] "
              src={img}
              alt="SecureHold preview"
              // width={600}
              // height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
