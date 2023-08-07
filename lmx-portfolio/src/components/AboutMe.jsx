import React from "react";

const AboutMe = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-amber-600 text-amber-200">
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
                <p>Hello, I'm Lawthoua, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p>I really enjoy coding!</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutMe;
