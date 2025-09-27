// src/layouts/ProtectedLayout.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

// Example: replace with your real authentication logic
// const isAuthenticated = false; // <- set this from context/store

const ProtectedLayout = () => {
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedLayout;
