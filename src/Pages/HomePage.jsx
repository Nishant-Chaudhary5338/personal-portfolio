/** @format */

import React from "react";
import A from "../Components/A";
import Advantages from "../Components/Advantages";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import InputLabel from "../Components/InputLabel";
import Projects from "../Components/Projects";
import NavBar from "./NavBar";
import TechInfo from "../Components/TechInfo";

function HomePage(props) {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-900">
        <Card>
          <div className="space-y-10 sm:px-20 sm:flex sm:justify-between">
            <div className="space-y-6">
              <span className="font-serif text-4xl font-semibold text-sky-900">
                Hi I'm
              </span>
              <span className="block font-serif text-4xl font-semibold text-sky-900">
                Nishant Chaudhary
              </span>
              <span className="block font-serif text-5xl font-extrabold text-sky-900">
                Full Stack Developer
              </span>
              <span className="block font-serif text-4xl font-semibold text-sky-900">
                based in New Delhi, India
              </span>
              <div className="w-16 px-2 pt-10 rounded-md "></div>
            </div>
            <div>
              <img
                className="mx-auto rounded-full sm:-mt-20 h-80 w-60"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
          </div>
        </Card>

        <Card>
          <div className="text-center border-b-2 border-gray-400">
            <InputLabel>My Advantages</InputLabel>
          </div>
          <div className="justify-around mt-10 space-y-10 sm:space-y-0 sm:flex">
            <Advantages
              src="https://img.icons8.com/dotty/50/000000/speedometer.png"
              heading="Fast"
              paragraph="Fast load times and lag free interaction, my highest priority"
            ></Advantages>
            <Advantages
              src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/50/000000/external-responsive-freelancer-xnimrodx-lineal-xnimrodx.png"
              heading="Responsive"
              paragraph="My layouts will work on any device, big or small"
            ></Advantages>
            <Advantages
              src="https://img.icons8.com/ios/50/000000/idea-sharing.png"
              heading="Intuitive"
              paragraph="Strong preference for easy to use, intuitive UX/UI"
            ></Advantages>
            <Advantages
              src="https://img.icons8.com/ios/50/000000/rocket--v1.png"
              heading="Dynamic"
              paragraph="Websites don't have to be static, I love making pages come to
                life."
            ></Advantages>
          </div>
        </Card>
        <Card>
          <div className="mb-10 text-center border-b-2 border-gray-400">
            <InputLabel>Tech i work on</InputLabel>
          </div>
          <div className="justify-between space-y-6 sm:space-y-0 sm:flex-wrap sm:flex">
            <TechInfo
              name="HTML"
              percentage="90%"
              image="https://img.icons8.com/color/48/000000/html-5--v1.png"
            ></TechInfo>
            <TechInfo
              name="TailWind CSS"
              percentage="80%"
              image="https://img.icons8.com/color/48/000000/css3.png"
            ></TechInfo>
            <TechInfo
              name="Java Script"
              percentage="60%"
              image="https://img.icons8.com/color/48/000000/javascript--v1.png"
            ></TechInfo>
            <TechInfo
              name="React JS"
              percentage="60%"
              image="https://img.icons8.com/color/48/000000/react-native.png"
            ></TechInfo>
            <TechInfo
              name="Type Script"
              percentage="20%"
              image="https://img.icons8.com/color/48/000000/typescript.png"
            ></TechInfo>
            <TechInfo
              name="Node JS"
              percentage="10%"
              image="https://img.icons8.com/fluency/48/000000/node-js.png"
            ></TechInfo>
          </div>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
