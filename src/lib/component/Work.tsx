import React from "react";
import Title from "./Title";

export default function Work() {
  return (
    <div className="pt-20">
      <Title title={"Some Things I’ve Built"} num={"03"} />

      <div className="flex flex-wrap flex-row justify-evenly">
        <div className="my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a
            href="https://00sukhjeet00.github.io/JPEG_Transcoder_WASM/"
            target={"_blank"}
          >
            <img className="rounded-t-lg" src="/assets/jpeg.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                JPEG Transcoder
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              JPEG Transcoder Web assembly
            </p>
          </div>
        </div>
        <div className="my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a
            href="https://www.npmjs.com/package/@00sukhjeet00/compilerjs"
            target={"_blank"}
          >
            <img className="rounded-t-lg" src="/assets/compiler.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Compiler Js
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Node Js Library
            </p>
          </div>
        </div>
        <div className="my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://varnudais.in/" target={"_blank"}>
            <img className="rounded-t-lg" src="/assets/varnudais.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Varnduais
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              E-commerce Platform
            </p>
          </div>
        </div>
        <div className="my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="https://vigaah.com/" target={"_blank"}>
            <img className="rounded-t-lg" src="/assets/vigaah.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Vigaah
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              E-commerce Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
