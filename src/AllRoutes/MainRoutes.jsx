import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "../Pages/SignIn";
import { MainPage } from "../Pages/MainPage";
import PrivateRoute from "../Components/PrivateRoute";
import { SignUp } from "../Pages/SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/mainpage"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export { MainRoutes };