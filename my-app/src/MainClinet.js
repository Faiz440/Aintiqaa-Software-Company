import React from "react";
import am from "./images/am.png";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/5.png";
import image5 from "./images/6.png";
import image6 from "./images/7.png";
import image7 from "./images/8.png";
import image8 from "./images/9.png";
import image9 from "./images/10.png";
import image10 from "./images/11.png";
import image11 from "./images/12.png";
import image12 from "./images/13.png";
import image13 from "./images/14.png";
import image14 from "./images/15.png";
import image15 from "./images/16.png";
import image16 from "./images/17.png";
import image17 from "./images/ayman.png";
import image18 from "./images/citypoint.png";
import image19 from "./images/falm.png";
import image20 from "./images/go.png";
import image21 from "./images/nistha.png";
import image22 from "./images/packing.png";
import image23 from "./images/satkar.png";
import image24 from "./images/sevai.png";
import image25 from "./images/ga.png";
import image26 from "./images/th.png";
import image27 from "./images/tun.png";

const logos = [
  { id: 1, src: am, alt: "Amenity" },
  { id: 2, src: image1, alt: "Clothing Care" },
  { id: 3, src: image2, alt: "Indie" },
  { id: 4, src: image3, alt: "Nishtha" },
  { id: 5, src: image4, alt: "Amenity" },
  { id: 6, src: image5, alt: "Clothing Care" },
  { id: 7, src: image6, alt: "Indie" },
  { id: 8, src: image7, alt: "Nishtha" },
  { id: 9, src: image8, alt: "Amenity" },
  { id: 10, src: image9, alt: "Clothing Care" },
  { id: 11, src: image10, alt: "Indie" },
  { id: 12, src: image11, alt: "Nishtha" },
  { id: 13, src: image12, alt: "Amenity" },
  { id: 14, src: image13, alt: "Clothing Care" },
  { id: 15, src: image14, alt: "Indie" },
  { id: 16, src: image15, alt: "Nishtha" },
  { id: 17, src: image16, alt: "Amenity" },
  { id: 18, src: image17, alt: "Clothing Care" },
  { id: 19, src: image18, alt: "Indie" },
  { id: 20, src: image19, alt: "Nishtha" },
  { id: 21, src: image20, alt: "Amenity" },
  { id: 22, src: image21, alt: "Clothing Care" },
  { id: 23, src: image22, alt: "Indie" },
  { id: 24, src: image23, alt: "Nishtha" },
  { id: 25, src: image24, alt: "Amenity" },
  { id: 26, src: image25, alt: "Clothing Care" },
  { id: 27, src: image26, alt: "Indie" },
  { id: 28, src: image27, alt: "Nishtha" },
];

export default function ClientLogos() {
  return (
    <div className="bg-stone-300 py-6 lg:px-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="px-8">
          <h2 className="text-4xl font-bold text-blue-600">Our Clients</h2>
          <p className="container text-gray-600  mt-3  font-semibold">
            An innovative smartphone app is a cloud-based solution which helps
            monitor and organize key factors like employees' location. This
            automatically reduces the time consumption of information gathering.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="col-span-1 flex justify-center py-8 lg:pt-5 lg:pb-12 lg:px-12 px-8 "
            >
              <img className="max-h-12" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
