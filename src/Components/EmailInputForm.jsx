import React from "react";
import Input from "./Input";
import InputLabel from "./InputLabel";

function EmailInputForm(props) {
    return (
        <div className=" flex">
            <div className=" mx-auto rounded-md p-10 bg-gray-300">
            <InputLabel>Your email id</InputLabel>
            <Input type="email"></Input>
            <InputLabel>let's work together</InputLabel>
            <Input type="email"></Input>
                <button onClick={props.close} className="bg-indigo-500 text-white rounded-md px-6 py-2">Submit</button>
                <button onClick={props.close } className="bg-red-500 ml-4 text-white  rounded-md px-6 py-2">cancel</button>
                

        </div>
        </div>
    );
}

export default EmailInputForm;