import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import useAuth from "../useAuth";
import { useSelector } from "react-redux";


function PrivateRoute({ children }) {

  const currentUser  = useAuth();
  
  const status = useSelector(store => store.AuthReducer.status);
  console.log(status);
  console.log(currentUser);

  if(status === true || status == "login success"){
    return children;
  }

  if(status !== "login success") {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;