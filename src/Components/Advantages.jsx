/** @format */

import React from "react";
import InputLabel from "./InputLabel";

function Advantages(props) {
  return (
    <div>
      <div className="items-center space-y-4 text-center sm:flex-col">
        <div className="py-6 rounded-xl sm:rounded-full sm:px-8 sm:py-8 bg-cyan-400 hover:animate-bounce hover:bg-cyan-500">
          <img className="mx-auto" src={props.src} />
        </div>
        <InputLabel>{props.heading}</InputLabel>
        <div className="text-xs font-semibold text-gray-700 sm:w-28">
          {props.paragraph}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
