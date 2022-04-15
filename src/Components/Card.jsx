/** @format */

import React from "react";

function Card(props) {
  return (
    <div className="p-20 m-20 bg-gray-100 rounded-lg ">{props.children}</div>
  );
}

export default Card;
