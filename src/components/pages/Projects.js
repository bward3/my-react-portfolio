import React from "react";

export default function Projects() {
  return (
    <div>
      <div className="titleDiv">
        <h1>Check out my deployed projects!</h1>
      </div>
      <div className="container-fluid">
        <div className="row py-5 justify-center">
          <div className="col-5 display-flex justify-center">
            <img src="./images/note_taker.png" alt="deployed-screenshot"></img>
          </div>
          <div className="col-5 display-flex justify-center">
            <img src="./images/tech_zone.png" alt="deployed-screenshot"></img>
          </div>
        </div>
        <div className="row py-5 justify-center">
          <div className="col-5 display-flex justify-center">
            <img src="./images/ui_ux_tips.png" alt="deployed-screenshot"></img>
          </div>
          <div className="col-5 display-flex justify-center">
            <img src="./images/devspot.png" alt="deployed-screenshot"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
