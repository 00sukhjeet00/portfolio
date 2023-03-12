import React from "react";
import Title from "./Title";
import { Experiences } from "@/lib/utils/Experience";
export default function Experience() {
  return (
    <div className="pt-20" id="experience" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <Title title={"Experience"} num={"02"} />
      <section className="slider">
        <div className="content_container">
          <ul className="slide_navigation">
            <li className="mb-4">
              <a href="/#slide_1" className="active">
                Covetus
              </a>
            </li>
            <li className="mb-4">
              <a href="/#slide_2">ITinformatix</a>
            </li>
            <li className="mb-4">
              <a href="/#slide_3">Freelancer</a>
            </li>
          </ul>
        </div>

        <div className="slides">
          {Experiences.map((exp,index) => (
            <div className="slide" id={"slide_"+(index+1)} key={index}>
              <div className="inner_content">
                <h1 className="text-lg">
                  {exp.title}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 mr-2">
                    {` @${exp.company}`}
                  </span>
                </h1>
                <p className="text-sm text-gray-400">{exp.date}</p>
                {exp.description.map((desc) => (
                  <p className="mb-1">
                    <span className="text-transparent text-lg bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 mr-2">
                      ▹
                    </span>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
