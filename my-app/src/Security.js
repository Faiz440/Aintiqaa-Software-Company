import { ServerIcon } from "@heroicons/react/20/solid";
import {
  MdSystemSecurityUpdateWarning,
  MdOutlineSecurity,
} from "react-icons/md";
import { Helmet } from "react-helmet-async";
import auto from "./images/close-up-finger-typing-keyboard.jpg";
export default function Example() {
  return (
    <>
      <Helmet>
        <title>
          Security Aintiqaa Technologies | Mobile, Cloud and Web Solutions
          Provider
        </title>
        <meta
          name="A company runs by folks, ideas, and a great culture. Housing talented tech experts who deliver extraordinary results for Mobile Application and Responsive Website Development"
          content="Learn more about us on this page."
        />
        <meta
          property="og:title"
          content="Security Aintiqaa Technologies | Mobile, Cloud and Web Solutions Provider"
        ></meta>
      </Helmet>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
                  A better security
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Web security is critical for protecting web applications and
                  data from malicious attacks and unauthorized access. It is
                  critical to implement precautions such as updated software,
                  understanding of SQL injection and cross-site scripting,
                  proper error handling, extensive data validation, and strong
                  password restrictions.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              // src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              src={auto}
              alt="secrity images"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <ul className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <MdSystemSecurityUpdateWarning
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        What is Mobile Security?
                      </strong>{" "}
                      Mobile device security states that the protection set
                      together to prevent hackers and other unauthorized users
                      from accessing smartphones, tablets, and other portable
                      electronic devices. It means implementing plans and
                      employing instruments to protect private, sensitive, and
                      personal data on these devices. To ensure that users may
                      use their mobile devices safely and securely, mobile
                      device security simply attempts to prevent unauthorized
                      access, data breaches, and virus attacks on mobile
                      devices. Mobile device cybersecurity covers protecting
                      data on the device itself as well as on endpoints and
                      networking hardware that are connected to the device.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <MdOutlineSecurity
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        What is Web Security?
                      </strong>{" "}
                      Web Security is an online security solution that will
                      restrict access to harmful websites, stop web-based risks,
                      and manage staff internet usage. Web Security is very
                      important nowadays. Websites are always prone to security
                      threats/risks. For example- when you are transferring data
                      between client and server and you have to protect that
                      data that security of data is your web security.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        What is cloud web security?
                      </strong>{" "}
                      Cloud web security plays a pivotal role in the management
                      of online-based resources by filtering and governing
                      internet traffic in real-time, all accomplished from a
                      cloud-based platform.
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-3xl font-bold tracking-tight text-indigo-600">
                  Web application firewall (WAF)
                </h2>
                <p className="mt-6">
                  A WAF prevents hackers from installing malicious code onto a
                  site and stops automated attacks that commonly target small or
                  lesser-known brands. These attacks are carried out by
                  malicious bots that automatically look for vulnerabilities
                  they can exploit or cause DDoS attacks that slow or crash your
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
