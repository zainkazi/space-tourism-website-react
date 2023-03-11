import React from "react";

const TechnologyImage = ({ source }) => {
  return (
    <div className="lg:w-[500px]">
      <img src={source} />
    </div>
  );
};

export default TechnologyImage;
