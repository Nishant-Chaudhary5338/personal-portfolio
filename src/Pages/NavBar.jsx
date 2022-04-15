/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavLinks from "../Components/NavLinks";

function NavBar(props) {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(true);
  };
  const hideSideBar = () => {
    setSideBar(false);
  };
  return (
    <div>
      <div className="bg-black sm:hidden">
        <img
          onClick={showSideBar}
          src="https://img.icons8.com/fluency/48/000000/menu--v1.png"
        />

        {sidebar && (
          <div>
            <div className="fixed top-0 w-1/3 h-full bg-black">
              <div>
                <img
                  onClick={hideSideBar}
                  src="https://img.icons8.com/color/48/000000/back--v1.png"
                />
              </div>
              <div className="ml-10 space-y-10">
                <NavLinks>
                  <Link to={"/home"}>Home</Link>
                </NavLinks>
                <NavLinks>
                  <Link to={"/about"}>About</Link>
                </NavLinks>
                <NavLinks>
                  <Link to={"/contact"}>Contact</Link>
                </NavLinks>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden sm:block">
        <div className="sticky top-0 flex items-center justify-between h-16 px-20 bg-black">
          <NavLinks>
            <Link to={"/home"}>Home</Link>
          </NavLinks>
          <div className="flex space-x-6">
            <NavLinks>
              <Link to={"/about"}>About</Link>
            </NavLinks>
            <NavLinks>
              <Link to={"/contact"}>Contact</Link>
            </NavLinks>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
