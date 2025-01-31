import React from "react";

export default function ContactPage() {
  return (
    <>
      <section class="py-16 px-4 md:px-8 bg-gray-50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p class="text-gray-600 max-w-xl mx-auto">
              Have questions or need assistance? Reach out to our friendly team
              - we're always happy to help fellow book lovers!
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">
                    Phone
                  </h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                  <p class="text-gray-600">Mon-Fri: 9am - 5pm EST</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">
                    Email
                  </h3>
                  <p class="text-gray-600">hello@bookhaven.com</p>
                  <p class="text-gray-600">support@bookhaven.com</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">
                    Visit Us
                  </h3>
                  <p class="text-gray-600">123 Book Street</p>
                  <p class="text-gray-600">Literary City, LC 12345</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <form class="space-y-6">
                <div>
                  <label class="block text-gray-700 mb-2" for="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 mb-2" for="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 mb-2" for="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-gray-700 mb-2" for="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div class="mt-12 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-71.060982!3d42.35725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708e2a7d5a3f%3A0x1d4ec2d4d8a3a3d4!2sBook%20Street!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              class="w-full h-96 border-0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
