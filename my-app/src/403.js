import { Helmet } from "react-helmet-async";
import error1 from "./images/403.png";

export default function Per() {
  return (
    <>
      <Helmet>
        <title>
          403 No permission | Aintiqaa Technologies | Mobile, Cloud and Web
          Solutions Provider
        </title>
        <meta
          name="description"
          content="A company run by folks, ideas, and a great culture. Housing talented tech experts who deliver extraordinary results for Mobile Application and Responsive Website Development."
        />
        <meta
          property="og:title"
          content="404 Page Not Found | Aintiqaa Technologies | Mobile, Cloud and Web Solutions Provider"
        ></meta>
      </Helmet>
      <main className="grid  place-items-center bg-white px-6 py-14 lg:py-14 lg:px-8">
        <div className="text-center">
          <div className="relative mx-auto w-52 h-44 sm:w-64 sm:h-56 lg:w-72 lg:h-64">
            <img
              src={error1}
              alt="404 Error"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            No permission
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            The page you&apos;re trying to access is restricted access.
            <br />
            If you feel this is a mistake, Contact your admin.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a
              href="/inquirenow"
              className="text-sm font-semibold text-gray-900 rounded-md bg-white px-3.5 py-2.5 shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
