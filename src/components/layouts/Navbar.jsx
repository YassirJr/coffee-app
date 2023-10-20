import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
  const [scroll, setscroll] = useState(0)
  window.addEventListener('scroll', () => {
    setscroll(window.scrollY)
  })
  return (
    <header className={`${scroll > 50 ? "bg-amber-900 h-20" : "bg-transparent h-24"} transition-all backdrop-blur-lg shadow-lg  fixed z-50 inset-0 hidden md:flex px-24`}>
      <Link
        to="/"
        className="flex-shrink-0 flex items-center justify-center px-4 w-32 lg:px-6 xl:px-8"
      >
        <img className="text-black" src="images/logo.png"  alt="" />
      </Link>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto"></ul>
      </nav>
      <nav className="hidden xl:contents"></nav>
      <div className="flex items-center justify-evenly gap-5 px-4 lg:px-6 xl:px-8">
        <span className="text-white">$0.00</span>
        <button className="text-white">
          <CiShoppingCart size={30} />
        </button>
        <button className="bg-transparent uppercase text-white border border-white font-light px-4 xl:px-6 py-2 xl:py-3 ">
          Login
        </button>
      </div>
    </header>
  );
}

export default Navbar;
