import React from "react";
import { DiCodeigniter } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BsAndroid2 } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";
import { IoFitness } from "react-icons/io5";
import { IoLogoIonic } from "react-icons/io5";
import { GiSunglasses } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";
import { PiSketchLogoLight } from "react-icons/pi";
import { DiPhotoshop } from "react-icons/di";
import { SiAdobeillustrator } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";
import { SiCoreldraw } from "react-icons/si";
import { SiGooglecloudspanner } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import {
  FaPhp,
  FaJava,
  FaWordpress,
  FaLaravel,
  FaMagento,
  FaHtml5,
  FaAngular,
  FaNode,
  FaApple,
  FaBootstrap,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiDotnet, SiMongodb } from "react-icons/si";

const icons = [
  { component: FaPhp, name: "php", title: "PHP" },
  { component: SiDotnet, name: "dotnet", title: "Dotnet" },
  { component: FaJava, name: "java", title: "Java" },
  { component: FaWordpress, name: "wordpress", title: "Wordpress" },
  { component: FaLaravel, name: "joomla", title: "Laravel" },
  { component: FaMagento, name: "magento", title: "Magento" },
  { component: FaHtml5, name: "html5", title: "HTML5" },
  { component: SiMongodb, name: "mongo", title: "MongoDB" },
  { component: FaAngular, name: "angular", title: "Angular" },
  { component: FaNode, name: "nodejs", title: "Node.js" },
  { component: DiCodeigniter, name: "opencart", title: "Codeigniter" },
  { component: SiMysql, name: "ruby", title: "MySQL" },
  { component: FaApple, name: "photoshop", title: "Apple" },
  { component: BsAndroid2, name: "illustrator", title: "Android" },
  { component: IoLogoIonic, name: "indesign", title: "Ionic" },
  { component: PiSketchLogoLight, name: "aftereffects", title: "Sketch" },
  { component: DiPhotoshop, name: "samsunggear", title: "Photoshop" },
  { component: SiAdobeillustrator, name: "smartwatch", title: "Illustrator" },
  { component: FaInvision, name: "smartglasses", title: "Invision" },
  { component: SiCoreldraw, name: "mobile", title: "CorelDRAW" },
  { component: SiGooglecloudspanner, name: "google-cloud", title: "Google Cloud" },
  { component: FaBootstrap, name: "bootstrap", title: "Bootstrap" },
  { component: FaCss3Alt, name: "css3", title: "CSS3" },
  { component: FaJsSquare, name: "javascript", title: "JavaScript" },
  { component: BsSmartwatch, name: "Smartwatch", title: "Smartwatch" },
  { component: FaFigma, name: "Figma", title: "Figma" },
  { component: IoFitness, name: "Fitness", title: "Fitness" },
  { component: GiSunglasses, name: "Google Glass", title: "Google Glass" },
  { component: GiMechanicGarage, name: "GMS", title: "GMS" },
  { component: SiKotlin, name: "Kotlin", title: "Kotlin" },
];

export default function ProjectPlanner() {
  return (
    <>
      <section className="bg-stone-400 py-5">
      <div className="container  lg:mx-auto lg:py-12 px-4 lg:px-12 ">
        <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4 duration-700">
          {icons.map((icon) => (
            <Icon key={icon.name} icon={icon.component} title={icon.title} />
          ))}
        </div>
        <div className="bg-white py-12 px-12 mt-12 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Project Planner
          </h2>
          <p className="text-gray-600 mb-4">
            Use our project planner to estimate the deliverables and pricing for
            your product needs.
          </p>
          <button className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition duration-700">
            <a href="about">
            Inquiry Now 
            </a>
          </button>
        </div>
      </div>
      </section>
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
