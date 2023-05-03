import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full glass">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="/" className="flex items-center">
          <img src="/logo.png" style={{ height: "50px" }} alt="Flowbite Logo" />
        </a>

        {/* <div className="lg:hidden">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <a
          className="lg:hidden md:hidden relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          href="https://drive.google.com/file/d/1nFW5K3-Iw7jQVONSHfLa0cePTQOQeC0G/view?usp=sharing"
          target={"_blank"}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Resume
          </span>
        </a>
        <div className="max-[500px]:hidden flex items-center">
          <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium items-center	">
            <li>
              <a
                href="/#skill"
                className="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  01.{" "}
                </span>
                Skills
              </a>
            </li>
            <li>
              <a
                href="/#experience"
                className="text-gray-900 dark:text-white hover:underline"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  02.{" "}
                </span>
                Experience
              </a>
            </li>
            <li>
              <a
                href="/#work"
                className="text-gray-900 dark:text-white hover:underline"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  03.{" "}
                </span>
                Work
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="text-gray-900 dark:text-white hover:underline"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  04.{" "}
                </span>
                Contact
              </a>
            </li>
            <li>
              <a
                className="max-[500px]:hidden relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                href="https://drive.google.com/file/d/1nFW5K3-Iw7jQVONSHfLa0cePTQOQeC0G/view?usp=sharing"
                target={"_blank"}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Resume
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
