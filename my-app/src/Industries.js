import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import sayaaraa from "./images/sayaaraa.png";
import food from "./images/food.png";
import banquet from "./images/banquet.png";
import room from "./images/room.png";
// import okmec from "./images/okmec.png"
import React from "react";
// import food from "./images/food.png";
// import room from "./images/room.png";
// import booking from "./images/banquet.png";
export default function Industries() {
  const categories = [
    {
      name: "Automotive",
      posts: [
        {
          id: 1,
          src: sayaaraa,
          text: "sayaaraa digital power for your control",
        },
      ],
    },
    {
      name: "Hospitality",
      posts: [
        {
          id: 1,
          src: food,
          text: "Online Food Order Portal",
        },
        {
          id: 2,
          src: room,
          text: "Online Room Booking Portal",
        },
        {
          id: 3,
          src: banquet,
          text: "Online Banquet Booking Portal",
        },
      ],
    },
  ];
  return (
    <section className="bg-stone-300 py-8 ">
      <div className="p-8 lg:p-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 px-6 lg:ml-36 ">
          Industries
        </h2>
        <p className="text-gray-600  max-w-xl px-6 lg:ml-36 lg:mt-7 lg:mb-8 ">
          Unleashing the power of mobility for businesses across verticals and
          enable digital transformation for forward-thinking organizations.
        </p>

        <div className="w-full">
          <TabGroup>
            <TabList className="flex gap-8 py-6 px-6 lg:px-40">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-1 px-3 bg-blue-100 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-blue-600 data-[selected]:text-white data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className=" lg:px-44">
              {categories.map(({ name, posts }) => (
                <TabPanel key={name} className="bg-white/5 p-3 py-6 ">
                  <ul className="lg:flex px-5 space-y-6 lg:space-y-0 rounded-t-3xl lg:space-x-5">
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative text-sm/6 bg-gradient-to-t from-black to-white rounded-t-3xl transition hover:bg-white/5 overflow-hidden"
                      >
                        <div className="relative lg:w-68">
                          <img
                            src={post.src}
                            className="lg:h-64 lg:w-80 h-60 w-80 opacity-40"
                            alt="Imags Industries"
                          />
                          <div className="absolute lg:bottom-5 bottom-2 left-0 w-full text-white bg-opacity-50 text-lg p-2 text-center">
                            {post.text}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
