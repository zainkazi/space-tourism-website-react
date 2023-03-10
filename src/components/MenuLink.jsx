import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ number, title, path }) => {
  return (
    //<div className="border-2 border-black flex space-x-6">
    <NavLink
      style={({ isActive }) => {
        return isActive
          ? { transitionDuration: "0.5s", borderBottom: "4px solid white" }
          : {};
      }}
      className="transition-[border] duration-150 hover:border-b-[4px] border-gray-500"
      to={path}
    >
      <div className="flex py-4 md:py-8 space-x-6 mb-7 md:mb-0 lg:space-x-3 select-none">
        <div className="md:hidden lg:block">{number}</div>
        <div>{title}</div>
      </div>
    </NavLink>
  );
};

export default MenuLink;
