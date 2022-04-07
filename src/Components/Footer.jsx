import React from "react";

function Footer() {
    return (
        <div className="flex text-white justify-between px-20 border-t py-6 border-white bg-black">
            <div>
                All rights reserved <img className="h-8 inline" src="https://img.icons8.com/fluency/48/000000/creative-commons-all-rights-reserved.png"/> Nishant-CodeYogi 2022
            </div>
            <div>
                Made with <img className="h-8 inline" src="https://img.icons8.com/color/48/000000/filled-like.png"/> at Codeyogi
            </div>
        </div>
    );
}

export default Footer;