import React from "react";

import mobilityImage from "./images/mobile.png";
import webImage from "./images/web.png";
import cloudImage from "./images/cloud.png";
import uiuxImage from "./images/ui.png";
import devopsImage from "./images/dev.png";
import testingImage from "./images/test.png";
import analyticsImage from "./images/analy.png";
import iotImage from "./images/internet.png";

const expertiseData = [
  { img: mobilityImage, title: "Mobility", bgColor: "bg-blue-400" },
  { img: webImage, title: "Web", bgColor: "bg-green-400" },
  { img: cloudImage, title: "Cloud", bgColor: "bg-yellow-400" },
  { img: uiuxImage, title: "UI/UX", bgColor: "bg-red-400" },
  { img: devopsImage, title: "DevOps", bgColor: "bg-blue-900" },
  { img: testingImage, title: "Testing", bgColor: "bg-purple-400" },
  { img: analyticsImage, title: "Analytics", bgColor: "bg-gray-400" },
  { img: iotImage, title: "IoT", bgColor: "bg-teal-400" },
];

const services = [
  "Digital Marketing",
  "Team Augmentation",
  "Automation & Manual Testing",
  "Product Discovery/Blueprint",
  "Prototype and MVP Development",
  "User Experience Design",
  "Graphic Branding & Designing",
  "Deployment, DevOps & Integrations",
  "Service Support, Maintenance & Optimization",
  "On-Demand Product Development",
  "Technology, Solution & Architecture Advisory",
  "eCommerce Product Development",
];

const Expertise = () => {
  return (
    <section className="bg-stone-400 py-5 ">
      <div className="lg:py-10"> 
        <div className=" max-w-4xl lg:px-44 px-6">
          <h2 className="text-4xl text-blue-500 font-bold mt-9 lg:mt-8">
            Our Expertise
          </h2>
          <p className="text-gray-600  mt-7 font-semibold">
            Unleashing the power of mobility for businesses across verticals and
            enable digital transformation for forward-thinking organizations.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="grid grid-cols-4 lg:grid-cols-4 gap-x-12 lg:gap-x-24 items-center gap-3 lg:my-5 my-2 px-16">
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center m-4 justify-center gap-2"
              >
                <div
                  className={`flex items-center ${item.bgColor} animate-bounce bg-blue-400 justify-center h-16 w-16 rounded-full border-2 `}
                >
                  <img src={item.img} alt="logo" className="h-9 w-9" />
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
        <div className="grid grid-cols-1 lg:px-4 px-6 lg:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-center font-medium text-lg">
              <span className="material-symbols-outlined text-green-500 mr-2">
                check
              </span>
              <p>{service}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
