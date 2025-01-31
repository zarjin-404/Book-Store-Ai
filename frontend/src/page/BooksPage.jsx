import React from "react";

export default function BooksPage() {
  return (
    <div className="mainCintainer w-full h-screen flex items-center justify-center">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
              alt="Book Cover"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />

            <span class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              25% Off
            </span>
          </div>

          <div class="p-6">
            <span class="text-indigo-600 text-sm font-semibold">Fiction</span>

            <h3 class="mt-2 text-xl font-bold text-gray-800">
              The Great Adventure
            </h3>

            <p class="mt-1 text-gray-600">By John Doe</p>

            <div class="mt-3 flex items-center">
              <div class="flex text-yellow-400">★★★★★</div>
              <span class="ml-2 text-gray-600">(4.8)</span>
            </div>

            <div class="mt-4 flex justify-between items-center">
              <div>
                <span class="text-2xl font-bold text-gray-900">$19.99</span>
                <span class="ml-2 text-gray-500 line-through">$26.99</span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-3">
              <button class="bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add to Cart
              </button>
              <button class="border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
