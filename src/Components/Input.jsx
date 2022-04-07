import React from "react";

function Input(props) {
    return (
        <input type={props.type } className="w-full focus:outline-none py-4 border-b-4" />
    );
}

export default Input;