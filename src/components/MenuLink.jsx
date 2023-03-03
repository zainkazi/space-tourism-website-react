import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ number, title, path }) => {
  return (
    //<div className="border-2 border-black flex space-x-6">
    <NavLink
      style={({ isActive }) => {
        return isActive ? { color: "red" } : {};
      }}
      to={path}
    >
      <div className="flex space-x-6 mb-7 md:mb-0 lg:space-x-3">
        <div className="md:hidden lg:block">{number}</div>
        <div>{title}</div>
      </div>
    </NavLink>
  );
};

export default MenuLink;
