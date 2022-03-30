import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-gray-500 mt-10 mb-6s font-mono">
        Contact Us,For More information's
      </h3>
      <p className="text-3xl font-bold py-8">Our Office Addresses Are:</p>
      <div>
        <Link
          to="bd-office"
          className="py-2 px-4 text-white mt-3 mx-1 bg-cyan-600 w-auto rounded sm:mb-0"
        >
          BD Office
        </Link>
        <Link
          to="us-office"
          className=" rounded py-2 px-4 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0"
        >
          US Office
        </Link>
      </div>
      <div className="flex justify-center items-center w-full py-44">
        <Outlet />
      </div>
    </div>
  );
};

export default Contact;
