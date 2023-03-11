import React from "react";
import homeBgMobile from "../assets/home/background-home-mobile.jpg";
import homeBgTablet from "../assets/home/background-home-tablet.jpg";
import homeBgDesktop from "../assets/home/background-home-desktop.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img
        className="block md:hidden absolute top-0 left-0 z-[-1] w-full  min-h-[100vh]"
        src={homeBgMobile}
      />
      <img
        className="hidden md:block lg:hidden absolute top-0 left-0 z-[-1] w-full  min-h-[100vh]"
        src={homeBgTablet}
      />
      <img
        className="hidden lg:block absolute top-0 left-0 z-[-1] w-full min-h-[100vh]"
        src={homeBgDesktop}
      />

      <div className="lg:min-h-[100vh] text-center lg:text-left flex flex-col justify-between items-center lg:flex-row lg:justify-between lg:space-x-52 lg:px-36">
        {/* Intro */}

        <div className="text-[#D0D6F9] mt-10 lg:mt-0 mb-20 md:mb-44 lg:mb-0 lg:max-w-min">
          <h2 className="font-barlow text-xl lg:text-[28px] tracking-[4px] px-8 sm:px-16 md:px-20 lg:px-0">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="font-bellefair text-10xl lg:text-[150px] text-white px-8 sm:px-16 md:px-20 lg:px-0">
            SPACE
          </h1>
          <p className="text-2xl px-8 sm:px-16 lg:text-lg md:px-32 lg:px-0">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we will give you a truly out of
            this world experience!
          </p>
        </div>

        {/* Explore Button */}

        <NavLink to="destination">
          <div className="font-bellefair bg-white select-none text-3xl opacity-100 lg:text-4xl text-[#0B0D17] rounded-full px-[50px] py-[100px] lg:w-60 lg:pr-[200px] lg:py-[105px] align-middle lg:transition-all lg:duration-300 lg:hover:shadow-[0px_0px_0px_80px_rgba(72,72,72,0.5)]">
            {/* <div className="hidden lg:block absolute bg-red-600 z-[-1] w-96 h-96 -top-[28%] -left-[25%] rounded-full transition-all duration-300"></div> */}
            <div>EXPLORE</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
