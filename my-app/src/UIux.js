import React from "react";
import ui from "./images/user-interface.png";
import { DiPhotoshop } from "react-icons/di";
import { SiCoreldraw } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
const icons = [
  { component: DiPhotoshop, name: "samsunggear", title: "Photoshop" },
  { component: SiAdobeillustrator, name: "smartwatch", title: "Illustrator" },
  { component: SiCoreldraw, name: "mobile", title: "CorelDRAW" },
];
export default function Uiux() {
  return (
    <div className="container mx-auto lg:p-10 lg:py-8 bg-stone-400">
      <div className="container mx-auto p-6 lg:py-6 bg-stone-400">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-wrap lg:p-6 mb-4 lg:mb-0 lg:ml-4 lg:mr-4">
            <img src={ui} alt="Tablet" className="w-64 md:w-96 mx-auto" />
          </div>
          <div className="py-5 px-6 lg:px-20 max-w-xl lg:mx-auto">
            <div className="border-l-4 border-blue-600 pl-4">
              <h1 className="text-3xl font-bold text-blue-600">UI/UX Design</h1>
              <p className="mt-2 text-gray-700">
                We have a knack of turning great ideas into meaningful
                interactions with our design-led engineering practices. Starting
                from conceptualization, information architecture, visual
                identity and UX design - our creative process ensures the
                delivery of dazzling experiences for maximum user engagement.
              </p>
            </div>
            <div className="flex flex-wrap pl-0 space-x-4 lg:space-x-6 my-5 lg:mx-auto">
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
              <ul className="list-disc ml-4 lg:grid grid-cols-2 gap-x-2 gap-y-1 lg:space-y-0 space-y-3">
                <li>Wireframes</li>
                <li>Information Architecture</li>
                <li>UI Design</li>
                <li>High / Low fidelity Prototype</li>
                <li>UX Analysis</li>
              </ul>
            </div>
            <div className="pt-6 lg:pt-6">
              <a
                href="ourwork"
                className="text-black py-3 px-4 border border-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-black transition duration-700"
              >
                Explore Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
