import React from "react";
import TechnologyImage from "../components/Technology/TechnologyImage";
import tech1Mobile from "../assets/technology/image-launch-vehicle-landscape.jpg";
import tech1Desktop from "../assets/technology/image-launch-vehicle-portrait.jpg";
import tech2Mobile from "../assets/technology/image-spaceport-landscape.jpg";
import tech2Desktop from "../assets/technology/image-spaceport-portrait.jpg";
import tech3Mobile from "../assets/technology/image-space-capsule-landscape.jpg";
import tech3Desktop from "../assets/technology/image-space-capsule-portrait.jpg";
import TechnologyNavbar from "../components/Technology/TechnologyNavbar";
import TechnologyInfo from "../components/Technology/TechnologyInfo";

const Technology = () => {
  return (
    <div className="text-center lg:text-left lg:min-h-[80vh]">
      <h1 className="my-12 text-2xl md:text-left md:pl-10 lg:pl-28 lg:mb-20">
        <span className="mr-3">03</span>SPACE LAUNCH 101
      </h1>

      <div className="flex flex-col lg:flex-row-reverse justify-between items-center space-y-12 lg:space-y-0 lg:pl-20">
        {/* Mobile Image container */}
        <div className="block lg:hidden">
          <TechnologyImage source={tech1Mobile} />
        </div>

        {/* Desktop Image container */}
        <div className="hidden lg:block w-full">
          <TechnologyImage source={tech1Desktop} />
        </div>

        {/* Details container */}
        <div className="px-8 sm:px-20 lg:flex justify-center items-center lg:space-x-20 lg:px-0 lg:pl-20">
          {/* Navbar */}
          <TechnologyNavbar />

          {/* Technology Info */}
          <div>
            <TechnologyInfo
              name="LAUNCH VEHICLE"
              desc="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
