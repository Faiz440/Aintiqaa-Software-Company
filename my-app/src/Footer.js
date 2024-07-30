import React from "react";

export default function Footer() {
  return (
    <>
      <section className=" bg-stone-200">
        <footer className=" text-gray-600 lg:py-4 py-5 px-7 lg:mx-auto">
          <div className="">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-blue-600">
                Tell us your Idea
              </h2>
              <p className="mt-4 max-w-xl mx-auto">
                As our lives speed up, the evolution of technology is also
                moving too fast. Got a great idea to start doing something new
                or different? Tell us about your idea, and we're sure we can
                results in a faster, better, more efficient and cost-effective
                way to deliver products, and services.
              </p>
              <button className="mt-6 px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition duration-700">
                <a href="inquirenow">CONTACT US</a>
              </button>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-32 mx-6">
              <div className="mb-6 md:mb-0">
                <h3 className="font-semibold mb-2 text-lg">Company</h3>
                <ul className="text-lg">
                  <li>
                    <a
                      href="about"
                      className="hover:underline"
                      title="About us"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="ourproduct"
                      className="hover:underline"
                      title="Our product"
                    >
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="services"
                      className="hover:underline"
                      title="Services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="ourwork"
                      className="hover:underline"
                      title="Our work"
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="inquirenow"
                      className="hover:underline"
                      title="Contact Us"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="sitemap" className="hover:underline" title="Sitemap">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mb-auto">
                <h3 className="font-semibold mb-2 text-lg">Solutions</h3>
                <ul className="text-lg">
                  <li>
                    <a
                      href="https://sayaaraa.com/"
                      className="hover:underline"
                      title="Sayaaraa Garage Management System"
                    >
                      Garage Management System
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://okmechanic.com/"
                      className="hover:underline"
                      title="Okmechanic Services Management System"
                    >
                      Services Management System
                    </a>
                  </li>
                  <li>
                    <a href="404" className="hover:underline" title="Not work">
                      Hospitality Management System
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:mb-5 md:mb-0  mb-5">
                <h3 className="font-semibold mb-2 text-lg lg:mx-1">INDIA</h3>
                <address className="not-italic lg:mx-auto text-lg ">
                  1st Floor, Grace Plaza,
                  <br />
                  behind Marvel Jewellers,
                  <br />
                  Chhapi, Gujarat 385210
                </address>
              </div>
              <div className="text-lg">
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p>
                  <a href="tel:+91 9737525783" className="hover:underline">
                    +91 9737525783
                  </a>
                </p>
                <p>
                  <a href="tel:+91 8511669592" className="hover:underline">
                    +91 8511669592
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-10 lg:flex lg:justify-between mx-0 items-center text-md text-gray-600 border-t border-black whitespace-nowrap">
              <p>© 2024 <b>Faiz Mohammad.</b> All Rights Reserved.</p>
              <div className="flex space-x-5 lg:text-gray-500 text-lg mx-0 mt-2">
                <a
                  href="https://www.linkedin.com/company/aintiqaa-technologies/"
                  className="border lg:border-gray-300 border-black rounded-full p-2 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-shadow duration-700"
                >
                  <i
                    className="fab fa-linkedin"
                    title="Contact us at linkedin"
                  ></i>
                </a>
                <a
                  href="https://okmechanic.com/"
                  className="border lg:border-gray-300 border-black rounded-full p-2 hover:text-yellow-600 hover:border-yellow-600 hover:shadow-lg transition-shadow duration-700"
                >
                  <i className="fab fa-google" title="Contact us at Google"></i>
                </a>
                <a
                  href="https://www.facebook.com/OkMechanicSoftware"
                  className="border lg:border-gray-300 border-black rounded-full p-2 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-shadow duration-700"
                >
                  <i
                    className="fab fa-facebook"
                    title="Contact us at Facebook"
                  ></i>
                </a>
                <a
                  href="https://twitter.com/OkMechanic"
                  className="border lg:border-gray-300 border-black rounded-full p-2 hover:text-black hover:border-black hover:shadow-lg transition-shadow duration-700"
                >
                  <i
                    className="fa-brands fa-x-twitter"
                    title="Contact us at Twitter"
                  ></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UChrpRS5NMtEZoMexY0U6JgA"
                  className="border lg:border-gray-300 border-black rounded-full p-2 hover:text-red-600 hover:border-red-600 hover:shadow-lg transition-shadow duration-700"
                >
                  <i
                    className="fab fa-youtube"
                    title="Contact us at Youtube"
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/ok.mechanic/"
                  className="border lg:border-gray-300 border-black rounded-full p-2 hover:text-red-900 hover:border-red-900 hover:shadow-lg transition-shadow duration-700"
                >
                  <i
                    className="fa-brands fa-instagram"
                    title="Contact us at instagram"
                  ></i>
                </a>
                <a
                  href="https://github.com/Faiz440/Aintiqwebsite-react.js.git"
                  className="border lg:border-gray-300 border-black rounded-full p-2 hover:text-purple-600 hover:border-purple-600 hover:shadow-lg transition-shadow duration-700"
                >
                  <i
                    className="fa-brands fa-github"
                    title="Contact us at github"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
