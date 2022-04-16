/** @format */

import React from "react";

function Button(props) {
  let themeClasses = "";
  if (props.theme === "cancel") {
    themeClasses = "bg-red-500 hover:bg-red-700";
  } else {
    themeClasses = "bg-indigo-500 hover:bg-indigo-800";
  }
  return (
    <button
      onClick={props.onClick}
      className={
        "px-6 py-4 rounded-md text-white font-semibold hover:scale-105 active:bg-black " +
        themeClasses
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
