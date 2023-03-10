import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CrewNavbar = () => {
  return (
    <div className="mb-6 space-x-6 lg:mt-5">
      <NavLink to="/crew/DouglasHurley">
        <button
          type="button"
          className={`crew-link bg-gray-600 w-4 h-4 rounded-full tansition duration-300 hover:bg-gray-500`}
          aria-current="false"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
      </NavLink>
      <NavLink to="/crew/MarkShuttleworth">
        <button
          type="button"
          className={`crew-link bg-gray-600 w-4 h-4 rounded-full tansition duration-300 hover:bg-gray-500`}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
      </NavLink>
      <NavLink to="/crew/VictorGlover">
        <button
          type="button"
          className={`crew-link bg-gray-600 w-4 h-4 rounded-full tansition duration-300 hover:bg-gray-500`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </NavLink>
      <NavLink to="/crew/AnoushehAnsari">
        <button
          type="button"
          className={`crew-link bg-gray-600 w-4 h-4 rounded-full tansition duration-300 hover:bg-gray-500`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </NavLink>
    </div>
  );
};

export default CrewNavbar;
