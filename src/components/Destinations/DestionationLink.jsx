import React from "react";
import { NavLink } from "react-router-dom";

const DestinationLink = ({ name, path }) => {
  return (
    <div>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { borderBottom: "3px solid white" } : {};
        }}
        className="transition-[border] pb-2 duration-75 hover:border-b-[3px] border-gray-500"
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DestinationLink;
