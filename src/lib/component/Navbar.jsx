import React from "react";

export default function Navbar() {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>
        </a>
        <div class="flex items-center">
          <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium items-center	">
            <li>
              <a
                href="#"
                class="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  01.{" "}
                </span>
                Skills
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  02.{" "}
                </span>
                Experience
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  03.{" "}
                </span>
                Contact
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  04.{" "}
                </span>
                About
              </a>
            </li>
            <li>
              <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Resume
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
