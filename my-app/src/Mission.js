import React, { useEffect } from "react";

export default function Mission() {
  useEffect(() => {
    const counters = document.querySelectorAll(".count-up");

    counters.forEach((counter) => {
      counter.style.visibility = "visible";
      const updateCount = () => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;
        const increment = (target - count) / 90;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 60);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div>
      <div className="container flex-col items-center lg:px-12 px-4 py-5 lg:py-12 mx-auto ">
        <section className="  text-black py-1 0-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="max-w-3xl lg:max-w-5xl">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h2 className="text-5xl font-bold lg:mb-7 lg:ml-20  text-blue-500">
                    About Us
                  </h2>
                  <p className="text-gray-600  text-lg lg:ml-20 lg:mt-7 mt-5 font-semibold">
                    At Aintiqaa Technologies, We develop innovative and creative
                    products and services that provide total communication and
                    information solutions. Among a plethora of services, web
                    design and development, tailor made applications, CRMs,
                    e-commerce solutions, business-to-business applications,
                    business-to-client applications, managed hosting and
                    internet portal management are few that we offer. Satisfied
                    clients around the globe bear testimony to the quality of
                    our work.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div>
                <h2 className="text-5xl font-bold mb-7 text-blue-500 lg:ml-20">
                  Our Mission
                </h2>
                <p className="text-gray-600 max-w-md lg:ml-20 mt-7 font-semibold">
                  Our mission is to enhancing the business growth of our
                  customers with creative Design and Development to deliver
                  market-defining high-quality solutions that create value and
                  reliable competitive advantage for our clients around the
                  world. Our mission is to deliver optimal solutions with
                  quality and services at reasonable prices. For us customer
                  satisfaction is given top place. We are very friendly in our
                  dealings to the customers and it helps us retain existing
                  clients and expand customer circle. We always try to improve
                  the quality of our products by exploring innovative ideas.
                </p>
              </div>
              <div>
                <h2 className="text-5xl font-bold mb-7 text-blue-500 lg:ml-20">
                  Our Story
                </h2>
                <p className="text-gray-600 max-w-md lg:ml-20 mt-7 font-semibold">
                  Aintiqaa Technologies was established in 2018 as a IT support
                  and digital marketing company providing affordable IT &
                  digital services to small to the large-size businesses across
                  the world. We provide our clients with highly reliable, secure
                  and scalable business solutions as per their needs. Our work
                  culture while working with Aintiqaa Technologies, we give
                  freedom to our employees where they experiment and enhance
                  their skill set, to offer better value to each client that
                  they work for. We give our employees ample opportunity to
                  grow.
                </p>
              </div>
              <div className="justify-center mb-4">
                <ul className="flex lg:ml-16 mt-4 justify-between animate-bounce">
                  <li className="text-5xl font-bold text-gray-600">
                    <span className="count-up" data-count="1">
                      0
                    </span>
                    +<em className="ml-2 text-blue-500 text-lg block">YEARS</em>
                  </li>
                  <li className="text-5xl font-bold text-gray-600">
                    <span className="count-up" data-count="10">
                      0
                    </span>
                    +<em className="ml-2 text-blue-500 text-lg block">TEAM</em>
                  </li>
                  <li className="text-5xl font-bold text-gray-600">
                    <span className="count-up" data-count="20">
                      0
                    </span>
                    +
                    <em className="ml-2 text-blue-500 text-lg block">
                      SOLUTIONS
                    </em>
                  </li>
                  <li className="text-5xl font-bold text-gray-600">
                    <span className="count-up" data-count="40">
                      0
                    </span>
                    +
                    <em className="ml-2 text-blue-500 text-lg block">
                      CLIENTS
                    </em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
