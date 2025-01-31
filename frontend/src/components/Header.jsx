import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full h-16 font-family-primary bg-amber-600 flex items-center justify-between px-4 lg:px-8">
        <div className="logo">
          <Link
            to="/"
            className="text-xl lg:text-2xl font-bold text-white hover:text-black"
          >
            Book Store
          </Link>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="text-white hover:text-black">
                Books
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="search hidden lg:flex space-x-3.5">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 border border-[#fff] rounded-md outline-none text-white"
          />
          <button className="px-2 py-1.5 bg-white text-[#212121] rounded-md hover:bg-[#212121] hover:text-white">
            Search
          </button>
        </div>

        <div className="cart_profile hidden lg:flex space-x-7 items-center text-white">
          <div className="cart">
            <Link to="/cart">
              <IoMdCart size={30} />
            </Link>
          </div>
          <div className="profile">
            <Link to="/profile">
              <div className="image w-8 h-8 rounded-full bg-[#212121]"></div>
            </Link>
          </div>
        </div>

        <div className="auth hidden lg:flex space-x-3.5">
          <Link to="/login" className="text-white hover:text-black">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-black">
            Register
          </Link>
        </div>

        <div onClick={handleToggle} className="lg:hidden flex items-center">
          <button className="text-white hover:text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div>
          {isOpen && (
            <div className="lg:hidden fixed top-16 left-0 w-full h-full bg-amber-600 z-50 transition-transform transform duration-300 ease-in-out">
              <div className="flex justify-end p-4">
                <button
                  onClick={handleToggle}
                  className="text-white hover:text-black"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center h-full space-y-5">
                <Link
                  to="/"
                  className="text-2xl font-bold text-white hover:text-black"
                >
                  Home
                </Link>
                <Link
                  to="/books"
                  className="text-2xl font-bold text-white hover:text-black"
                >
                  Books
                </Link>
                <Link
                  to="/about"
                  className="text-2xl font-bold text-white hover:text-black"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-2xl font-bold text-white hover:text-black"
                >
                  Contact
                </Link>
                <div className="search flex flex-col items-center space-y-3 ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-2 py-1 border border-[#fff] rounded-md outline-none"
                  />
                  <button className="px-2 py-1.5 bg-[#212121] text-white rounded-md hover:bg-white hover:text-[#212121]">
                    Search
                  </button>
                </div>
                <div className="cart_profile flex flex-col items-center space-y-5">
                  <Link to="/cart">
                    <IoMdCart size={30} />
                  </Link>
                  <Link to="/profile">
                    <div className="image w-8 h-8 rounded-full bg-[#212121]"></div>
                  </Link>
                </div>
                <div className="auth flex flex-col items-center space-y-5">
                  <Link
                    to="/login"
                    className="text-2xl font-bold text-white hover:text-black"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-2xl font-bold text-white hover:text-black"
                  >
                    Register
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
