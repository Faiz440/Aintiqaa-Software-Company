import React from "react";
import cultureImage from "./images/Our-Culture.png";
import cultureImage1 from "./images/our.png";
import cultureImage2 from "./images/23 23.png";
import Slider from "react-slick";
export default function OurCulture() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 1000,
  };
  const images = [cultureImage, cultureImage1, cultureImage2];
  return (
    <section className="bg-stone-400">
      <div className="">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-0 max-w-7xl lg:px-44">
          <div className="lg:mr-0 lg:py-8 pb-10 px-5">
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-3xl font-bold text-blue-600 mb-2 lg:mb-6 lg:text-4xl">
                Our Culture
              </h2>
              <div className="text-gray-700 lg:text-sm space-y-6">
                <p>
                  Our work culture while working with Aintiqaa Technologies, we
                  give freedom to our employees where they experiment and
                  enhance their skill set, to offer better value to each client
                  that they work for. We give our employees ample opportunity to
                  grow.
                </p>
                <p>
                  Our work culture while working with Aintiqaa Technologies, we
                  give freedom to our employees where they experiment and
                  enhance their skill set, to offer better value to each client
                  that they work for. We give our employees ample opportunity to
                  grow.
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:pt-24 mb-12 mx-10 w-96 py-5 col-span-1 max-w-md">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="px-12 rounded-full animate-pulse"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
