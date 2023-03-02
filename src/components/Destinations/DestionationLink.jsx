import React from "react";
import { Link } from "react-router-dom";

const DestinationLink = ({ name, path }) => {
  return (
    <div>
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default DestinationLink;
