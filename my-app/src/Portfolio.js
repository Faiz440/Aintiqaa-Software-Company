import React from "react";
import esc from "./images/escalaa.png";
import image1 from "./images/sayaaraa (1).png";
import image2 from "./images/roombooking.png";
import image3 from "./images/banquetbooking.png";
import image4 from "./images/foodorder.png";
import image5 from "./images/hotelcitypoint.png";
import image6 from "./images/royaldormitorymanagement.png";
import image7 from "./images/ektadormitorymanagement.png";
import image8 from "./images/baghone.png";
import image9 from "./images/autonation.png";
import image10 from "./images/flamboyant.png";
import image11 from "./images/aymaninfra.png";
import image12 from "./images/go-garage.png";
import image13 from "./images/clothingcare-ui.png";
import image14 from "./images/ektadormitory.png";
import image15 from "./images/alkhdija.png";
import image16 from "./images/hotelsatkar.png";
import image17 from "./images/nisthamilk.png";
import image18 from "./images/berrybites.png";
import image19 from "./images/lehzatnamkeen.png";
import image20 from "./images/zawqnamkeen.png";
import image21 from "./images/amenity.png";
import image22 from "./images/clothing-care.png";
import image23 from "./images/clothingcare-envelope.png";
import image24 from "./images/clothingcare-letterhead.png";

const products = [
  {
    id: 1,
    name: "Sayaaraa Automobile",
    href: "https://play.google.com/store/apps/details?id=com.sayaaraa&hl=en",
    imageSrc: esc,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Automobile / Web, iOS, Android",
  },
  {
    id: 2,
    name: "Escalaa Services",
    href: "#",
    imageSrc: image1,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Services Center / Web, iOS, Android",
  },
  {
    id: 3,
    name: "Room Booking",
    href: "#",
    imageSrc: image2,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Hospitality / Web, iOS, Android",
  },
  {
    id: 4,
    name: "Banquet Booking",
    href: "#",
    imageSrc: image3,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Hospitality / Web, iOS, Android",
  },
  {
    id: 5,
    name: "Food Order",
    href: "https://play.google.com/store/apps/details?id=com.elunicaa.citypointrestaurant&hl=en",
    imageSrc: image4,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Hospitality / Web, iOS, Android",
  },
  {
    id: 6,
    name: "Hotel City Point",
    href: "#",
    imageSrc: image5,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Android / Web",
  },
  {
    id: 7,
    name: "Royal Dormitory Management System",
    href: "#",
    imageSrc: image6,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Management Software / Web",
  },
  {
    id: 8,
    name: "Ekta Dormitory Management System",
    href: "#",
    imageSrc: image7,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Management Software / Web",
  },
  {
    id: 9,
    name: "Baghone Restaurant & Banquet",
    href: "http://www.baghonerestaurant.com/",
    imageSrc: image8,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Website",
  },
  {
    id: 10,
    name: "Autonation Car Care",
    href: "http://www.autonationcarcare.com/",
    imageSrc: image9,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Website",
  },
  {
    id: 11,
    name: "Flamboyant Decorate",
    href: "#",
    imageSrc: image10,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Website",
  },
  {
    id: 12,
    name: "Ayman Residency",
    href: "http://www.aymaninfra.com/",
    imageSrc: image11,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Website",
  },
  {
    id: 13,
    name: "Go Garage",
    href: "https://www.gogarage.in/lander",
    imageSrc: image12,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Website, iOS, Android",
  },
  {
    id: 14,
    name: "Clothing Care",
    href: "#",
    imageSrc: image13,
    imageAlt: "PORTFOLIO IMAGE",
    text: "UI design",
  },
  {
    id: 15,
    name: "Ekta Dormitory",
    href: "https://ektadormitory.com/lander",
    imageSrc: image14,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Website",
  },
  {
    id: 16,
    name: "Al-Khadija",
    href: "http://www.alkhadija.in/",
    imageSrc: image15,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Website, Web",
  },
  {
    id: 17,
    name: "Hotel Satkar",
    href: "#",
    imageSrc: image16,
    imageAlt: "PORTFOLIO IMAGE",
    text: "UI design",
  },
  {
    id: 18,
    name: "Nishtha Milk",
    href: "#",
    imageSrc: image17,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Design & Branding",
  },
  {
    id: 19,
    name: "Berry Bites",
    href: "#",
    imageSrc: image18,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Packaging Design",
  },
  {
    id: 20,
    name: "Lehzat Namkeen",
    href: "#",
    imageSrc: image19,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Design & Branding",
  },
  {
    id: 21,
    name: "Zawq Namkeen",
    href: "#",
    imageSrc: image20,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Packaging Design",
  },
  {
    id: 22,
    name: "Amenity",
    href: "#",
    imageSrc: image21,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Packaging Design, Website",
  },
  {
    id: 23,
    name: "Clothing Care",
    href: "#",
    imageSrc: image22,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Visiting Card",
  },
  {
    id: 24,
    name: "Clothing Care",
    href: "#",
    imageSrc: image23,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Letterhead",
  },
  {
    id: 25,
    name: "Clothing Care",
    href: "#",
    imageSrc: image24,
    imageAlt: "PORTFOLIO IMAGE",
    text: "Envelope",
  },
];

export default function Example() {
  return (
    <>
      <div className="bg-stone-300">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-14">
          <h2 className="text-4xl font-bold text-blue-600">PORTFOLIO</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative cursor-pointer">
                <div className="aspect-h-1 aspect-w-1 w-full border-y-4 border-x-4	border-gray-100	 overflow-hidden border rounded-t-3xl bg-gray-500 lg:aspect-none lg:h-80 group-hover:bg-blue-700 transition-colors duration-700">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-center lg:h-full lg:w-full group-hover:opacity-50 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <button className="text-lg font-medium text-black bg-white bg-opacity-75 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition duration-700">
                      <a
                        href={product.href}
                        className="relative"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Details
                        <span aria-hidden="true" className="absolute inset-0" />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">
                      <a
                        href={product.href}
                        className="relative text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
