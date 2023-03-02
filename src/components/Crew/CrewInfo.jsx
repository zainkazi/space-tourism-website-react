import React from "react";

const CrewInfo = ({ role, name, bio }) => {
  return (
    <>
      <div className="text-xl mb-2 lg:text-3xl lg:mb-4">{role}</div>

      <div className="text-4xl mb-8 lg:text-5xl lg:mb-12">{name}</div>

      <div className="text-xl mb-12 md:px-20 lg:px-0 lg:pr-72">{bio}</div>
    </>
  );
};

export default CrewInfo;
