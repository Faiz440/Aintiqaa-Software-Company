import React from "react";
import { useState, useEffect } from "react";
import ourwork from "./images/work-hero-image.png";
import Portfolio from "./Portfolio";
import { Helmet } from "react-helmet-async";

export default function Ourwork() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Portfolio and Case Studies of Mobile and Web Application Developed by
          Aintiqaa Technologies
        </title>
        <meta
          name="description"
          content="Read our success stories for mobile application development, web application development projects. Take a brief overview of customized solutions for our clients."
        />
        <meta
          property="og:title"
          content="Portfolio and Case Studies of Mobile and Web Application Developed by Aintiqaa Technologies"
        ></meta>
        <meta
          property="og:description"
          content="Read our success stories for mobile application development, web application development projects. Take a brief overview of customized solutions for our clients."
        ></meta>
        <meta property="og:url" content="http://aintiqaa.com/"></meta>
      </Helmet>
      <div>
        <div className="container mx-auto p-8 flex flex-col md:flex-row items-center bg-stone-400">
          <div className="md:w-1/2 p-14">
            <img
              src={ourwork}
              alt="Digital Transformation"
              className="w-auto h-auto"
            />
          </div>
          <div className="md:w-1/2 lg:p-14 text-center md:text-left lg:max-w-xl">
            <h1 className="text-4xl font-bold text-blue-600">
              Solution delivered beyond the idea
            </h1>
            <p className="mt-4 text-gray-700">
              Served Unified Technology To The Digital World Across Mobile, Web
              & Cloud 'To The Great Ideas' 'To The Global Statup' 'To The
              Enterprise Companies'
            </p>
            <div className="mt-8 mb-5">
              <a
                href="ourwork"
                className=" text-white py-4 px-4 border border-blue-600 font-semibold rounded hover:bg-yellow-400 hover:text-white transition duration-700"
              >
                Explore Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 z-10 right-10 animate-bounce bg-indigo-600 text-white rounded-full p-4 shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}

      <Portfolio />
    </>
  );
}
