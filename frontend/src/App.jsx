import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="mainCintainer w-full h-screen flex items-center justify-center">
        <section class="bg-amber-50 py-24 px-4 font-family-primary">
          <div class="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
            <div class="md:w-1/2 mb-12 md:mb-0">
              <h1 class="text-4xl md:text-5xl  font-bold text-gray-800 mb-6">
                Discover Your Next Favorite Book
              </h1>
              <p class="text-lg text-gray-600 mb-8">
                Explore our curated collection of bestselling novels, timeless
                classics, and hidden gems. Find your next literary adventure
                today.
              </p>
              <div class="flex gap-4">
                <Link
                  to="/books"
                  class="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition duration-300"
                >
                  Books Collection
                </Link>
                <a
                  href="#"
                  class="border-2 border-gray-800 px-8 py-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div class="md:w-1/2">
              <div class="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                  alt="Book Collection"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-amber-500/30"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
