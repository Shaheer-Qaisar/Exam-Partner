import React from "react";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedLayout from "./components/layout/ProtectedLayout";
import MainPages from "./components/Pages/MainPages";

// placeholder pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<MainPages />} />
        </Route>

        {/* Protected Layout */}
        {/* <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
