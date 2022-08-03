import React from "react";
import Skills from "./Skills";

const biop1 = `My name is Brian Ward. I'm a web developer based in
Boulder, Colorado.`;
const biop2 = `My passions include ultimate frisbee, photography, and gaming. I graduated
Connecticut College in 2018 with a BA in Computer Science. Since then, I have tried my hand at
careers in entertainment, photography, and hospitality, finally circling back to software
development. `;
const biop3 = `Thanks to the DU Coding bootcamp, I have curated a portfolio of my web development projects to
browse at your leisure. 😀`;

export default function About() {
  return (
    <section id="about">
      <h1 className="text-7xl text-center pt-10">About me</h1>
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {biop1}
          </h1>
          <p className="mb-8 leading-relaxed">{biop2}</p>
          <p className="mb-8 leading-relaxed">{biop3}</p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-300 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Skills/>
        </div>
      </div>
    </section>
  );
}
