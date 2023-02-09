import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/log" element=<Login /> />
        <Route path="/main" element=<Main /> />
      </Routes>
    </>
  );
};

export default Routing;
