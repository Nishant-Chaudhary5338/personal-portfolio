import React from "react";
import A from "../Components/A";
import NavBar from "./NavBar";

function AboutPage(props) {
    return (
        <div className="flex flex-col">
            <NavBar></NavBar>
            <div className="bg-gray-900">
                <div className="bg-white h-screen p-20 m-20">
                    <div className="">
                        <div className="flex ml-44 space-x-12">
                            <div className="relative">
                                <div className="">
                                    <img className="transition ease-in-out object-cover hover:blur-sm border border-black" src="https://cdn.discordapp.com/attachments/921133670830600253/961699193557225582/product-list.jpg" alt="" />
                                </div>
                                <div className="absolute transition ease-in-out  inset-0 flex space-x-4 bg-sky-200 opacity-0 hover:opacity-100 items-center justify-center">
                                    <button className="bg-blue-500 px-4 py-2">Github</button>
                                    <button className="bg-blue-500 px-4 py-2">Replit</button>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default AboutPage;