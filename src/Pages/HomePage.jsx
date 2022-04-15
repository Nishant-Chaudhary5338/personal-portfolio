import React from "react";
import A from "../Components/A";
import Footer from "../Components/Footer";
import InputLabel from "../Components/InputLabel";
import NavBar from "./NavBar";

function HomePage(props) {
    return (
        <div className="flex flex-col">
            <NavBar></NavBar>
            <div className="bg-gray-900">
                <div className="m-20  flex  pl-32 pt-20 pb-10 rounded-lg bg-gray-100">
                    <div className="space-y-4">
                        <span className="text-sky-900 text-4xl font-semibold">Hi I'm Nishant Chaudhary</span>
                        <span className="block text-sky-900 text-5xl font-extrabold font-serif">Full Stack Developer </span>
                        <span className="block text-sky-900 text-4xl font-semibold font-serif">based in New Delhi, India</span>
                        <div className=" px-2 pt-10 w-16 rounded-md">
                            <A href = "https://www.github.com"><img src="https://img.icons8.com/glyph-neue/64/000000/github.png"/></A>
                        </div>
                    </div>
                    <img className="h-80 -mt-10 rounded-full w-60 ml-40" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    

                </div>

                <div className="m-20  pt-20 pb-10 rounded-lg bg-gray-100">
                    <div className="text-center">
                        <InputLabel>My Advantages</InputLabel>
                    </div>
                    <div className="flex mt-10 justify-around">
                        <div className="space-y-4">
                            <div className="bg-cyan-400 px-8 hover:animate-bounce hover:bg-cyan-500 py-8 rounded-full">
                                <img  src="https://img.icons8.com/dotty/50/000000/speedometer.png"/>
                            </div>
                            <InputLabel>Fast</InputLabel>
                            <p className="w-28 text-xs font-semibold text-gray-700">Fast load times and lag free interaction, my highest priority</p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-cyan-400 hover:animate-bounce hover:bg-cyan-500 px-8 py-8 rounded-full">
                                <img  src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/50/000000/external-responsive-freelancer-xnimrodx-lineal-xnimrodx.png"/>
                            </div>
                            <InputLabel>Responsive</InputLabel>
                            <p className="w-28 text-xs font-semibold text-gray-700">My layouts will work on any device, big or small</p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-cyan-400 hover:animate-bounce hover:bg-cyan-500 px-8 py-8 rounded-full">
                                <img src="https://img.icons8.com/ios/50/000000/idea-sharing.png"/>
                            </div>
                            <InputLabel>Intuitive</InputLabel>
                            <p className="w-28 text-xs font-semibold text-gray-700">Strong preference for easy to use, intuitive UX/UI</p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-cyan-400 hover:animate-bounce hover:bg-cyan-500 px-8 py-8 rounded-full">
                                <img src="https://img.icons8.com/ios/50/000000/rocket--v1.png"/>
                            </div>
                            <InputLabel>Dynamic</InputLabel>
                            <p className="w-28 text-xs font-semibold text-gray-700">Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg pb-20 m-20">
                    
                    <div className="flex mx-40">
                        <div>
                            <span className="text-black mt-6 text-6xl font-semibold flex flex-col">Recent Projects</span>
                             <img className="m-2 mt-8 border border-white" src="https://cdn.discordapp.com/attachments/921133670830600253/961699193284608030/ask-jud.jpg" alt="" />
                    
                        </div>
                        <div className="flex flex-col">
                            <img className="h-72 border m-2 border-white" src="https://cdn.discordapp.com/attachments/921133670830600253/961699192823226438/todo.jpg" alt="" />
                         <img className="h-72 border m-2 border-white" src="https://cdn.discordapp.com/attachments/921133670830600253/961699193771163669/tic-tac-toe.jpg" alt="" />
                        </div>
                        
                    </div>
                    <div className="">
                        <div className="flex ml-44 space-x-12">
                            <img className="w-1/3 border  border-black" src="https://cdn.discordapp.com/attachments/921133670830600253/961699193557225582/product-list.jpg" alt="" />
                            <img src="" alt="" />
                            <img className="w-1/3 border-black border" src="https://cdn.discordapp.com/attachments/921133670830600253/961699193079091260/app.codeyogi-clone.jpg" alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;