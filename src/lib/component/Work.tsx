import React from "react";
import Title from "./Title";

export default function Work() {
  return (
    <div className="pt-20" id="work">
      <Title title={"Some Things I’ve Built"} num={"03"} />

      <div className="flex flex-wrap flex-row justify-evenly">
        <div
          style={{ background: "transparent" }}
          className="my-2 max-w-sm bg-white rounded-lg dark:bg-gray-800 "
        >
          <a
            href="https://00sukhjeet00.github.io/JPEG_Transcoder_WASM/"
            target={"_blank"}
          >
            <img className="rounded-t-lg img-color" src="/assets/jpeg.png" alt="" />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                JPEG Transcoder
              </h5>
            </a>
            <div className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
              JPEG Transcoder Web assembly
              <div className="flex">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  width="20"
                  height="20"
                  className="mx-1"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/1200px-WebAssembly_Logo.svg.png"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ background: "transparent" }}
          className="my-2 max-w-sm bg-white rounded-lg dark:bg-gray-800 "
        >
          <a
            href="https://www.npmjs.com/package/@00sukhjeet00/compilerjs"
            target={"_blank"}
          >
            <img className="rounded-t-lg img-color" src="/assets/compiler.png" alt="" />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                Compiler Js
              </h5>
            </a>
            <div className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
              Node Js Library
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                width={30}
                height={30}
                className="mx-1"
              />
            </div>
          </div>
        </div>
        <div
          style={{ background: "transparent" }}
          className="my-2 max-w-sm bg-white rounded-lg dark:bg-gray-800 "
        >
          <a href="https://varnudais.in/" target={"_blank"}>
            <img className="rounded-t-lg img-color" src="/assets/varnudais.png" alt="" />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                Varnduais
              </h5>
            </a>
            <div className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
              E-commerce Platform
              <div className="flex">
                <img
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  width={30}
                  height={30}
                  className="mx-1"
                />
                <img
                  src="https://img.icons8.com/plasticine/100/000000/react.png"
                  width={30}
                  height={30}
                  className="mx-1"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/redux.png"
                  width={30}
                  height={30}
                  className="mx-1"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/mongodb.png"
                  width={30}
                  height={30}
                  className="mx-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ background: "transparent" }}
          className="my-2 max-w-sm bg-white rounded-lg dark:bg-gray-800 "
        >
          <a href="https://vigaah.com/" target={"_blank"}>
            <img className="rounded-t-lg img-color" src="/assets/vigaah.png" alt="" />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                Vigaah
              </h5>
            </a>
            <div className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
              E-commerce Platform
              <div className="flex">
                <img
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  width={30}
                  height={30}
                  className="mx-1"
                />
                <img
                  src="https://img.icons8.com/plasticine/100/000000/react.png"
                  width={30}
                  height={30}
                  className="mx-1"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/redux.png"
                  width={30}
                  height={30}
                  className="mx-1"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/mongodb.png"
                  width={30}
                  height={30}
                  className="mx-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
