import React, { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import MenuLink from "./MenuLink";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [displayHamburger, setDisplayHamburger] = useState("block");
  const [displayClose, setDisplayClose] = useState("hidden");
  const [displayNavbar, setDisplayNavbar] = useState("translate-x-full");

  useEffect(() => {
    if (hamburgerClicked) {
      setDisplayHamburger("hidden");
      setDisplayClose("block");
      setDisplayNavbar("-translate-x-0");
    } else {
      setDisplayHamburger("block");
      setDisplayClose("hidden");
      setDisplayNavbar("translate-x-full");
    }
  }, [hamburgerClicked]);

  const toggleHamburger = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  return (
    <div className="flex justify-between items-center lg:mt-5">
      {/* Logo */}

      <div className="p-6 md:pl-10 lg:pl-20">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-14" />
        </NavLink>
      </div>

      {/* Navbar for Mobile */}
      <div
        className={`transition-all duration-300 ease-in-out ${displayNavbar} font-barlow tracking-[4px] bg-black text-white md:hidden fixed top-0 right-0 bottom-0 pt-40 text-2xl space-y-10 pl-16 pr-20`}
      >
        <MenuLink number="00" title="HOME" path="/" />
        <MenuLink number="01" title="DESTINATION" path="/destination" />
        <MenuLink number="02" title="CREW" path="/crew" />
        <MenuLink number="03" title="TECHNOLOGY" path="/technology" />
      </div>

      {/* Navbar for Desktop and Tablet */}
      <div className="backdrop-blur-[100px] font-barlow tracking-[4px] text-white hidden md:block md:flex space-x-5 lg:space-x-12 text-xl md:pr-8 lg:pl-20 lg:pr-32">
        <MenuLink number="00" title="HOME" path="/" />
        <MenuLink number="01" title="DESTINATION" path="/destination" />
        <MenuLink number="02" title="CREW" path="/crew" />
        <MenuLink number="03" title="TECHNOLOGY" path="/technology" />
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
