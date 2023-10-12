import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Rent from "./pages/Rent/Rent";
import About from "./pages/About/About";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} loaction={location}>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AnimatedRoutes;
