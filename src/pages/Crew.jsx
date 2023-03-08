import React from "react";
import CrewImage from "../components/Crew/CrewImage";
import CrewInfo from "../components/Crew/CrewInfo";
import CrewNavbar from "../components/Crew/CrewNavbar";

const Crew = ({ image, role, name, bio }) => {
  return (
    <div className="text-center lg:text-left lg:min-h-[80vh]">
      <h1 className="flex justify-center md:justify-start font-barlow tracking-[3px] lg:tracking-[6px] text-white mt-12 mb-20 text-2xl lg:text-3xl md:text-left md:pl-10 lg:pl-28">
        <div className="mr-5 text-gray-500 font-black">02</div>MEET YOUR CREW
      </h1>

      <div className="flex flex-col lg:flex-row-reverse justify-center items-center mb-16 space-y-12 lg:space-y-0 lg:px-20">
        {/* Image container */}
        <div className="w-72 lg:w-[90%]">
          <CrewImage source={image} />
        </div>

        {/* Details container */}
        <div className="px-8 sm:px-20 lg:px-0 lg:pl-20 lg:flex flex-col-reverse">
          {/* Navbar */}
          <CrewNavbar />

          {/* Crew details */}
          <div>
            <CrewInfo role={role} name={name} bio={bio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
