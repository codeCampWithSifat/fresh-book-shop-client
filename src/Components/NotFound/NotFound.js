import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center ">
      <h2>Page Not Found </h2>
      <Link to="/home">
        <button className="btn btn-danger ">Go To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
