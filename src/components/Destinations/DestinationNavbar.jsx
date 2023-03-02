import React from "react";
import DestinationLink from "./DestionationLink";

const DestinationNavbar = () => {
  return (
    <div className="flex justify-center lg:justify-start space-x-10 items-center text-2xl">
      <DestinationLink name="MOON" />
      <DestinationLink name="MARS" />
      <DestinationLink name="EUROPA" />
      <DestinationLink name="TITAN" />
    </div>
  );
};

export default DestinationNavbar;
