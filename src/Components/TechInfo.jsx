/** @format */

import react from "react";

function TechInfo(props) {
  return (
    <div>
      <div className="flex space-x-6 sm:flex-col">
        <div className="">
          <img
            className="px-10 py-10 rounded-full  bg-cyan-400 hover:animate-spin hover:animate-bounce grayscale hover:grayscale-0"
            src={props.image}
          />
        </div>
        <div className="mt-8 space-y-4 sm:mt-2">
          <div className="text-2xl font-semibold sm:ml-5">
            {props.percentage}
          </div>
          <div className="font-serif text-sm font-semibold text-gray-700 ">
            {props.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechInfo;
