import React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ number, title, path }) => {
  return (
    //<div className="border-2 border-black flex space-x-6">
    <div className="flex space-x-6 lg:space-x-3">
      <div className="md:hidden lg:block">{number}</div>
      <div>
        <Link to={path}>{title}</Link>
      </div>
    </div>
  );
};

export default MenuLink;
