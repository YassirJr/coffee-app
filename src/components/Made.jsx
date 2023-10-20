import React from "react";
import { MADE } from "../constants";

function Made(props) {
  return (
    <div className="w-full p-5 py-20 relative bg-gray-200">
      <h1 className="text-6xl mb-6 font-yeseva">
        See how your coffee are made
      </h1>
      <p className="text-gray-500 mb-9 text-lg font-light">
        here are four main steps involved in making coffee
      </p>
      <div className="flex justify-center items-center relative">
        <div className="p-16 w-1/3 relative ">
          <div className=" border border-amber-700 overflow-hidden">
            <img src="images/made2.jpg" className="scale-150" alt="" />
          </div>
          <span className="absolute -left-2 top-20  w-12 h-12 flex items-center justify-center font-bold  bg-amber-900 text-white">
            1
          </span>
          <span className="absolute -left-2 bottom-20 w-12 h-12 flex items-center justify-center font-bold  bg-amber-900 text-white">
            2
          </span>
          <span className="absolute -right-2 top-20 w-12 h-12 flex items-center justify-center font-bold  bg-amber-900 text-white">
            3
          </span>
          <span className="absolute -right-2 bottom-20 w-12 h-12 flex items-center justify-center font-bold  bg-amber-900 text-white">
            4
          </span>
        </div>
        {
          MADE.map((item, index) => (
            <div className={`absolute w-[270px] border border-amber-900 py-5 px-5 ${item.style}`}>
              <span className="text-amber-700 font-extrabold text-base">{item.id}</span>
              <h1 className="text-3xl my-2 font-semibold font-cairo">{item.title}</h1>
              <p className="text-gray-500">
                {item.description}
              </p>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default Made;
