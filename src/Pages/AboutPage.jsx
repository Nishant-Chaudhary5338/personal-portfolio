/** @format */

import React from "react";
import A from "../Components/A";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

import NavBar from "./NavBar";
import Projects from "../Components/Projects";
import InputLabel from "../Components/InputLabel";
import GrayH6 from "../Components/GrayH6";
import BlackH2 from "../Components/BlackH2";
import Button from "../Components/Button";

function AboutPage(props) {
  return (
    <div className="flex flex-col">
      <NavBar></NavBar>
      <div className="bg-gray-900">
        <Card>
          <div className="space-y-10 sm:px-20 sm:flex sm:space-y-0 sm:justify-between">
            <div className="space-y-6">
              <BlackH2>Educational Background</BlackH2>
              <div>
                <InputLabel>Bachelors</InputLabel>
                <GrayH6>B.Com(hons) University of Delhi, New Delhi</GrayH6>
              </div>
              <div>
                <InputLabel>Masters</InputLabel>
                <GrayH6>MCA(pursuing) CCS University, Meerut</GrayH6>
              </div>
            </div>
            <div className="space-y-6">
              <BlackH2>Work Experiance</BlackH2>
              <div>
                <InputLabel>2021</InputLabel>
                <GrayH6>Student at Codeyogi</GrayH6>
              </div>
            </div>
          </div>
          <div className="my-10 space-y-6 sm:px-20">
            <BlackH2>
              CheckOut my Github
              <A href="https//:www.github.com">
                <img
                  className="hover:scale-110"
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                />
              </A>
            </BlackH2>
            <BlackH2>
              Download Resume
              <A href="https//:www.google.com">
                <img
                  className="hover:scale-110"
                  src="https://img.icons8.com/office/40/000000/open-resume.png"
                />
              </A>
            </BlackH2>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col my-6 text-4xl font-semibold text-center text-black">
            Recent Projects
          </div>
          <div className="space-y-4">
            <div className="mx-auto sm:w-4/6">
              <Projects image="https://cdn.discordapp.com/attachments/921133670830600253/961699193557225582/product-list.jpg"></Projects>
            </div>
            <div className="mx-auto sm:w-4/6">
              <Projects image="https://cdn.discordapp.com/attachments/921133670830600253/961699193079091260/app.codeyogi-clone.jpg"></Projects>
            </div>

            <div className="w-64 mx-auto space-y-4 sm:w-96">
              <div className="mx-auto">
                <Projects image="https://cdn.discordapp.com/attachments/921133670830600253/961699193284608030/ask-jud.jpg"></Projects>
              </div>
              <div className="mx-auto">
                <Projects image="https://cdn.discordapp.com/attachments/921133670830600253/961699192823226438/todo.jpg"></Projects>
              </div>
              <div className="mx-auto">
                <Projects image="https://cdn.discordapp.com/attachments/921133670830600253/961699193771163669/tic-tac-toe.jpg"></Projects>
              </div>
            </div>
            <div className="pt-12 text-center">
              <BlackH2>Where i learned Web Developement</BlackH2>
              <Button>
                <A href="https://www.codeyogi.io">Click here to know</A>
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AboutPage;
