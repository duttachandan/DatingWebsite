import React from "react";

const ErrorPage404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Flag Icon */}
      <svg
        className="w-8 h-8 mb-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 15H12L13 14V4L12 3H4L3 4V14L4 15Z" fill="currentColor" />
        <path
          d="M4 21V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Error Message */}
      <h1 className="text-4xl font-bold mb-4 text-center text-[#db147b]">Error 404</h1>
      <h2 className="text-2xl mb-6 text-center">
        It looks like something went wrong.
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Don't worry, our team is already on it. Please try refreshing the page
        or come back later.
      </p>

      {/* Back Home Button */}
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-[#db147b] text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
      >
        BACK HOME
      </button>
    </div>
  );
};

export default ErrorPage404;
