import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Success from "./Succese";
const initialFormData = {
  Name: "",
  email: "",
  phoneNumber: "",
  country: "",
  message: "",
};

const initialErrors = {
  Name: "",
  email: "",
  phoneNumber: "",
  country: "",
  message: "",
};
export default function Example({ open, onClose }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const adjustedFormData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [
          key,
          value.trim() === "" ? null : value.trim(),
        ])
      );

      const response = await fetch("api insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adjustedFormData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setLoginOpen(true);
      setFormData(initialFormData);
      // alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      setErrors({
        ...initialErrors,
        general: `An error occurred: ${error.message}`,
      });
    }
  };

  function closeLoginModal() {
    setLoginOpen(false);
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Name.trim()) {
      newErrors.Name = "*Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "*Email is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "*Phone number is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "*Country is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "*Message is required";
    }
    return newErrors;
  };

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
            <div className="flex justify-center p-4 text-cente lg:min-h-screen min-h-md py-36 lg:py-0 sm:items-center">
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
                          <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-2 gap-x-4 lg:gap-y-2 lg:gap-x-4">
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
                                    value={formData.Name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.Name && (
                                    <p className="text-red-600 text-sm">
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
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.phoneNumber && (
                                    <p className="text-red-600 text-sm">
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
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.email && (
                                    <p className="text-red-600 text-sm">
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
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {errors.country && (
                                    <p className="text-red-600 text-sm">
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="bg-white border-t-2 px-10 lg:px-0 py-3 flex justify-center sm:flex-row-reverse sm:px-6 gap-x-4">
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
