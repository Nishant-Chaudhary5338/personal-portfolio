import React from "react";

function A(props) {
    return (
        <a target="_blank" href={props.href}>{props.children }</a>
    );
}

export default A;