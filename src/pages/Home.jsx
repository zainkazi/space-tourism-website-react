import React from "react";
import homeBgMobile from "../assets/home/background-home-mobile.jpg";
import homeBgTablet from "../assets/home/background-home-tablet.jpg";
import homeBgDesktop from "../assets/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <div>
      <img
        className="block md:hidden absolute top-0 left-0 z-[-1] w-full"
        src={homeBgMobile}
      />
      <img
        className="hidden md:block lg:hidden absolute top-0 left-0 z-[-1] w-full"
        src={homeBgTablet}
      />
      <img
        className="hidden lg:block absolute top-0 left-0 z-[-1] w-full"
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
        <div className="font-bellefair bg-white text-3xl lg:text-4xl text-[#0B0D17] rounded-full px-[50px] py-[100px] lg:w-60 lg:pr-[200px] lg:py-[105px] align-middle">
          <div>EXPLORE</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
