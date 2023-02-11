import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursePage from "../Pages/CoursePage";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </>
  );
};

export default Routing;
