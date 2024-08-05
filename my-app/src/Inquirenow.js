import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import image5 from "./images/logo.png";
import go from "./images/go.png";
import seva from "./images/sevai.png";
import Nishtha from "./images/nistha.png";
import Amenity from "./images/am.png";
import Ayman from "./images/ayman.png";
import Packaging from "./images/packing.png";
import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import Success from "./Succese";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const initialFormData = {
  firstName: "",
  lastName: "",
  topic: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  country: "",
  message: "",
};

const initialErrors = {
  firstName: "",
  lastName: "",
  topic: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  country: "",
  message: "",
};
export default function Example() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    topic: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.topic.trim()) {
      newErrors.topic = "Topic is required";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is must  be 10 number";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const reviews = [
    {
      text: "Very good service 👏 thanks autobay team",
      name: "Shabbirhasan Nandoliya",
      location: "India",
    },
    {
      text: "Very good app user friendly and customer service is excellent.",
      name: "Faiz Mohammad Sheru",
      location: "India",
    },
    {
      text: "Sayaaraa has simplified the way we operate our workshop dramatically. By switching to Sayaaraa our reception staff can now see what the workshop are doing from any device available to them, which has improved our customer relations and leaves us more time to run our business to the full.",
      name: "Hasanali Sunasara",
      location: "India",
    },
    {
      text: "Value for money. accurate app. thanks team",
      name: "Vikash Gabel",
      location: "India",
    },
    {
      text: "Very good app user friendly and customer service is excellent.",
      name: "Assif Ibrahim",
      location: "Kenya",
    },
    {
      text: "Very simple to use with all features required by any Automobile workshops to maintain the workshop in the most efficient way. Above all the cost of the software is negligible in comparison to similar existing software.",
      name: "Kishur Konwar",
      location: "India",
    },
    {
      text: "Best Application Best Support.",
      name: "Ankur Mistry",
      location: "India",
    },
    {
      text: "Excellent shop management system. it meets all our need.",
      name: "Roland Crawford",
      location: "Jamaica",
    },
  ];
  const logos = [go, seva, Nishtha, Amenity, Ayman, Packaging];
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    arrows: false,
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [loginOpen, setLoginOpen] = useState(false);
  function closeLoginModal() {
    setLoginOpen(false);
  }
  return (
    <>
      <Helmet>
        <title>
          Tell us your Idea! That you can arise with | Send Inquiry | Request
          Free Quote
        </title>
        <meta
          name="description"
          content="Aintiqaa Technologies is a global digital product development company. We build, improve and scale products across platforms leveraging disruptive technologies and combining design, engineering and innovation to make our clients successful."
        />
        <meta
          property="og:title"
          content="Tell us your Idea! That you can arise with | Send Inquiry | Request Free Quote"
        ></meta>
        <meta
          property="og:description"
          content="Aintiqaa Technologies is a global digital product development company. We build, improve and scale products across platforms leveraging disruptive technologies and combining design, engineering and innovation to make our clients successful."
        ></meta>
        <meta property="og:url" content="http://aintiqaa.com/"></meta>
      </Helmet>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 animate-bounce bg-indigo-600 text-white rounded-full p-4 shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}
      <div className="bg-stone-50">
        <div className="lg:mx-auto lg:max-w-2xl lg:text-center px-8 py-5 lg:pt-14 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-blue-600 whitespace-nowrap">
            Ready to work with us? Tell us more.
          </h2>
        </div>
        <div className="sm:container lg:container lg:mx-auto lg:py-0 lg:px-32">
          <div className="lg:flex">
            <div className="lg:py-8">
              <div className=" lg:mb-18 mb-12 mx-6 w-96 col-span-1">
                <Slider {...settings}>
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center text-center max-w-md h-[360px] lg:my-0 bg-stone-50 p-10  "
                    >
                      <div className="mb-4">
                        <img
                          src={image5}
                          alt="Company Logo"
                          className="w-16 h-16 mx-32"
                        />
                      </div>
                      <p className="text-lg font-semibold">{review.text}</p>
                      <div className="mt-4">
                        <p className="font-bold">{review.name}</p>
                        <p className="text-gray-600">{review.location}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flex px-12 justify-center py-10">
                <div className="grid grid-cols-3 gap-8">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="h-10 w-24"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8">
              <div className="grid justify-items-center">
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-3xl bg-gray-200 p-6 rounded-md shadow-lg shadow-black h-auto min-h-screen-sm"
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        First Name
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          id="first-name"
                          autoComplete="first-name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:shadow-lg sm:text-sm sm:leading-6"
                        />
                        {errors.firstName && (
                          <p className="text-red-600 text-md">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Last Name
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          id="last-name"
                          autoComplete="family-name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.lastName && (
                          <p className="text-red-600 text-md">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="topic"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Topic
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2.5">
                        <select
                          name="topic"
                          id="topic"
                          value={formData.topic}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="" disabled>
                            Select a topic
                          </option>
                          <option value="Software Development">
                            Software Development
                          </option>
                          <option value="Mobile Application">
                            Mobile Application
                          </option>
                          <option value="Custom Web Development">
                            Web Development
                          </option>
                          <option value="E-Commerce Development">
                            Ecommerce Development
                          </option>
                          <option value="Ui-ux">UI / UX Design</option>
                          <option value="Iot">IOT (Internet of Things)</option>
                          <option value="Cloud Consulting">
                            Cloud Consulting
                          </option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.topic && (
                          <p className="text-red-600 text-md">{errors.topic}</p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Company Name
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          placeholder="Company Name"
                          name="companyName"
                          id="company-name"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.companyName && (
                          <p className="text-red-600 text-md">
                            {errors.companyName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Email
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          placeholder="Email: exmple@gmail.com"
                          name="email"
                          id="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && (
                          <p className="text-red-600 text-md">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Phone Number
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          placeholder="Phone Number (with country code)"
                          name="phoneNumber"
                          id="phone-number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.phoneNumber && (
                          <p className="text-red-600 text-md">
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Country
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-2.5">
                        <select
                          name="country"
                          id="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="" disabled>
                            Select a Country
                          </option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Australia">Australia</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Japan">Japan</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Norway">Norway</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Panama">Panama</option>
                          <option value="Peru">Peru</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Russia">Russia</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Turkey">Turkey</option>

                          <option value="Other">Other</option>
                        </select>
                        {errors.country && (
                          <p className="text-red-600 text-md">
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Message
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="mt-0">
                        <textarea
                          name="message"
                          placeholder="Brief about the project"
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                      <div className="flex h-6 items-center">
                        <Switch
                          checked={agreed}
                          onChange={setAgreed}
                          className={classNames(
                            agreed ? "bg-indigo-600" : "bg-gray-200",
                            "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          )}
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              agreed ? "translate-x-3.5" : "translate-x-0",
                              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </div>
                      <label className="text-sm leading-6 text-gray-600">
                        By selecting this, you agree to our{" "}
                        <a
                          href="security"
                          className="font-semibold text-indigo-600"
                        >
                          privacy&nbsp;policy
                        </a>
                        .
                      </label>
                    </div>
                    {errors.agreed && (
                      <p className="text-red-600 text-md sm:col-span-2">
                        {errors.agreed}
                      </p>
                    )}
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className=" block w-full rounded-md bg-black px-1 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-700 "
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loginOpen && <Success open={loginOpen} onClose={closeLoginModal} />}
    </>
  );
}
