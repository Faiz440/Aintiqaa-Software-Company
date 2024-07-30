import React from "react";
import { useState, useEffect } from "react";
import Escalaa from "./Escalaa";
import Elunicaa from "./Elunicaa";
import Garage from "./Garage";
import Room from "./Room";
import Banquet from "./Banquet";
import Dormitory from "./Dormitory";
import Feedback from "./Feedback";
import { Helmet } from "react-helmet-async";
function Ourproduct() {
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
          Enterprise Mobile & Web Applications developed by Aintiqaa
          Technologies
        </title>
        <meta
          content="Aintiqaa Technologies - Enterprise mobile and web application solutions provider company, We develop a variety of mobile applications across numerous platforms."
          name="Learn more Enterprise on this page."
        />
        <meta
          property="og:title"
          content="Enterprise Mobile &amp; Web Applications developed by Aintiqaa Technologies"
        ></meta>
        <meta
          property="og:description"
          content="Aintiqaa Technologies - Enterprise mobile and web application solutions provider company, We develop a variety of mobile applications across numerous platforms."
        ></meta>
        <meta property="og:url" content="http://aintiqaa.com/"></meta>
      </Helmet>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 animate-bounce bg-indigo-600 text-white rounded-full p-4 shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}
      <Garage />
      <Escalaa />
      <Elunicaa />
      <Room />
      <Banquet />
      <Dormitory />
      <Feedback />
    </>
  );
}

export default Ourproduct;
