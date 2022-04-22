/** @format */

import React from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import InputLabel from "../Components/InputLabel";
import NavBar from "./NavBar";
import Button from "../Components/Button";
import RedH3 from "../Components/RedH3";
import GrayH6 from "../Components/GrayH6";

function EnquiryPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-900">
        <Card>
          <div className="space-y-10 sm:flex sm:justify-between sm:px-20 sm:space-y-0">
            <div className="space-y-6">
              <div className="font-serif text-xl font-bold">
                Contact Details
              </div>
              <div className="space-y-2 border-b-2">
                <RedH3>Office Address</RedH3>
                <GrayH6>Meerut, UP</GrayH6>
              </div>
              <div className="space-y-2 border-b-2 ">
                <RedH3>Contact No</RedH3>
                <GrayH6>9560025338</GrayH6>
              </div>
              <div className="space-y-2 border-b-2">
                <RedH3>Email Id</RedH3>
                <GrayH6>nishantchaudhary5338@gmail.com</GrayH6>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold">
                TELL US ABOUT YOUR PROJECT AND GOALS
              </h3>
              <div className="space-y-2">
                <InputLabel>What's your Name?</InputLabel>
                <Input type="text"></Input>
              </div>
              <div className="space-y-2">
                <InputLabel>What's your Organisation Name?</InputLabel>
                <Input type="text"></Input>
              </div>
              <div className="space-y-2">
                <InputLabel>What's your Email Address?</InputLabel>
                <Input type="text"></Input>
              </div>
              <div className="space-y-2">
                <InputLabel>What are your project goals?</InputLabel>
                <Input type="text"></Input>
              </div>
              <div className="space-y-2">
                <InputLabel>Do you have a timeline in mind?</InputLabel>
                <Input type="text"></Input>
              </div>
              <div className="space-y-2">
                <InputLabel>What is your budget?</InputLabel>
                <Input type="number"></Input>
              </div>
              <Button className="px-6 py-2 text-white bg-indigo-500">
                Submit
              </Button>
              <p className="font-serif text-sm text-semibold">
                My Team will get back to you soon
              </p>
            </div>
          </div>
        </Card>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default EnquiryPage;
