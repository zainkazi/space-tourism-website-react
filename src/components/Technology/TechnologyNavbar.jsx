import React from "react";
import { NavLink } from "react-router-dom";

const TechnologyNavbar = () => {
  return (
    <div className="text-white font-bellefair mb-8 text-3xl flex lg:flex-col justify-start items-start space-x-8 lg:space-x-0 lg:space-y-10">
      <NavLink
        style={({ isActive }) => {
          return isActive ? { border: "3px solid black" } : {};
        }}
        className="border-2 border-white text-center p-4 rounded-full h-[70px] w-[70px]"
        to="/technology/LaunchVehicle"
      >
        <div>1</div>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { border: "3px solid black" } : {};
        }}
        className="border-2 border-white text-center p-4 rounded-full h-[70px] w-[70px]"
        to="/technology/Spaceport"
      >
        <div>2</div>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { border: "3px solid black" } : {};
        }}
        className="border-2 border-white text-center p-4 rounded-full h-[70px] w-[70px]"
        to="/technology/SpaceCapsule"
      >
        <div>3</div>
      </NavLink>
    </div>
  );
};

export default TechnologyNavbar;
