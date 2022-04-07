import React from "react";
import NavBar from "./NavBar";

function AboutPage(props) {
    return (
        <div className="flex flex-col">
            <NavBar></NavBar>
            <h1 className="bg-indigo-500">this is a about page</h1>
            <div className="h-screen bg-yellow-500"></div>
            <div className="h-screen bg-green-500"></div>
        </div>
    );
}

export default AboutPage;