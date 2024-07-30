import { Helmet } from "react-helmet-async";
export default function Example() {
  return (
    <>
      <Helmet>
        <title>
          403 No permission Aintiqaa Technologies | Mobile, Cloud and Web
          Solutions Provider 
        </title>
        <meta
          name="A company runs by folks, ideas, and a great culture. Housing talented tech experts who deliver extraordinary results for Mobile Application and Responsive Website Development"
          content="Learn more about us on this page."
        />
        <meta
          property="og:title"
          content="500 Internal Server Error Aintiqaa Technologies | Mobile, Cloud and Web Solutions Provider"
        ></meta>
      </Helmet>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-7xl font-semibold text-indigo-600">403</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            No permission
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            The page you&apos;re trying access has restricted access.
            <br />
            Please refer to your system administrator a page is a Working.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a
              href="inquirenow"
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
