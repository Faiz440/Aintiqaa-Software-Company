// src/components/ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
      <p className="text-center mb-8">
        We align leaders around a shared purpose and strategic story that
        catalyzes their business and brand to take action.
      </p>
      <div className="flex flex-col md:flex-row bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl">
        <div className="p-6 md:w-1/2">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">ADDRESS:</h2>
            <p>
              121 Rock Street, 21 Avenue,
              <br />
              New York, NY 92103-9000
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">EMAIL:</h2>
            <p>
              <a href="mailto:hello@company.com" className="underline">
                hello@company.com
              </a>
            </p>
            <p>
              <a href="mailto:support@company.com" className="underline">
                support@company.com
              </a>
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">CALL US:</h2>
            <p>1 (234) 567-891</p>
            <p>1 (234) 987-654</p>
          </div>
          <div>
            <p>Contact us for a quote, help or to join the team.</p>
            <div className="flex space-x-4 mt-4">
              <a href="/" className="text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-white">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8845646849433!2d-73.98930858468167!3d40.74108647932738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18d8d11b%3A0xf6c96f0a21b82d12!2s121%20Rock%20St%2C%20New%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2s!4v1626343941465!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
