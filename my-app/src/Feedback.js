import React, { useState } from "react";
import pro from "./images/feedback-management-system.png";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Example from "./Request";
const icons = [
  { component: FaApple, name: "photoshop", title: "Apple" },
  { component: BsAndroid2, name: "illustrator", title: "Android" },
  { component: CgWebsite, name: "web", title: "Web" },
];
export default function Feedback() {
  const [loginOpen, setLoginOpen] = useState(false);
  function closeLoginModal() {
    setLoginOpen(false);
  }
  return (
    <>
      <div className="container mx-auto lg:p-10 lg:py-8 bg-stone-400">
        <div className="container mx-auto p-6 lg:py-6 bg-stone-400">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-wrap lg:p-8 mb-4 lg:mb-0 lg:ml-4 lg:mr-4">
              <img src={pro} alt="Tablet" className="w-64 md:w-96 mx-auto" />
            </div>
            <div className="py-5 px-6 lg:px-20 max-w-xl lg:mx-auto">
              <div className="border-l-4 border-blue-600 pl-4">
                <h1 className="text-2xl font-bold text-blue-600">
                  Elunicaa - Feedback Management System
                </h1>
                <p className="mt-2 text-gray-700">
                  Capture guest and customer feedback at hotels and resorts on
                  premises, through tablet feedback app, online and through
                  email surveys and SMS surveys.
                </p>
              </div>
              <div
                className="flex flex-wrap pl-0 space-x-4 lg:space-x-4 my-5 lg:mx-auto"
                onClick={() => setLoginOpen(true)}
              >
                <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {icons.map((icon) => (
                    <Icon
                      key={icon.name}
                      icon={icon.component}
                      title={icon.title}
                    />
                  ))}
                </div>
              </div>
              <div className="p-0 max-w-2xl">
                <ul className="list-disc ml-4 lg:grid lg:gap-x-6 lg:gap-y-4 grid-cols-2 gap-x-2 gap-y-1 lg:space-y-0 space-y-3">
                  <li>Get real-time feedback</li>
                  <li>Online & Web Surveys</li>
                  <li>Email & SMS Surveys</li>
                  <li>Multilingual</li>
                  <li>Track staff performances</li>
                </ul>
              </div>
              <div className="pt-6 lg:pt-6">
                <a
                  href="ourwork"
                  className="text-white py-3 px-4 border border-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition duration-700"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loginOpen && <Example open={loginOpen} onClose={closeLoginModal} />}
    </>
  );
}

const Icon = ({ icon: IconComponent, title }) => (
  <div className="relative flex flex-col items-center p-4 border border-gray-300 rounded hover:shadow-lg transition group transform hover:scale-110 duration-300">
    <IconComponent className="h-12 w-12 text-gray-700" />
    <div className="absolute bottom-full mb-2  flex-col items-center hidden group-hover:flex">
      <span className="relative z-10 p-2 text-xl leading-none text-black whitespace-no-wrap bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {title}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
    </div>
  </div>
);
