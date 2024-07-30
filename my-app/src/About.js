import React from "react";
import { useState, useEffect } from "react";
import banner from "./images/baaner.png";
import Apart from "./Apart";
import Global from "./Global";
import Mission from "./Mission";
import MainClinet from "./MainClinet";
import Culture from "./Culture";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
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
          About Aintiqaa Technologies | Mobile, Cloud and Web Solutions Provider
        </title>
        <meta
          name="A company runs by folks, ideas, and a great culture. Housing talented tech experts who deliver extraordinary results for Mobile Application and Responsive Website Development"
          content="Learn more about us on this page."
        />
        <meta
          property="og:title"
          content="About Aintiqaa Technologies | Mobile, Cloud and Web Solutions Provider"
        ></meta>
      </Helmet>

      <div
        className="bg-white bg-cover  max-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center container  px-12 py-18 mx-auto ">
          <h1 className="text-7xl font-bold mb-4 text-white">
            Idea! That you can arise with
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Serving Unified Technology To The Digital World Across Mobile, Web &
            Cloud <br />
            The Great Ideas To The Global Startup To The Enterprise Companies
          </p>
          <div className="lg:py-12 py-5">
            <button className=" mt-3 px-3.5 py-3.5 text-me  text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-yellow-600  border border-white  font-semibold rounded hover:text-white transition duration-700">
              <a href="ourwork">Explore Work</a>
            </button>
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
      <Mission />
      <Apart />
      <Global />
      <MainClinet />
      <Culture />
    </>
  );
}
