import React from "react";

import Projects from "./Projects";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div name="resume" className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-amber-200">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-amber-600 ">
            Resume
          </p>
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Resume;
