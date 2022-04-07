import React from "react";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import InputLabel from "../Components/InputLabel";
import NavBar from "./NavBar";

function EnquiryPage() {
    return (
        <div className="bg-gray-900">
            <NavBar></NavBar>
            <div className="flex p-20 bg-gray-50 m-10 rounded-xl mx-20">
            <div className="mr-20 flex-col  space-y-4">
                <div className="flex flex-col space-y-2  border-b-2">
                        <span className="text-xl font-serif font-bold text-red-400">Office Address</span> 
                         <InputLabel>Meerut, Uttar Pradesh, India</InputLabel>

                </div>
                <div className="flex flex-col space-y-2 border-b-2">
                        <span className="text-lg font-serif font-semibold text-gray-500">Contact No</span> 
                        <InputLabel>9560025338</InputLabel>
                </div>
                <div className="flex flex-col space-y-2 border-b-2"> 
                        <span className="text-lg font-serif font-semibold text-gray-500">email id</span> 
                        <InputLabel>nishantChaudhary5338@gmail.com</InputLabel>
                </div>
            </div>
                <div className="space-y-6 grow">
                    <h3 className="text-lg font-serif font-semibold text-gray-500">TELL US ABOUT YOUR PROJECT AND GOALS</h3>
                    <div className="space-y-2">
                        <InputLabel>What's your Name?</InputLabel> 
                        <Input type ="text"></Input>
                    </div>
                    <div className="space-y-2">
                        <InputLabel>What's your Organisation Name?</InputLabel> 
                        <Input type ="text"></Input>
                    </div>
                    <div className="space-y-2">
                         <InputLabel>What's your Email Address?</InputLabel> 
                         <Input type ="text"></Input>
                    </div>
                    <div className="space-y-2">
                         <InputLabel>What are your project goals?</InputLabel> 
                         <Input type ="text"></Input>
                    </div>
                    <div className="space-y-2">
                        <InputLabel>Do you have a timeline in mind?</InputLabel> 
                        <Input type ="text"></Input>
                    </div>
                    <div className="space-y-2">
                         <InputLabel>What is your budget?</InputLabel> 
                         <Input type ="number"></Input>
                    </div>
                    <button className="bg-indigo-500 text-white px-6 py-2">Submit</button>
                    <p className="text-semibold font-serif text-sm">My Team will get back to you soon</p>
                    
                

            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default EnquiryPage;