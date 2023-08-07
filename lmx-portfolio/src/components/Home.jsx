import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Profile from "../assets/Profile.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-amber-200">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Lawthoua Matthew Xiong
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Coding is super fun!
        </p>
        <div>
          <img className="object-scale-down h-50 w-96 profile my-4" src={Profile} alt="Me!" />
        </div>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-300 hover:text-amber-900 hover:border-amber-600">
            <Link to="about" smooth={true} duration={500}>
              Explore More!{" "}
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
