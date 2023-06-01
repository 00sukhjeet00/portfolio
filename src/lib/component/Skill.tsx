import React from "react";
import Title from "./Title";
import { Skills } from "@/lib/utils/Skill";
export default function Skill() {
  return (
    <div className="pt-20" id="skill" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000"
    style={{position:"relative"}}
    >
      {/* <img src="/assets/jellyfish.svg" className="obj3"/> */}
      <Title title={"Skills"} num={"01"} />
      <div className="center flex justify-evenly items-center mb-5 pt-10">
        <a
          className="flex flex-col	items-center"
          href="https://www.python.org"
          target="_blank"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
            width="60"
            height="60"
            className="img-color"
          />
          <p className="text-white mt-2">Python</p>
        </a>
        <a
          className="flex flex-col	items-center"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            width="60"
            height="60"
            className="img-color"
          />
          <p className="text-white mt-2">JavaScript</p>
        </a>
        <a
          className="flex flex-col	items-center"
          href="http://www.cplusplus.org/"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
            alt="C++"
            width="60"
            height="60"
            className="img-color"
          />
          <p className="text-white mt-2">C++</p>
        </a>
        <a
          className="flex flex-col	items-center"
          href="https://soliditylang.org/"
          target="_blank"
        >
          <img
            src="https://www.svgrepo.com/show/374088/solidity.svg"
            alt="Solidity"
            width="60"
            height="60"
            className="img-color"
          />
          <p className="text-white mt-2">Solidity</p>
        </a>
      </div>
      <div className="center flex justify-evenly flex-wrap">
        {Skills.map((item, index) => (
          <a
            key={index}
            className="flex flex-col items-center pr-8 pl-8 mb-8"
            href={item.link}
            target="_blank"
          >
            <img
              src={item.img}
              alt="React & React Native"
              width="60"
              height="60"
              className={"img-color" + " " + index}
              // style={{ filter: item.name == "Next Js" ? "invert(1)" : "grayscale(1)" }}
            />
            <p className="text-white mt-2">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
