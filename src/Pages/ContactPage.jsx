import React from "react";
import { Link } from "react-router-dom";
import A from "../Components/A";
import EmailInputForm from "../Components/EmailInputForm";
import Footer from "../Components/Footer";
import NavBar from "./NavBar";

function ContactPage(props) {

    const [popup, setPopup] = React.useState(false);

    const showForm = () => {
        setPopup(true);
        console.log("its working");
    }
    const hideForm = () => { 
        setPopup(false);
    }






    return (
        <div className="flex flex-col">
            <NavBar></NavBar>
            <div className="bg-gray-900">
                <div className="m-20  flex  pl-32 pt-20 rounded-lg bg-gray-100">
                    <div className="space-y-4">
                    <span className="text-sky-500 font-serif text-xl font-semibold">I can help your business to</span>
                    <span className="block text-sky-700 text-6xl font-extrabold font-serif">Get online and</span>
                    <span className="block text-sky-900 text-6xl font-extrabold font-serif">grow fast.</span>
                    <div >
                            <button className="bg-sky-900 rounded-md text-white h-8 w-40"><Link to={"/enquiry"}>Get an Enquiry</Link></button>
                    </div>
                    </div>
                    
                        <img className="h-80 rounded-full w-60 ml-40" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    
                    
                </div>
                <div className="text-center py-4 bg-gray-100 rounded-lg m-20 space-y-4">
                    <span className="text-center block font-extrabold font-serif text-3xl text-sky-600 ">Lets work together</span>
                    <span className="text-center text-gray-800 block mx-80 font-semibold font-serif text-md">If you'd like to talk about a project you want help with or need an advice about product design, just drop me a message at nathan@ojieame.design
                        I'm currently Available for any design systems projects, dashboard designs or landing pages gigs</span>
                    {popup && <EmailInputForm close={hideForm }></EmailInputForm>}
                    <button onClick={showForm } className=" bg-indigo-500 px-6 py-2 rounded-md text-center text-gray-100">
                            Write me an email 
                    </button>
                </div>
                <div className="my-12  text-center">
                    <span className="text-white text-2xl"> Connect with me</span>
                    <div className=" items-center justify-center mt-4 flex space-x-4">
                        <A href = "https://www.facebook.com"><img className="hover:scale-125 hover:animate-ping" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" /></A>
                        <A href="https://www.instagram.com"><img className="hover:scale-125 hover:animate-bounce" src="https://img.icons8.com/fluency/48/000000/instagram-new.png" /></A>
                        <A href="https://www.twitter.com"><img className="hover:scale-125 hover:animate-bounce" src="https://img.icons8.com/fluency/48/000000/twitter.png" /></A>
                        <A href="https://www.linkedin.com"><img className="hover:scale-125 hover:animate-bounce" src="https://img.icons8.com/color/48/000000/linkedin.png"/></A>
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