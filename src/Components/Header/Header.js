import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
      <div className="hidden md:block font-bold text-xl ">
        <Link to="/" className="text-gray-500 font-sans">
          Crypto Cafe
        </Link>
      </div>
      <div className="flex text-xl gap-4 font-semibold">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/coins">Coins</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </div>
  );
};

export default Header;
