// src/components/ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
      <p className="text-center mb-8 max-w-xl">
        Serving Unified Technology To The Digital World Across Mobile, Web &
        Cloud 'To The Great Ideas' 'To The Global Startup' 'To The Enterprise
        Companies'.
      </p>
      <div className="flex flex-col md:flex-row bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl">
        <div className="p-6 md:w-1/2">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">ADDRESS:</h2>
            <p>
              First Floor, Grace Plaza, Pirojpura Road, behind Sagar Complex,
              Chhapi, Gujarat 385210
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">EMAIL:</h2>
            <p>
              <a href="mailto:hello@company.com" className="underline">
                info@sayaaraa.com
              </a>
            </p>
            <p>
              <a href="mailto:support@company.com" className="underline">
                support@okmechanic.com
              </a>
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">CALL US:</h2>
            <p>+91 9737525783</p>
            <p>+91 8511669592</p>
          </div>
          <div>
            <p>Contact us for a quote, help or to join the team.</p>
         
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.1117204806947!2d72.38244777442539!3d24.027125178482564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf3e04f6fd899%3A0x3fdf16d5b70376b9!2sAintiqaa%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1722421784990!5m2!1sen!2sin"
            allowFullScreen=""
            loading=""
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
