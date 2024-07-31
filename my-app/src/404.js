import { Helmet } from "react-helmet-async";
import error from "./images/404.png";

export default function Example() {
  return (
    <>
      <Helmet>
        <title>
          404 Page Not Found | Aintiqaa Technologies | Mobile, Cloud and Web
          Solutions Provider 
        </title>
        <meta
          name="description"
          content="A company run by folks, `ideas`, and a great culture. Housing talented tech experts who deliver extraordinary results for Mobile Application and Responsive Website Development."
        />
        <meta
          property="og:title"
          content="404 Page Not Found | Aintiqaa Technologies | Mobile, Cloud and Web Solutions Provider"
        ></meta>
      </Helmet>
      <main className="grid  place-items-center bg-white px-6 py-14 lg:py-8 lg:px-8">
        <div className="text-center">
          <div className="relative mx-auto w-52 h-44 sm:w-64 sm:h-56 lg:w-72 lg:h-64">
            <img
              src={error}
              alt="404 Error"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            An error message that is designed to appear when a website won't
            load
            <br />
            Then the 404 error page is supposed to load instead and explain the
            problem.
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
