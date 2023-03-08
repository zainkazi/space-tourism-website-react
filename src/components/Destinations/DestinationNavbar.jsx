import React from "react";
import DestinationLink from "./DestionationLink";

const DestinationNavbar = () => {
  return (
    <div className="font-barlow tracking-[3px] sm:tracking-[5px] flex justify-center lg:justify-start space-x-6 sm:space-x-10 items-center text-2xl mb-5">
      <DestinationLink name="MOON" path="/destination/moon" />
      <DestinationLink name="MARS" path="/destination/mars" />
      <DestinationLink name="EUROPA" path="/destination/europa" />
      <DestinationLink name="TITAN" path="/destination/titan" />
    </div>
  );
};

export default DestinationNavbar;
