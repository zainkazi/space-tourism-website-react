import React from "react";
import DestinationNavbar from "../components/Destinations/DestinationNavbar";
import moonImage from "../assets/destination/image-moon.webp";
import marsImage from "../assets/destination/image-mars.webp";
import europaImage from "../assets/destination/image-europa.webp";
import titanImage from "../assets/destination/image-titan.webp";
import DestinationImage from "../components/Destinations/DestinationImage";
import DestinationInfo from "../components/Destinations/DestinationInfo";
import { Route, Routes } from "react-router-dom";

const Destination = () => {
  return (
    <div className="text-center lg:text-left lg:min-h-[80vh]">
      <h1 className="my-12 text-2xl md:text-left md:pl-10 lg:pl-28">
        <span className="mr-3">01</span>PICK YOUR DESTINATION
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:px-20">
        {/* Image container */}

        <div className="w-72 lg:w-full">
          <Routes>
            <Route
              path="/moon"
              element={<DestinationImage source={moonImage} />}
            />
            <Route
              path="mars"
              element={<DestinationImage source={marsImage} />}
            />
            <Route
              path="europa"
              element={<DestinationImage source={europaImage} />}
            />
            <Route
              path="titan"
              element={<DestinationImage source={titanImage} />}
            />
          </Routes>
        </div>

        {/* Details container */}
        <div className="px-8 sm:px-20 lg:px-0 lg:pl-20">
          {/* Navbar */}
          <DestinationNavbar />

          {/* Destination Info */}
          <div>
            <DestinationInfo
              name="MOON"
              details="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
              stats={{ distance: "384,400", time: "3 DAYS" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
