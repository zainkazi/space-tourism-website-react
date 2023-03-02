import React from "react";
import homeBgMobile from "../assets/home/background-home-mobile.jpg";

const Home = () => {
  return (
    <div className="lg:min-h-[80vh] text-center lg:text-left flex flex-col justify-between items-center lg:flex-row lg:justify-between lg:space-x-52 lg:px-36">
      {/* Intro */}
      <img src={homeBgMobile} />
      <div className="mt-10 lg:mt-0 mb-20 md:mb-44 lg:mb-0 border-2 border-black lg:max-w-min">
        <h2 className="text-2xl lg:text-xl px-8 sm:px-16 md:px-20 lg:px-0">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-10xl px-8 sm:px-16 md:px-20 lg:px-0 mb-6">SPACE</h1>
        <p className="text-2xl px-8 sm:px-16 lg:text-lg md:px-32 lg:px-0">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we will give you a truly out of this world
          experience!
        </p>
      </div>

      {/* Explore Button */}
      <div className="text-4xl border-2 border-black rounded-full px-[50px] py-[90px] lg:w-60 lg:px-[60px] lg:py-[100px] align-middle">
        <div>Explore</div>
      </div>
    </div>
  );
};

export default Home;
