import React from "react";

const TechnologyImage = ({ source }) => {
  return (
    <div className="lg:w-[500px]">
      <img className="Technology" src={source} />
    </div>
  );
};

export default TechnologyImage;
