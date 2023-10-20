import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen  w-full bg-white relative">
      <img src="images/home.jpg" className="absolute -z-0 rotate-180" alt="" />
      <div className="flex mx-36 justify-start h-screen items-center overflow-hidden relative bg-transparent">
        <div className="text-start">
          <h1 className="text-6xl tracking-tight font-yeseva font-bold mb-6">
            all you need to feel <br /> better is coffee
          </h1>
          <p className="pb-10">
            there are people who can't start their day without having a <br />
            freshly brewed cup of coffee. They love coffee so much that <br />{" "}
            sometimes they call themselves "coffee addicts". And we <br />
            understand that all too well.
          </p>
          <Link
            to=""
            className="bg-amber-800 uppercase py-5 px-16 text-white hover:bg-transparent border hover:border-amber-700 hover:text-amber-700 transition "
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
