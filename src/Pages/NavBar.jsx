import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../Components/NavLinks";

function NavBar(props) {
    return (
        <div className="h-16 px-20 items-center justify-between sticky flex top-0 bg-black">
            <NavLinks><Link to={"/home"}>Home</Link></NavLinks>
            <div className="flex space-x-6">
                <NavLinks><Link to={"/about"}>About</Link></NavLinks>
                <NavLinks><Link to={"/contact"}>Contact</Link></NavLinks>
            </div>
        </div>
    );
}

export default NavBar;