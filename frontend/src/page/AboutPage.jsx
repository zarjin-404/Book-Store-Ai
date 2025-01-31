import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <section class="relative h-96 flex items-center justify-center">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
            alt="Library shelves"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-indigo-900/60"></div>
        </div>
        <div class="relative text-center max-w-4xl px-4">
          <h1 class="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Story
          </h1>
          <p class="text-xl text-white opacity-90">
            Connecting Readers with Great Books Since 1995
          </p>
        </div>
      </section>

      <section class="py-16 px-4 md:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="md:flex items-center gap-12">
            <div class="md:w-1/2 mb-12 md:mb-0">
              <h2 class="text-3xl font-serif font-bold text-gray-800 mb-6">
                Welcome to Chapter & Verse
              </h2>
              <p class="text-gray-600 mb-6">
                Founded in a small corner of downtown, we've grown from a modest
                second-hand bookshop into one of the region's most beloved
                independent bookstores. Our journey has been filled with
                countless stories, both on our shelves and within our walls.
              </p>
              <p class="text-gray-600">
                Today, we curate an extensive collection of new releases,
                timeless classics, and hidden literary gems. Our passionate team
                is dedicated to helping you discover your next great read.
              </p>
            </div>
            <div class="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1589998059171-988d887df646"
                alt="Bookstore interior"
                class="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-indigo-50 py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-serif font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Curated Selection
              </h3>
              <p class="text-gray-600">
                Hand-picked titles chosen with care and expertise
              </p>
            </div>

            <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Community Focus
              </h3>
              <p class="text-gray-600">
                Building a vibrant space for book lovers to connect
              </p>
            </div>

            <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Passionate Team
              </h3>
              <p class="text-gray-600">
                Knowledgeable staff dedicated to literary excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-indigo-900 text-white py-16 text-center">
        <div class="max-w-4xl mx-auto px-4">
          <h2 class="text-3xl font-serif font-bold mb-6">
            Start Your Reading Journey
          </h2>
          <p class="text-lg mb-8">
            Explore our collection and discover your next favorite book
          </p>
          <Link
            to="/books"
            class="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Browse Books
          </Link>
        </div>
      </section>
    </>
  );
}
