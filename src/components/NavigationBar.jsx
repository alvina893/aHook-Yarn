import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <navbar className="flex justify-between items-center text-secondary py-6 px-8 md:px-32 drop-shadow-md bg-primary">
      <Link to="/" className="flex-none">
        <img
          src="./public/img/logo.jpg"
          className="w-50 hover:scale-105 transition-all"
          alt="aHook&Yarn"
        />
      </Link>
      <div className="hidden xl:flex items-center gap-6 font-semibold">
        <Link
          className="p-3 text-l text-secondary hover:bg-secondary hover:text-primary hover:rounded-lg transition-all cursor-pointer"
          to="/"
        >
          <p>Recents</p>
        </Link>
        <Link
          className="p-3 text-l text-secondary hover:bg-secondary hover:text-primary hover:rounded-lg transition-all cursor-pointer"
          to="/"
        >
          <p>Amigurumi</p>
        </Link>
        <Link
          className="p-3 text-l text-secondary hover:bg-secondary hover:text-primary hover:rounded-lg transition-all cursor-pointer"
          to="/"
        >
          <p>Clothing</p>
        </Link>
        <Link
          className="p-3 text-l text-secondary hover:bg-secondary hover:text-primary hover:rounded-lg transition-all cursor-pointer"
          to="/"
        >
          <p>Bag</p>
        </Link>
        <Link
          className="p-3 text-l text-secondary hover:bg-secondary hover:text-primary hover:rounded-lg transition-all cursor-pointer"
          to="/"
        >
          <p>Shopping</p>
        </Link>
      </div>
      <div className="relative hidden md:flex items-center justify-center gap-3">
        <i className="fi fi-br-search absolute text-primary left-3 top-2.5"></i>
        <input
          type="text"
          placeholder="Search..."
          className="w-full appearance-none outline-none pl-10 p-2 rounded-lg text-primary bg-secondary placeholder-primary"
        />
      </div>
      <i
        className="fi fi-br-menu-burger xl:hidden block text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>
      <div
        className={`absolute xl:opacity-0 top-24 left-0 w-full bg-secondary text-primary flex flex-col items-center font-semibold text-lg transform transition-transform ${
          isMenuOpen ? "block" : "hidden"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <Link
          className="appearance-none w-full p-4 hover:bg-primary hover:text-secondary transition-all"
          to="/"
        >
          <p>Recents</p>
        </Link>
        <Link
          className="appearance-none w-full p-4 hover:bg-primary hover:text-secondary transition-all"
          to="/"
        >
          <p>Amigurumi</p>
        </Link>
        <Link
          className="appearance-none w-full p-4 hover:bg-primary hover:text-secondary transition-all"
          to="/"
        >
          <p>Clothing</p>
        </Link>
        <Link
          className="appearance-none w-full p-4 hover:bg-primary hover:text-secondary transition-all"
          to="/"
        >
          <p>Bag</p>
        </Link>
        <Link
          className="appearance-none w-full p-4 hover:bg-primary hover:text-secondary transition-all"
          to="/"
        >
          <p>Shopping</p>
        </Link>
      </div>
    </navbar>
  );
};
