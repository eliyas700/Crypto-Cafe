import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
      <div className="hidden md:block font-bold text-xl ">
        <Link to="/" className="text-gray-500 font-sans">
          Crypto Cafe
        </Link>
      </div>
      <div className="flex text-xl gap-4 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/coins">Coins</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
