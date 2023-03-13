import React from "react";
import DestinationNavbar from "../components/Destinations/DestinationNavbar";
import DestinationImage from "../components/Destinations/DestinationImage";
import DestinationInfo from "../components/Destinations/DestinationInfo";

import destinationBgMobile from "../assets/destination/background-destination-mobile.jpg";
import destinationBgTablet from "../assets/destination/background-destination-tablet.jpg";
import destinationBgDesktop from "../assets/destination/background-destination-desktop.jpg";

const Destination = ({ image, name, details, stats }) => {
  return (
    <div>
      <img
        alt="Destination Background"
        className="block md:hidden absolute top-0 scale-y-150 left-0 z-[-1] w-full min-h-[100dvh]"
        src={destinationBgMobile}
      />
      <img
        alt="Destination Background"
        className="hidden md:block lg:hidden absolute scale-y-125 top-0 left-0 z-[-1] w-full min-h-[100dvh]"
        src={destinationBgTablet}
      />
      <img
        alt="Destination Background"
        className="hidden lg:block absolute top-0 left-0 z-[-1] w-full min-h-[100dvh]"
        src={destinationBgDesktop}
      />

      <div className="text-center lg:text-left lg:min-h-[80vh]">
        <h1 className="flex justify-center md:justify-start font-barlow tracking-[3px] lg:tracking-[6px] text-white mt-12 mb-20 text-2xl lg:text-3xl md:text-left md:pl-10 lg:pl-28">
          <div className="mr-5 text-gray-600 font-black">01</div>PICK YOUR
          DESTINATION
        </h1>

        <div className="flex flex-col text-[#D0D6F9] mb-16 lg:grid grid-cols-2 lg:items-start justify-center items-center space-y-12 lg:space-y-0 lg:pr-20 lg:pl-40">
          {/* Image container */}
          <div className="lg:pt-10 w-72 lg:w-full lg:pr-20">
            <DestinationImage source={image} />
          </div>

          {/* Details container */}
          <div className="px-8 sm:px-20 lg:px-0">
            {/* Navbar */}
            <DestinationNavbar />

            {/* Destination Info */}
            <div>
              <DestinationInfo
                destinationName={name}
                destinationDetails={details}
                destinationStats={stats}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
