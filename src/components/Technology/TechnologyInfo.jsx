import React from "react";

const TechnologyInfo = ({ name, desc }) => {
  return (
    <>
      <div className="text-xl mb-2 lg:text-3xl lg:mb-4 tracking-[4px] font-barlow font-thin">
        THE TERMINOLOGY
      </div>

      <div className="text-4xl mb-8 lg:text-5xl lg:mb-12 font-bellefair text-white">
        {name}
      </div>

      <div className="text-xl mb-12 md:px-20 lg:px-0 lg:pr-60 leading-loose">
        {desc}
      </div>
    </>
  );
};

export default TechnologyInfo;
