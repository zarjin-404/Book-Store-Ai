import React from "react";

export default function ProfilePage() {
  return (
    <>
      <section class="py-12 px-4 md:px-8 bg-gray-50">
        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-xl shadow-sm">
            <div class="p-8 border-b border-gray-200">
              <div class="flex items-center gap-6">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                    alt="User avatar"
                    class="w-20 h-20 rounded-full object-cover"
                  />
                  <button class="absolute bottom-0 right-0 bg-indigo-100 p-2 rounded-full hover:bg-indigo-200 transition-colors">
                    <svg
                      class="w-4 h-4 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-800">
                    Sarah Johnson
                  </h1>
                  <p class="text-gray-600">sarah@booklover.com</p>
                  <span class="inline-flex items-center mt-2 text-sm text-green-600">
                    <svg
                      class="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Verified Account
                  </span>
                </div>
              </div>
            </div>

            <div class="md:flex">
              <div class="md:w-64 border-r border-gray-200">
                <nav class="p-4 space-y-2">
                  <a
                    href="#"
                    class="flex items-center gap-2 p-3 text-indigo-600 bg-indigo-50 rounded-lg"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Personal Info
                  </a>
                  <a
                    href="#"
                    class="flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    Orders History
                  </a>
                  <a
                    href="#"
                    class="flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Security
                  </a>
                </nav>
              </div>

              <div class="flex-1 p-8">
                <div class="max-w-2xl">
                  <h2 class="text-xl font-semibold text-gray-800 mb-6">
                    Personal Information
                  </h2>

                  <form class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value="Sarah"
                          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value="Johnson"
                          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value="sarah@booklover.com"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows="4"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        Avid reader of mystery novels and classic literature
                      </textarea>
                    </div>

                    <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Save Changes
                    </button>
                  </form>
                </div>

                <div class="hidden"></div>

                <div class="hidden"></div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mt-8">
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-semibold text-gray-800">
                  Payment Methods
                </h3>
                <button class="text-indigo-600 hover:text-indigo-700">
                  Add New
                </button>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div class="flex items-center gap-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                      alt="Visa"
                      class="h-6"
                    />
                    <span class="text-gray-600">**** **** **** 1234</span>
                  </div>
                  <button class="text-red-600 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-semibold text-gray-800">
                  Saved Addresses
                </h3>
                <button class="text-indigo-600 hover:text-indigo-700">
                  Add New
                </button>
              </div>
              <div class="space-y-4">
                <div class="p-4 bg-gray-50 rounded-lg">
                  <p class="font-medium text-gray-800">Home Address</p>
                  <p class="text-gray-600">
                    123 Book Street
                    <br />
                    Literary City, LC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
