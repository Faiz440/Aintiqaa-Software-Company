import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Success from "./Success"; // Assuming "Success" component is correctly imported

export default function Example({ open, onClose }) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const [loginOpen, setLoginOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!Name.trim()) {
      errors.Name = "Name is required";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(phoneNumber.trim())) {
      errors.phoneNumber = "Invalid Mobile Number";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
      errors.email = "Invalid Email address";
    }

    if (!country.trim()) {
      errors.country = "Country is required";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const adduser = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      let response = await fetch("http://192.168.0.114:8000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Name, email, phoneNumber, country, message }),
      });
      let data = await response.json();
      console.log(data);

      setName("");
      setEmail("");
      setPhoneNumber("");
      setCountry("");
      setMessage("");
      setLoginOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  function closeLoginModal() {
    setLoginOpen(false);
  }

  return (
    <>
      <Transition show={open} as={Fragment}>
        <Dialog className="relative z-0" onClose={onClose}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-700" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex justify-center p-4 text-center lg:min-h-screen min-h-md py-36 lg:py-0 sm:items-center">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden items-center justify-center rounded-lg bg-white text-left shadow-xl transition-all duration-700 max-h-md lg:w-full sm:max-w-md">
                  <div className="bg-white px-4 pb-4 pt-5 lg:p-6 lg:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold text-center leading-6 text-gray-900 border-b-2 pb-2"
                        >
                          Request Inquiry
                        </DialogTitle>
                        <div className="mt-2">
                          <form onSubmit={adduser}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                              <div>
                                <label
                                  htmlFor="Name"
                                  className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                  Name
                                </label>
                                <div className="mt-2.5">
                                  <input
                                    type="text"
                                    placeholder="Name"
                                    name="Name"
                                    id="Name"
                                    autoComplete="name"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                      errors.Name ? "border-red-500" : ""
                                    }`}
                                  />
                                  {errors.Name && (
                                    <p className="text-red-500 text-xs mt-1">
                                      {errors.Name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="phoneNumber"
                                  className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                  Mobile Number
                                </label>
                                <div className="mt-2.5">
                                  <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    autoComplete="tel"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                      setPhoneNumber(e.target.value)
                                    }
                                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                      errors.phoneNumber ? "border-red-500" : ""
                                    }`}
                                  />
                                  {errors.phoneNumber && (
                                    <p className="text-red-500 text-xs mt-1">
                                      {errors.phoneNumber}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                  Email
                                </label>
                                <div className="mt-2.5">
                                  <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                      errors.email ? "border-red-500" : ""
                                    }`}
                                  />
                                  {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                      {errors.email}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                  Country
                                </label>
                                <div className="mt-2.5">
                                  <input
                                    type="text"
                                    placeholder="Country"
                                    name="country"
                                    id="country"
                                    autoComplete="country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                      errors.country ? "border-red-500" : ""
                                    }`}
                                  />
                                  {errors.country && (
                                    <p className="text-red-500 text-xs mt-1">
                                      {errors.country}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-span-full">
                                <label
                                  htmlFor="message"
                                  className="block text-sm font-semibold leading-6 text-gray-900"
                                >
                                  Message
                                </label>
                                <div className="mt-0">
                                  <textarea
                                    name="message"
                                    placeholder="Message"
                                    id="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={`w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                      errors.message ? "border-red-500" : ""
                                    }`}
                                  />
                                  {errors.message && (
                                    <p className="text-red-500 text-xs mt-1">
                                      {errors.message}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="bg-white border-t-2 px-4 py-3 flex justify-center sm:px-6 gap-x-4">
                              <button
                                type="submit"
                                className="w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto duration-700"
                              >
                                Submit
                              </button>

                              <button
                                type="button"
                                className="w-full justify-center rounded-md bg-stone-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto duration-700"
                                onClick={onClose}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      {loginOpen && <Success open={loginOpen} onClose={closeLoginModal} />}
    </>
  );
}
