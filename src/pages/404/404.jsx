import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return(
    <div>
        <h2>Page not found! 404</h2>
        <Link to="/">Go to Homepage </Link>
    </div>
  ) 
};

export default NotFound;
