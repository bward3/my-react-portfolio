import React from "react";

const name = "Brian Ward";

export default function Home() {
  return (
    <div className="homePage">
      <div className="homeInfo">
        <h1>
          {name.split("").map((ltr) => (
            <span className="homeName">{ltr}</span>
          ))}
        </h1>
        <h4 className="subtitle">Full stack web developer / Freelance photographer</h4> 
      </div>
      <div className="imgContainer">
        <img
          className="homeImg"
          src="./images/home.jpg"
          alt="Brian on a shoot"
        />
      </div>
    </div>
  );
}
