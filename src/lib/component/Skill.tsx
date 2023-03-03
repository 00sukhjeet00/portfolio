import React from "react";
import Title from "./Title";
import { Skills } from "@/lib/utils/Skill";
export default function Skill() {
  return (
    <div className="pt-20">
      <Title title={"Skills"} num={"01"} />
      <div className="center flex justify-evenly">
        {Skills.map((item) => (
          <a href={item.link} target="_blank">
            <img
              src={item.img}
              alt="React & React Native"
              width="60"
              height="60"
              style={{filter:item.name=="Next Js"? "invert(1)":"none"}}
            />
            <p className="text-white">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
