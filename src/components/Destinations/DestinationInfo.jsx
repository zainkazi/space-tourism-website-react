import React from "react";

const DestinationInfo = ({
  destinationName,
  destinationDetails,
  destinationStats,
}) => {
  return (
    <>
      {/* Name */}
      <div className="font-bellefair text-9xl text-white">
        {destinationName}
      </div>

      {/* Details */}
      <div className="text-xl mb-12 md:px-20 lg:px-0 lg:pr-24 leading-loose">
        {destinationDetails}
      </div>

      {/* Stats */}
      <div className="pt-10 md:flex md:justify-center md:items-center md:space-x-24 lg:justify-start lg:mr-12 border-t-2 border-gray-500">
        <div className="mb-10 md:mb-0">
          <h1 className="font-barlow text-xl mb-3 tracking-[4px]">
            AVG. DISTANCE
          </h1>
          <h1 className="font-bellefair text-white text-5xl">
            {destinationStats.distance} KM
          </h1>
        </div>
        <div>
          <h1 className="font-barlow text-xl mb-3 tracking-[4px]">
            EST. TRAVEL TIME
          </h1>
          <h1 className="font-bellefair text-white text-5xl">
            {destinationStats.time}
          </h1>
        </div>
      </div>
    </>
  );
};

export default DestinationInfo;
