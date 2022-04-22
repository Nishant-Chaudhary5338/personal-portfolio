/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function MainLayout(props) {
  return (
    <div className="flex-col">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
