import React from "react";
import Title from "./Title";

export default function Contact() {
  return (
    <div
      className="pt-20"
      id="about"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Title title={"About Me"} num={"04"} />
      <div className="flex justify-center items-center py-4 flex-col">
        <p className="lg:w-3/4 text-gray-400 my-2 text-center">
          With 2 years of experience in Frontend development using React/Next
          Js, and React Native, I possess a deep understanding of these
          technologies and their practical applications in building user
          interfaces for web and mobile applications. I am skilled in developing
          responsive and scalable applications, and have experience in areas
          such as state management, component architecture, API integration, and
          performance optimisation. Additionally, I am well-versed in the latest
          industry trends and best practices, and have collaborated with
          designers, backend developers, and other stakeholders to deliver
          high-quality frontend solutions.
        </p>
      </div>
    </div>
  );
}
