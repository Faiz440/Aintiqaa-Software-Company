import React from "react";

export default function Apart() {
  return (
    <>
      <div className="container px-6 lg:px-0 py-5 lg:py-10">
        <div>
          <h2 className="text-4xl font-bold text-blue-600 my-6 lg:my-8 lg:mx-40 whitespace-nowrap">
            What sets us apart?
          </h2>
          <div className="text-black  px-0 lg:px-40">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=" max-w-4xl">
                  <h3 className="text-xl font-semibold mb-4">
                    <li className=" to-blue-900"> Driven by Excellence </li>
                  </h3>
                  <p className="container text-gray-600  ml-7 mt-3 font-semibold">
                    Our commitment to delivering only the best at every stage of
                    the product development process, from planning to delivery,
                    to unlock maximum value.
                  </p>
                </div>
                <div className=" max-w-4xl">
                  <h3 className="text-xl font-semibold mb-2">
                    <li className=" to-blue-900">
                      Focused and Passionate Team
                    </li>
                  </h3>
                  <p className="container text-gray-600  ml-7 mt-3 font-semibold">
                    A skilled and experienced team of engineers, designers and
                    product managers that are driven by the company's mission to
                    spread digital happiness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <li className=" to-blue-900">
                      Strong Relationships and Culture
                    </li>
                  </h3>
                  <p className="container text-gray-600  ml-7 mt-3 font-semibold">
                    Honesty, transparency, and consistency are the underlying
                    values in our relationship with the clients to instill trust
                    and be trusted.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <li className=" to-blue-900">Innovation and Creativity</li>
                  </h3>
                  <p className="container text-gray-600  ml-7 mt-3 font-semibold">
                    Our relentless efforts to stay on top of the latest
                    technology trends and consistently think out of the box for
                    each project we work on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
