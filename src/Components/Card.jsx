/** @format */

import React from "react";

function Card(props) {
  return (
    <div className="p-4 m-10 bg-gray-100 rounded-lg sm:m-20 sm:p-20 ">
      {props.children}
    </div>
  );
}

export default Card;
