import React from "react";
import maps from "./images/map.png";
export default function Global() {
  return (
    <div className=" bg-stone-400 lg:py-12 lg:px-14 py-5">
      <div className="">
        <div className="">
          <h2 className="text-4xl lg:px-14 px-10 text-blue-500 font-bold ">
            Global Yet Local
          </h2>
          <p className="text-gray-600 px-12 lg:px-14 max-w-md mt-4  font-semibold">
            Served more than 40+ clients in 10+ countries
          </p>
        </div>
        <div className=" lg:ml-24 px-12 mt-7 lg:px-24">
          <img
            className="h-60 w-[400px]  lg:w-full lg:h-full"
            src={maps}
            alt="map"
          />
        </div>
      </div>
    </div>
  );
}
