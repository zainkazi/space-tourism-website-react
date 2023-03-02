import React from "react";
import crew1 from "../assets/crew/image-anousheh-ansari.webp";
import crew2 from "../assets/crew/image-douglas-hurley.webp";
import crew3 from "../assets/crew/image-mark-shuttleworth.webp";
import crew4 from "../assets/crew/image-victor-glover.webp";
import CrewImage from "../components/Crew/CrewImage";
import CrewInfo from "../components/Crew/CrewInfo";
import CrewNavbar from "../components/Crew/CrewNavbar";

const Crew = () => {
  return (
    <div className="text-center lg:text-left lg:min-h-[80vh]">
      <h1 className="my-12 text-2xl md:text-left md:pl-10 lg:pl-28">
        <span className="mr-3">02</span>MEET YOUR CREW
      </h1>

      <div className="flex flex-col lg:flex-row-reverse justify-center items-center space-y-12 lg:space-y-0 lg:px-20">
        {/* Image container */}
        <div className="w-72 lg:w-[90%]">
          <CrewImage source={crew1} />
        </div>

        {/* Details container */}
        <div className="px-8 sm:px-20 lg:px-0 lg:pl-20 lg:flex flex-col-reverse">
          {/* Navbar */}
          <CrewNavbar />

          {/* Crew details */}
          <div>
            <CrewInfo
              role="FLIGHT ENGINEER"
              name="ANOUSHEH ANSARI"
              bio="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
