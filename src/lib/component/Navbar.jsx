import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full glass">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="/" className="flex items-center">
          <img src="/logo.png" style={{ height: "50px" }} alt="Flowbite Logo" />
        </a>
        <a
          className="lg:hidden md:hidden relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          href="https://drive.google.com/file/d/1lS5Lk5AIuogXeW8360wfjasv1Nq8tEKC/view?usp=sharing"
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
                href="/#about"
                className="text-gray-900 dark:text-white hover:underline"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  04.{" "}
                </span>
                About Me
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="text-gray-900 dark:text-white hover:underline"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                  05.{" "}
                </span>
                Contact
              </a>
            </li>
            <li>
              <a
                className="max-[500px]:hidden relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                href="https://drive.google.com/file/d/1lS5Lk5AIuogXeW8360wfjasv1Nq8tEKC/view?usp=sharing"
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
