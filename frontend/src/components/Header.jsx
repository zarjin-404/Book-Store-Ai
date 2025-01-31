import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full backdrop-blur-md bg-white/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
            >
              Book Store
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/books"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Books
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="w-64 px-4 py-2 rounded-full border focus:border-amber-600 focus:ring-2 focus:ring-amber-600 focus:outline-none"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-amber-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-amber-600 transition-colors"
            >
              <IoMdCart size={24} />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>

            <div className="flex space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>

          <button onClick={handleToggle} className="lg:hidden text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50">
          <div className="p-4">
            <button
              onClick={handleToggle}
              className="absolute right-4 top-4 text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="mt-12 flex flex-col items-center space-y-6">
              <Link
                to="/"
                className="text-xl font-medium text-gray-700 hover:text-amber-600"
              ></Link>
              Home
              <Link
                to="/"
                className="text-xl font-medium text-gray-700 hover:text-amber-600"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-xl font-medium text-gray-700 hover:text-amber-600"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-xl font-medium text-gray-700 hover:text-amber-600"
              >
                Contact
              </Link>
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full px-4 py-2 rounded-full border focus:border-amber-600 focus:ring-2 focus:ring-amber-600 focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Link
                  to="/login"
                  className="text-xl font-medium text-gray-700 hover:text-amber-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 text-white bg-amber-600 rounded-lg hover:bg-amber-700"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
