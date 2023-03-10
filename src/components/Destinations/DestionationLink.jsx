import React from "react";
import { NavLink } from "react-router-dom";

const DestinationLink = ({ name, path }) => {
  return (
    <div>
      <NavLink
        style={({ isActive }) => {
          return isActive
            ? { transitionDuration: "0.5s", borderBottom: "3px solid white" }
            : {};
        }}
        className="transition-[border] pb-2 duration-100 hover:border-b-[3px] border-gray-500 select-none"
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DestinationLink;
