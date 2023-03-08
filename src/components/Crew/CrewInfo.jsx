import React from "react";

const CrewInfo = ({ role, name, bio }) => {
  return (
    <>
      <div className="font-bellefair text-gray-400 text-xl mb-2 lg:text-3xl lg:mb-4">
        {role}
      </div>

      <div className="font-bellefair text-white text-4xl mb-8 lg:text-5xl lg:mb-12">
        {name}
      </div>

      <div className="text-xl mb-12 md:px-20 lg:px-0 lg:pr-72 leading-loose text-[#D0D6F9]">
        {bio}
      </div>
    </>
  );
};

export default CrewInfo;
