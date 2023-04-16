import Head from "next/head";
import dynamic from "next/dynamic";
import Experience from "@/lib/component/Experience";
import Links from "@/lib/component/Links";
import Work from "@/lib/component/Work";
import Contact from "@/lib/component/Contact";
import Navbar from "@/lib/component/Navbar";
import Skill from "@/lib/component/Skill";
import { useEffect, useState } from "react";
import Loader from "@/lib/component/Loader";

export default function Home() {
  const [isLoading, setisLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <title>Sukhjeet Singh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className="container lg:px-56 max-[500px]:px-5 pt-20 max-[500px]:pt-36 flex flex-col">
            <span
              className="text-transparent text-lg bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500"
              data-aos="fade-up"
            >
              Hi, my name is
            </span>
            <span
              className="max-[500px]:text-5xl text-8xl text-white mb-5"
              data-aos="fade-up"
            >
              Sukhjeet Singh.
            </span>
            <span className="max-[500px]:text-2xl text-4xl text-gray-400" data-aos="fade-up" style={{transitionDelay:"0.5s"}}> 
              I build things for the
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
                {" cross platform."}
              </span>
            </span>
            <span className="max-[500px]:text-sm text-xl text-gray-400" data-aos="fade-up" style={{transitionDelay:"0.8s"}}>
              I’m a software engineer specializing in building exceptional
              digital experiences.
            </span>
            <div className="mt-8" data-aos="fade-up" style={{transitionDelay:"0.8s"}}>
              <a
                href="mailto:sukhjeet20002@gmail.com"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Let's Connect
                </span>
              </a>
            </div>
            <Links />
            <Skill />
            <Experience />
            <Work />
            <Contact />
            <footer className="text-center text-gray-300 mt-2 mb-5">
              Designed & Built by
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 mr-2">
                {" Sukhjeet Singh"}
              </span>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
