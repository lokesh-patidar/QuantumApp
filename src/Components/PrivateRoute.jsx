import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // const token = localStorage.getItem("token");


  if (false) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;