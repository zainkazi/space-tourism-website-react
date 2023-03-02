import React from "react";
import { Link } from "react-router-dom";

const TechnologyNavbar = () => {
  return (
    <div className="mb-8 text-3xl flex lg:flex-col justify-center items-center space-x-8 lg:space-x-0 lg:space-y-10">
      <Link to="LaunchVehicle">
        <div className="border-2 border-black text-center p-3 rounded-full h-[70px] w-[70px]">
          1
        </div>
      </Link>
      <Link to="Spaceport">
        <div className="border-2 border-black text-center p-3 rounded-full h-[70px] w-[70px]">
          2
        </div>
      </Link>
      <Link to="SpaceCapsule">
        <div className="border-2 border-black text-center p-3 rounded-full h-[70px] w-[70px]">
          3
        </div>
      </Link>
    </div>
  );
};

export default TechnologyNavbar;
