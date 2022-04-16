/** @format */

import React from "react";
import Input from "./Input";
import InputLabel from "./InputLabel";
import Button from "./Button";

function EmailInputForm(props) {
  return (
    <div className="flex ">
      <div className="p-10 mx-auto bg-gray-300 rounded-md ">
        <InputLabel>Your email id</InputLabel>
        <Input type="email"></Input>
        <InputLabel>let's work together</InputLabel>
        <Input type="text"></Input>
        <Button onClick={props.close}>Submit</Button>
        <Button theme="cancel" onClick={props.close}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default EmailInputForm;
