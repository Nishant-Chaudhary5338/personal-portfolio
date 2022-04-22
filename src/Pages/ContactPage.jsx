/** @format */

import React from "react";
import { Link } from "react-router-dom";
import A from "../Components/A";
import EmailInputForm from "../Components/EmailInputForm";
import Footer from "../Components/Footer";
import NavBar from "./NavBar";
import Card from "../Components/Card";
import Button from "../Components/Button";

function ContactPage(props) {
  const [popup, setPopup] = React.useState(false);

  const showForm = () => {
    setPopup(true);
    console.log("its working");
  };
  const hideForm = () => {
    setPopup(false);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-gray-900">
        <Card>
          <div className="px-10 space-y-10 sm:flex sm:justify-between">
            <div className="space-y-6">
              <span className="font-serif text-xl font-semibold text-sky-500">
                I can help your business to
              </span>
              <span className="block font-serif text-6xl font-extrabold text-sky-700">
                Get online and
              </span>
              <span className="block font-serif text-6xl font-extrabold text-sky-900">
                grow fast.
              </span>
              <div>
                <button className="px-8 py-4 text-white rounded-md font-md bg-sky-900">
                  <Link to={"/enquiry"}>Get an Enquiry</Link>
                </button>
              </div>
            </div>

            <div className="">
              <img
                className="mx-auto rounded-full flex-nowrap h-80 sm:-mt-20 w-60"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
          </div>
        </Card>
        <Card>
          <div className="space-y-4 text-center">
            <span className="block font-serif text-4xl font-extrabold text-center text-sky-600 ">
              Lets work together
            </span>
            <span className="block font-serif font-semibold text-center text-gray-800 text-md">
              If you'd like to talk about a project you want help with or need
              an advice about web development, just drop me a message at
              nishantchaudhary5338@gmail.com. I'm currently Available for any
              React Js Web development projects.
            </span>
            {popup && <EmailInputForm close={hideForm}></EmailInputForm>}
            <Button
              onClick={showForm}
              className="px-6 py-2 text-center text-gray-100 bg-indigo-500 rounded-md hover:scale-x-110 "
            >
              Write me an email
            </Button>
          </div>
        </Card>
        <div className="my-12 text-center">
          <span className="text-2xl text-white"> Connect with me</span>
          <div className="flex items-center justify-center mt-4 space-x-4 ">
            <A href="https://www.facebook.com">
              <img
                className="hover:scale-125"
                src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
              />
            </A>
            <A href="https://www.instagram.com">
              <img
                className="hover:scale-125"
                src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
              />
            </A>
            <A href="https://www.twitter.com">
              <img
                className="hover:scale-125"
                src="https://img.icons8.com/fluency/48/000000/twitter.png"
              />
            </A>
            <A href="https://www.linkedin.com">
              <img
                className="hover:scale-125"
                src="https://img.icons8.com/color/48/000000/linkedin.png"
              />
            </A>
          </div>
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ContactPage;
