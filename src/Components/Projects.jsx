/** @format */

import React from "react";
import A from "./A";
import Button from "./Button";

function Projects(props) {
  return (
    <div>
      <div className="relative">
        <div className="">
          <img
            className="object-cover transition ease-in-out border border-black hover:blur-sm"
            src={props.image}
            alt=""
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center space-x-6 transition ease-in-out opacity-0 bg-sky-100 hover:opacity-100">
          <div>
            <A href="https://www.github.com">
              <Button>Github</Button>
            </A>
            <div className="font serif text-sky-600">CheckOut code</div>
          </div>
          <div>
            <A href="https://www.codeyogi.com">
              <Button>Replit</Button>
            </A>
            <div className="font-serif text-sky-600">Checkout App</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
