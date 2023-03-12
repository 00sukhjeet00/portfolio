import React from "react";
import Title from "./Title";

export default function Contact() {
  return (
    <div
      className="pt-20"
      id="contact"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Title title={"What’s Next?"} num={"04"} />
      <div className="flex justify-center items-center py-4 flex-col">
        <h2 className="text-white text-4xl">Get In Touch</h2>
        <p className="lg:w-3/4 text-gray-400 my-2 text-center">
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
        <a
          href="mailto:sukhjeet20002@gmail.com"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Let's Connect
          </span>
        </a>
      </div>
    </div>
  );
}
