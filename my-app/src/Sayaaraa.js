import React, { useState } from "react";
import images1 from "./images/ok.png";
import images2 from "./images/hos.png";
import Request from "./Request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const lists = [
    {
      Sayaaraa_Automotive: {
        title: "Garage Management System",
        description:
          "To provide Excellent digital platform for Garages that helps them to manage and reduce the administration works & time of the Garages and growing their business.",
        features: [
          { name: "Easy Job card & Invoice" },
          { name: "TAX Compliant" },
          { name: "Stock Management" },
          { name: "Reporting" },
          { name: "Auto Repair Estimation" },
          { name: "Service Reminders" },
          { name: "Vehicle Booking and Tracking" },
        ],
        img: images1,
      },
    },
    {
      ElUnicaa_Hospitality: {
        title: "Hotel Management System",
        description:
          "A cloud-based software that helps to manage all front office operations of Hotel at ease.Very easy to use and configurable as per propertySingle click Reservation, Check-In & Check-Out operation.Monthly, Yearly reports & SMS Alerts.Group Check In, Direct Billing.",
        features: [
          { name: "Reservation" },
          { name: "Direct Billing" },
          { name: "Check-in & Check-out" },
          { name: "Bill Position" },
          { name: "Receipt" },
          { name: "Reports" },
        ],
        img: images2,
      },
    },
  ];

  const [selectedList, setSelectedList] = useState(lists[0]);
  const [selectedImage, setSelectedImage] = useState(images1);

  const handleListClick = (list) => {
    setSelectedList(list);
    setSelectedImage(list[Object.keys(list)[0]].img);
  };

  const [loginOpen, setLoginOpen] = useState(false);
  function closeLoginModal() {
    setLoginOpen(false);
  }

  return (
    <>
      <div className="mt-8 px-4 lg:px-0">
        <div className="flex flex-row lg:flex-row justify-center lg:justify-start lg:space-x-9 mb-10 space-y-1 lg:space-y-0">
          {lists.map((list, index) => (
            <h3
              key={index}
              className={`${
                selectedList === list
                  ? "text-blue-600 border-b-2 border-blue-600 hover:text-black"
                  : "text-blue-600 border-b-2 border-gray-600 hover:text-black"
              } hover:border-blue-500 font-semibold cursor-pointer lg:ml-44 px-6`}
              onClick={() => handleListClick(list)}
            >
              {Object.keys(list)[0].replace(/_/g, " ")}
            </h3>
          ))}
        </div>
        <div className="lg:flex lg:justify-between lg:ml-44 px-6">
          <div className="lg:w-1/2">
            <h3 className="text-2xl lg:text-4xl font-bold text-blue-600">
              {selectedList[Object.keys(selectedList)[0]].title}
            </h3>
            <p className="mt-4 text-gray-600 max-w-md">
              {selectedList[Object.keys(selectedList)[0]].description}
            </p>
            <ul className="mt-4 list-none space-y-2">
              {selectedList[Object.keys(selectedList)[0]].features.map(
                (feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="material-symbols-outlined text-green-500 mr-2">
                      check
                    </span>
                    <span className="text-gray-600">{feature.name}</span>
                  </li>
                )
              )}
            </ul>

            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => setLoginOpen(true)}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center border border-gray-400 transition duration-700 ease-in-out transform hover:border-blue-600 hover:bg-gray-300 hover:scale-150"
              >
                <span>
                  <FontAwesomeIcon
                    icon={faApple}
                    className="text-gray-700 h-7 w-7"
                    title="ios"
                  />
                </span>
              </button>

              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center border border-gray-400 transition duration-700 ease-in-out transform hover:border-blue-600 hover:bg-gray-300 hover:scale-150">
                <a href="https://play.google.com/store/apps/details?id=com.sayaaraa&hl=en">
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className="text-gray-700 h-6 w-6"
                    title="Android"
                  />
                </a>
              </button>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center border border-gray-400 transition duration-700 ease-in-out transform hover:border-blue-600 hover:bg-gray-300 hover:scale-150">
                <a href="https://sayaaraa.com/sayaaraa_qa/u">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-gray-700 h-6 w-6"
                    title="Web"
                  />
                </a>
              </button>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:flex lg:justify-center lg:items-center">
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-lg shadow-lg max-w-full lg:max-w-md animate-pulse"
            />
          </div>
        </div>
      </div>

      {loginOpen && <Request open={loginOpen} onClose={closeLoginModal} />}
    </>
  );
};

export default Products;
