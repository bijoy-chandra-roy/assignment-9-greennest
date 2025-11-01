import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary-focus transition"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded hover:bg-gray-400 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
