import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Maps from "../screens/Maps";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
