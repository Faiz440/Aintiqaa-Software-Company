import React from "react";
import web from "./images/web-development.png";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import {
  FaPhp,
  FaWordpress,
  FaHtml5,
  FaBootstrap,
  FaCss3Alt,
} from "react-icons/fa";
const icons = [
  { component: FaPhp, name: "php", title: "PHP" },
  { component: FaWordpress, name: "wordpress", title: "Wordpress" },
  { component: FaHtml5, name: "html5", title: "HTML5" },
  { component: DiCodeigniter, name: "opencart", title: "Codeigniter" },
  { component: SiMysql, name: "ruby", title: "MySQL" },
  { component: FaBootstrap, name: "bootstrap", title: "Bootstrap" },
  { component: FaCss3Alt, name: "css3", title: "CSS3" },
  { component: TbBrandJavascript, name: "JavaScript", title: "javascript" },
];
export default function Web() {
  return (
    <div className="container mx-auto lg:p-10 lg:py-8 bg-stone-400">
      <div className="container mx-auto p-6 lg:py-6 bg-stone-400">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-wrap lg:p-6 mb-4 lg:mb-0 lg:ml-4 lg:mr-4">
            <img src={web} alt="Tablet" className="w-64 md:w-96 mx-auto" />
          </div>
          <div className="py-5 px-6 lg:px-20 max-w-xl lg:mx-auto">
            <div className="border-l-4 border-blue-600 pl-4">
              <h1 className="text-3xl font-bold text-blue-600">
                Web Development
              </h1>
              <p className="mt-2 text-gray-700">
                The web is here to stay. We've been working with robust and
                popular web technologies for just about two decades, and it's
                something we still love doing today. Whether creating a web
                presence for your company, an information hub for your business
                or empowering your apps / IoT devices through backend - we cover
                a wide spectrum of solutions and frameworks by leveraging the
                power of the internet.
              </p>
            </div>
            <div className="flex flex-wrap pl-0 space-x-4 lg:space-x-4 my-5 lg:mx-auto">
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
                <li>CRM Application</li>
                <li>E-Commerce</li>
                <li>ERP Software</li>
                <li>Mobile Backend / API Development</li>
                <li>Content Management System</li>
                <li>Full Stack Development Teams</li>
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
