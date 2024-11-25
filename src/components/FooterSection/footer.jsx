import React from "react";
import Navbar from "../Navbar";

function footer() {
  return (
    <>
      <div className="flex justify-around items-center bg-blue-300 mt-24">
        <div>
            <h1 className="text-cyan-500 font-medium text-[30px]" >About Us</h1>
            <p>We take pride in our customer service exprience  </p>
                
        </div>
        <div>
            <h1 className="text-cyan-500 font-medium text-[30px]">Quick</h1>
             <p>Features</p>
             <p>About</p>

        </div>
        <div >
            <h1 className="text-cyan-500 font-medium text-[30px]" >Contact Us</h1>
            <p>Email: ratneshReactrouter.com</p>
            <p>phone +91782872642</p>
            <p>Address: Bihar Sasaram</p>
        </div>
      </div>
    </>
  );
}

export default footer;
