import React from "react";
import Sayaaraa from "./Sayaaraa";

export default function Products() {
  return (
    <>
      <section className="bg-stone-300 py-5">
        <div className="container mx-auto py-14 ">
        <div className="lg:px-5">
          <h2 className="text-4xl text-blue-500 font-bold px-6 lg:ml-36">
            Products
          </h2>
          <p className="text-gray-600 max-w-xl px-6  lg:ml-36 mt-7 font-semibold text-lg">
            Pre-built mobility solutions to save businesses valuable time and
            money and customized to their needs.
          </p>
         
          <Sayaaraa />
          </div>
        </div>
      </section>
    </>
  );
}
