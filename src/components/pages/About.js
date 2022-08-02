import React from "react";

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
    <div class="about-box">
      <h1>About me</h1>
      <div className="card about">
        <p className="card-body">{biop1}</p>
        <p className="card-body">{biop2}</p>
        <p className="card-body">{biop3}</p>
      </div>
    </div>
  );
}
