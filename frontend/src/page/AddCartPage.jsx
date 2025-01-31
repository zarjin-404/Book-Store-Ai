import React from "react";
import { Link } from "react-router-dom";

export default function AddCartPage() {
  return (
    <>
      <section class="py-12 px-4 md:px-8 bg-gray-50">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-serif font-bold text-gray-800 mb-8">
            Your Cart
          </h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2 space-y-6">
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex gap-6">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                  alt="Book cover"
                  class="w-32 h-40 object-cover rounded-lg"
                />
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">
                    The Great Adventure
                  </h3>
                  <p class="text-gray-600 mb-2">By John Doe</p>
                  <p class="text-indigo-600 font-semibold text-lg">$19.99</p>

                  <div class="mt-4 flex items-center gap-4">
                    <div class="flex items-center border rounded-lg">
                      <button class="px-3 py-2 text-gray-600 hover:bg-gray-100">
                        -
                      </button>
                      <input
                        type="number"
                        value="1"
                        class="w-12 text-center border-0 bg-transparent"
                      />
                      <button class="px-3 py-2 text-gray-600 hover:bg-gray-100">
                        +
                      </button>
                    </div>
                    <button class="text-red-600 hover:text-red-700 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm h-fit sticky top-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-6">
                Order Summary
              </h3>

              <div class="space-y-4 mb-8">
                <div class="flex justify-between">
                  <span class="text-gray-600">Subtotal</span>
                  <span class="font-semibold">$59.97</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Discount</span>
                  <span class="text-green-600">-$5.00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Shipping</span>
                  <span class="font-semibold">Free</span>
                </div>
                <div class="flex justify-between border-t pt-4">
                  <span class="text-lg font-semibold">Total</span>
                  <span class="text-lg font-semibold">$54.97</span>
                </div>
              </div>

              <div class="mb-4">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  class="w-full px-4 py-2 border rounded-lg mb-2"
                />
                <button class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Apply Code
                </button>
              </div>

              <button class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Proceed to Checkout
              </button>

              <p class="text-center text-sm text-gray-500 mt-4">
                Secure SSL encryption for safe transactions
              </p>
            </div>
          </div>

          <div class="mt-8 text-center">
            <Link
              to="/books"
              class="text-indigo-600 hover:text-indigo-700 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
