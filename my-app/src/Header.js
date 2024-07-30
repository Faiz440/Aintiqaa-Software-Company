import Expertise from "./Expertise";
import Products from "./Products";
import image2 from "./images/main1.png";
import ProjectPlanner from "./ProjectPlanner";
import Industries from "./Industries";
import Clients from "./Clients";
import React, { useState, useEffect } from "react";
export default function Header() {
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
      <div
        className="bg-white bg-cover lg:relative lg:min-h-screen bg-no-repeat relative min-h-screen bg-image bg-center"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
                Idea! That you can arise with
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Serving Unified Technology To The Digital World Across Mobile,
                Web & Cloud 'To The Great Ideas' 'To The Global Startup' 'To The
                Enterprise Companies'
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="ourwork"
                  className="mt-3 px-3.5 py-3.5 text-me  text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-yellow-600  border border-white  font-semibold rounded hover:text-white transition duration-700"
                >
                  Explore Work
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
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
      <Expertise />
      <Products />
      <ProjectPlanner />
      <Industries />
      <Clients />
    </>
  );
}
