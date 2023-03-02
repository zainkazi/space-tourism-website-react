import React from "react";

const MenuLink = ({ number, title }) => {
  return (
    //<div className="border-2 border-black flex space-x-6">
    <div className="flex space-x-6 lg:space-x-3">
      <div className="md:hidden lg:block">{number}</div>
      <div>
        <a>{title}</a>
      </div>
    </div>
  );
};

export default MenuLink;
