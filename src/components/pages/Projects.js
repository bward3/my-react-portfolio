import React from "react";
import {
  ChipIcon,
  BookOpenIcon,
  PencilIcon,
  ServerIcon,
} from "@heroicons/react/solid";

const projects = [
  {
    name: "Note Taker",
    link: "https://radiant-depths-66946.herokuapp.com/",
    repo: "text-editor-pwa",
    desc: "A progressive web-app for taking notes in a broswer window. Fully downloadable and data-persistent even offline with the help of browser-based service workers.",
    src: "note_taker.png",
    key: 0,
  },
  {
    name: "Tech Zone Developer Blog",
    link: "https://safe-ocean-70370.herokuapp.com/",
    repo: "tech-blog",
    desc: "A simple blog built with express-handlebars for rendering views. Back-end built with MySQL and Sequelize to store posts, users, and comments. User authentication and password storage functionality created with bcrypt.",
    src: "tech_zone.png",
    key: 1,
  },
  {
    name: "Book Search Engine",
    link: "https://cryptic-garden-88765.herokuapp.com/",
    repo: "book-search-engine",
    desc: "Full-stack book search engine using react, MongoDB, express, and Node.js. Users can login, search books, and keep a persistent list of favorites to look back on.",
    src: "ui_ux_tips.png",
    key: 2,
  },
  {
    name: "Dev Spot Career Hub",
    link: "https://glacial-lowlands-31637.herokuapp.com/",
    repo: "devspot",
    desc: "Hub for developers to share their technology proficiencies. Built with handlebars, express, and sequelize.",
    src: "devspot.png",
    key: 3,
  },
];

const tags = [
  <PencilIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />,
  <ChipIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />,
  <BookOpenIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />,
  <ServerIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />,
];

function handleClick(e) {
  e.preventDefault();
  let x = e.target.parentNode.querySelector("#content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

export default function Projects() {
  return (
    <section className="w-screen justify-center p-20">
      {projects.map((project) => {
        return (
          <div
            key={`outer-div-${project.key}`}
            className="flex flex-col w-full justify-center"
          >
            <div
              onClick={handleClick}
              className="bg-gray-800 rounded w-full flex p-4 my-4 h-full items-center hover:cursor-pointer hover:bg-gray-500"
            >
              {tags[project.key]}
              <span className="title-font font-medium text-white">
                {project.name}
              </span>
            </div>
            <div
              key={`hidden-div-${project.key}`}
              className="flex justify-center hidden w-full m-4 border-slate-100"
              id="content"
            >
              <p className="text-white">{project.desc}</p>
              <br />
              <p className="text-white">
                {"Have a look at the"}
                <a className="text-slate-500 hover:text-slate-300" href={project.link}>
                  {" deployed project"}
                </a>
                {", or check out the "}
                <a
                  className="text-slate-500 hover:text-slate-300"
                  href={`https://github.com/bward3/${project.repo}`}
                >
                  {" source code."}
                </a>
                .
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
