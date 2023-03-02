import React from "react";
import DestinationLink from "./DestionationLink";

const DestinationNavbar = () => {
  return (
    <div className="flex justify-center lg:justify-start space-x-10 items-center text-2xl">
      <DestinationLink name="MOON" path="moon" />
      <DestinationLink name="MARS" path="/mars" />
      <DestinationLink name="EUROPA" path="/europa" />
      <DestinationLink name="TITAN" path="/titan" />
    </div>
  );
};

export default DestinationNavbar;
