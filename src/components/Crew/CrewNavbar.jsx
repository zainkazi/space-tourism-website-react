import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CrewNavbar = () => {
  const [link1Active, setLink1Active] = useState("");
  const [link2Active, setLink2Active] = useState("");
  const [link3Active, setLink3Active] = useState("");
  const [link4Active, setLink4Active] = useState("");

  return (
    <div className="mb-6 space-x-6 lg:mt-5">
      <NavLink
        style={({ isActive }) => {
          return isActive
            ? setLink1Active("cursor-default bg-white")
            : setLink1Active("hover:bg-gray-500");
        }}
        to="/crew/DouglasHurley"
      >
        <button
          type="button"
          className={`bg-gray-600 w-4 h-4 rounded-full tansition duration-300 ${link1Active}`}
          aria-current="false"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive
            ? setLink2Active("cursor-default bg-white")
            : setLink2Active("hover:bg-gray-500");
        }}
        to="/crew/MarkShuttleworth"
      >
        <button
          type="button"
          className={`bg-gray-600 w-4 h-4 rounded-full tansition duration-300 ${link2Active}`}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive
            ? setLink3Active("cursor-default bg-white")
            : setLink3Active("hover:bg-gray-500");
        }}
        to="/crew/VictorGlover"
      >
        <button
          type="button"
          className={`bg-gray-600 w-4 h-4 rounded-full tansition duration-300 ${link3Active}`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive
            ? setLink4Active("cursor-default bg-white")
            : setLink4Active("hover:bg-gray-500");
        }}
        to="/crew/AnoushehAnsari"
      >
        <button
          type="button"
          className={`bg-gray-600 w-4 h-4 rounded-full tansition duration-300 ${link4Active}`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </NavLink>
    </div>
  );
};

export default CrewNavbar;
