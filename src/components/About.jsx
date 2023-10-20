import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="w-full my-48 px-32 ">
      <div className="flex items-center gap-8">
        <div className="abouting text-start">
          <h1 className="text-7xl tracking-tight font-yeseva font-bold mb-6 ">
            A few <br /> words <br /> about us
          </h1>
          <p className="mb-12 text-gray-500">
            We are the first coffee business in the Morocco,
            <br /> To Source , Blend , Roast and import Italian <br /> coffee,
            Direct from Italie
          </p>
          <Link to="/" className="py-5 px-16 border border-black uppercase transition-all hover:ml-2">
            Read More
          </Link>
        </div>
        <div className="image-1 flex-1 overflow-hidden">
          <img
            src="images/about1.jpg"
            height="100%"
            className="rounded grayscale hover:grayscale-0 transition"
            alt=""
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <img
            src="images/about4.jpg"
            height="100%"
            className="rounded grayscale hover:grayscale-0 transition"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
