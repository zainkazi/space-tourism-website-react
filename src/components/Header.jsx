import React, { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import MenuLink from "./MenuLink";

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [displayHamburger, setDisplayHamburger] = useState("block");
  const [displayClose, setDisplayClose] = useState("hidden");

  useEffect(() => {
    if (hamburgerClicked) {
      setDisplayHamburger("hidden");
      setDisplayClose("block");
    } else {
      setDisplayHamburger("block");
      setDisplayClose("hidden");
    }
  }, [hamburgerClicked]);

  const toggleHamburger = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  return (
    <div className="bg-blue-700 flex justify-between items-center lg:mt-5">
      {/* Logo */}
      <div className="p-6">
        <img src={logo} alt="logo" className="w-14" />
      </div>

      {/* Navbar for Mobile */}
      <div
        className={`${displayClose} bg-white md:hidden border-2 border-black fixed top-0 right-0 bottom-0 pt-52 text-2xl space-y-12 pl-7 pr-16`}
      >
        <MenuLink number="00" title="HOME" />
        <MenuLink number="01" title="DESTINATION" />
        <MenuLink number="02" title="CREW" />
        <MenuLink number="03" title="TECHNOLOGY" />
      </div>

      {/* Navbar for Desktop and Tablet */}
      <div className="hidden md:block md:flex space-x-5 lg:space-x-12 py-12 border-2 border-black text-xl md:pr-8 lg:pl-20 lg:pr-32">
        <MenuLink number="00" title="HOME" />
        <MenuLink number="01" title="DESTINATION" />
        <MenuLink number="02" title="CREW" />
        <MenuLink number="03" title="TECHNOLOGY" />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden z-10 p-6">
        <img
          onClick={toggleHamburger}
          src={iconHamburger}
          alt="menu"
          className={`${displayHamburger} w-10`}
        />
        <img
          onClick={toggleHamburger}
          src={iconClose}
          alt="menu"
          className={`${displayClose} w-10`}
        />
      </div>
    </div>
  );
};

export default Header;
