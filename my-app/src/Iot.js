import React from "react";
import lot from "./images/iot-images.png";

export default function Iot() {
  return (
    <div className="container mx-auto lg:p-10 lg:py-8 bg-stone-300">
      <div className="container mx-auto p-6 lg:py-6 bg-stone-300">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          <div className="py-5 px-6 lg:px-20 max-w-xl lg:mx-auto">
            <div className="border-l-4 border-blue-600 pl-4">
              <h1 className="text-3xl font-bold text-blue-600">
                IOT Solutions
              </h1>
              <p className="mt-2 text-gray-700">
                Together we can create innovative wireless experiences with the
                modern IoT hardware. We'll enable you to connect to the
                information from these devices with various protocols using
                Bluetooth, RFID, NFC, Wifi and Bonjour. The result is a
                conducive system that empowers your home, workplace, factory or
                warehouse - for smart monitoring, control and management.
              </p>
            </div>
            <div className="p-0 max-w-2xl py-5 lg:py-5">
              <ul className="list-disc ml-4 lg:grid lg:gap-x-6 lg:gap-y-4 lg:grid-cols-2 gap-x-2 lg:space-y-0 space-y-3">
                <li>Home Automation</li>
                <li>Surveillance Systems</li>
                <li>Industrial Automation</li>
                <li>Access / Identity Control</li>
              </ul>
            </div>
            <div className="pt-2 lg:pt-2">
              <a
                href="ourwork"
                className="text-black py-3 px-4 border border-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-black transition duration-700"
              >
                Explore Work
              </a>
            </div>
          </div>
          <div className="flex flex-wrap lg:p-8 mb-4 lg:mb-0 lg:ml-4 lg:mr-4">
            <img src={lot} alt="Tablet" className="w-64 md:w-96 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
