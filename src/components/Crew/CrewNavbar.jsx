import React from "react";
import { NavLink } from "react-router-dom";

const CrewNavbar = () => {
  return (
    <div className="mb-6 space-x-3 lg:mt-5">
      <NavLink
        style={({ isActive }) => {
          return isActive ? { backgroundColor: "white" } : {};
        }}
        className="transition-[border] duration-75"
        to="/crew/DouglasHurley"
      >
        <button
          type="button"
          className="bg-gray-600 w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
      </NavLink>
      <NavLink to="/crew/MarkShuttleworth">
        <button
          type="button"
          className="bg-gray-600 w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
      </NavLink>
      <NavLink to="/crew/VictorGlover">
        <button
          type="button"
          className="bg-gray-600 w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </NavLink>
      <NavLink to="/crew/AnoushehAnsari">
        <button
          type="button"
          className="bg-gray-600 w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </NavLink>
    </div>
  );
};

export default CrewNavbar;
