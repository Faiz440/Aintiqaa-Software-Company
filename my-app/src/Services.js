import React from "react";
import { useState, useEffect } from "react";
import service from "./images/services.png";
import Mobile from "./Mobile";
import Web from "./Web";
import Watch from "./Watch";
import Uiux from "./UIux";
import Iot from "./Iot";
import { Helmet } from "react-helmet-async";
export default function DigitalTransformation() {
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
        <title>Web Application Development, Mobile Application Development, Branding & Promotions</title>
        <meta name="description" content="Providing customized solutions for Mobile Application Development, Websites, and UI / UX across various industries with the latest tools and technology." />
        <meta property="og:title" content="Web Application Development, Mobile Application Development, Branding &amp; Promotions"></meta>
        <meta property="og:description" content="Providing customized solutions for Mobile Application Development, Websites, and UI / UX across various industries with the latest tools and technology."></meta>
        <meta property="og:url" content="http://aintiqaa.com/"></meta>
      </Helmet>
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center bg-stone-400">
        <div className="md:w-1/2 p-14">
          <img
            src={service}
            alt="Digital Transformation"
            className="w-auto h-auto"
          />
        </div>
        <div className="md:w-1/2 lg:p-14 text-center md:text-left lg:max-w-xl">
          <h1 className="text-4xl font-bold text-blue-600">
            Digital Transformation of your perspective
          </h1>
          <p className="mt-4 text-gray-700">
            Seeing the clients passionate about their idea makes us excited.
            We're sure we can result in a faster, better, more efficient and
            cost-effective way to deliver products, and services.
          </p>
          <div className="mt-8 mb-5">
            <a
              href="ourwork"
              className=" text-black py-4 px-4 border border-blue-600 font-semibold rounded hover:bg-yellow-400 hover:text-black transition duration-700"
            >
              Explore Work
            </a>
          </div>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 animate-bounce bg-indigo-600 text-white rounded-full p-4 shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}

      <Mobile />
      <Web />
      <Watch />
      <Uiux />
      <Iot />
    </>
  );
}
