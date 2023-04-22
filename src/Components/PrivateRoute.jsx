import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import useAuth from "../useAuth";
import { useSelector } from "react-redux";


function PrivateRoute({ children }) {

  const currentUser  = useAuth();
  const status = useSelector(store => store.AuthReducer.status);

  if (status !== "login success") {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
