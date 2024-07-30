import React from "react";
import go from "./images/go.png";
import seva from "./images/sevai.png";
import Nishtha from "./images/nistha.png";
import Amenity from "./images/am.png";
import Ayman from "./images/ayman.png";
import Packaging from "./images/packing.png";
import Group from "./images/falm.png";
import Satkar from "./images/satkar.png";
import City from "./images/citypoint.png";
import client from "./images/client.png";
const clients = [
  { name: "GO Garage", logo: go },
  { name: "Vaahan Seva", logo: seva },
  { name: "Nishtha", logo: Nishtha },
  { name: "Amenity", logo: Amenity },
  { name: "Ayman Residency", logo: Ayman },
  { name: "Pleasant Packaging", logo: Packaging },
  { name: "Flamboyant Group", logo: Group },
  { name: "Hotel Satkar", logo: Satkar },
  { name: "City Point", logo: City },
];

export default function Clients() {
  return (
    <section className=" bg-stone-400">
      <div className="container flex-col items-center px-12 py-12  ">
        <div className="max-w-6xl">
          <div className=" lg:mx-36 ">
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className=" container text-4xl font-bold mb-4 text-blue-600 ">
                Clients
              </h2>
              <p className="container text-gray-600 lg:max-auto lg:max-w-2xl">
                An innovative smartphone app is a cloud-based solution which
                helps monitor and organize key factors like employees location.
                This automatically reduces time consumption of information
                gathering.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:space-x-1 lg:max-w-7xl lg:py-6">
            <div className="lg:pl-16 py-6 px-10">
              <img
                src={client}
                alt="Handshake"
                className="lg:w-52 lg:h-52 w-72 h-72 lg:py-0 lg:ml-24 rounded-xl"
              />
            </div>

            <div className=" lg:grid-cols-3 lg:gap-x-12 grid grid-cols-3 lg:pl-20 gap-y-12 gap-x-4 px-0">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className=" container flex items-center justify-center p-1 lg:pl-10 rounded lg:w-40 lg:h-12"
                >
                  <img src={client.logo} alt={client.name} className="" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="pt-6 text-center">
              <button className="px-2 py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition duration-700">
                <a href="about">Our Client</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
