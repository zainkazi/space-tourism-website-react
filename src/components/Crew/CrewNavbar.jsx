import React from "react";
import { Link } from "react-router-dom";

const CrewNavbar = () => {
  return (
    <div className="mb-6 space-x-3 lg:mt-5">
      <Link to="DouglasHurley">
        <button
          type="button"
          className="bg-gray-600 w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
      </Link>
      <Link to="MarkShuttleworth">
        <button
          type="button"
          className="bg-gray-600 w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
      </Link>
      <Link to="VictorGlover">
        <button
          type="button"
          className="bg-gray-600 w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </Link>
      <Link to="AnoushehAnsari">
        <button
          type="button"
          className="bg-gray-600 w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </Link>
    </div>
  );
};

export default CrewNavbar;
