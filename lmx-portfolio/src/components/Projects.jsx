import React from "react";
import HikeMe from "../assets/projects/HikeMEDefault.png";
import FlowerTetris from "../assets/projects/flowertetris.png";
const Projects = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-amber-600 text-amber-200">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 pt-5">
          <div
            style={{ backgroundImage: `url(${HikeMe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HikeMe
              </span>
              <div className="pt-8 text-center">
                <a href="https://lawthouamxiong.github.io/HikeME/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/LawthouaMXiong/HikeME">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${FlowerTetris})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Flower Tetris
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/adamrobinson55/Tetris-App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
