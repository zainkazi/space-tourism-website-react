import React from "react";

const DestinationInfo = ({ name, details, stats }) => {
  return (
    <>
      {/* Name */}
      <div className="text-9xl">{name}</div>

      {/* Details */}
      <div className="text-xl mb-12 md:px-20 lg:px-0 lg:pr-24">{details}</div>

      {/* Stats */}
      <div className="pt-10 md:flex md:justify-center md:items-center md:space-x-24 lg:justify-start lg:mr-12 border-t-2 border-black">
        <div className="mb-10 md:mb-0">
          <h1 className="text-xl">AVG. DISTANCE</h1>
          <h1 className="text-5xl">{stats.distance}</h1>
        </div>
        <div>
          <h1 className="text-xl">EST. TRAVEL TIME</h1>
          <h1 className="text-5xl">{stats.time} KM</h1>
        </div>
      </div>
    </>
  );
};

export default DestinationInfo;
