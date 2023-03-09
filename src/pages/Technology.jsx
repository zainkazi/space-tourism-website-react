import React from "react";
import TechnologyImage from "../components/Technology/TechnologyImage";

import TechnologyNavbar from "../components/Technology/TechnologyNavbar";
import TechnologyInfo from "../components/Technology/TechnologyInfo";

import technologyBgMobile from "../assets/technology/background-technology-mobile.jpg";
import technologyBgTablet from "../assets/technology/background-technology-tablet.jpg";
import technologyBgDesktop from "../assets/technology/background-technology-desktop.jpg";

const Technology = ({ mobileImage, desktopImage, name, desc }) => {
  return (
    <div>
      <img
        className="block md:hidden absolute top-0 left-0 z-[-1] w-full"
        src={technologyBgMobile}
      />
      <img
        className="hidden md:block lg:hidden absolute top-0 left-0 z-[-1] w-full"
        src={technologyBgTablet}
      />
      <img
        className="hidden lg:block absolute top-0 left-0 z-[-1] w-full"
        src={technologyBgDesktop}
      />
      <div className="text-center lg:text-left lg:min-h-[80vh]">
        <h1 className="flex justify-center md:justify-start font-barlow tracking-[3px] lg:tracking-[6px] text-white mt-12 mb-12 lg:mb-20 text-2xl lg:text-3xl md:text-left md:pl-10 lg:pl-28">
          <div className="mr-5 text-gray-500 font-black">03</div>SPACE LAUNCH
          101
        </h1>

        <div className="flex flex-col text-[#D0D6F9] lg:flex-row-reverse mb-16 justify-between items-center space-y-12 lg:space-y-0 lg:pl-20">
          {/* Mobile Image container */}
          <div className="block lg:hidden">
            <TechnologyImage source={mobileImage} />
          </div>

          {/* Desktop Image container */}
          <div className="hidden lg:block w-full">
            <TechnologyImage source={desktopImage} />
          </div>

          {/* Details container */}
          <div className="px-8 sm:px-20 lg:flex justify-center items-center lg:space-x-20 lg:px-0 lg:pl-20">
            {/* Navbar */}
            <TechnologyNavbar />

            {/* Technology Info */}
            <div>
              <TechnologyInfo name={name} desc={desc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
