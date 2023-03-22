import React from "react";

const projectList = [
  {
    pic: "../assets/get_moving_homepage.png",
    title: "Get Moving",
    url: "http://projectthreemern.herokuapp.com/",
    repo: "https://github.com/jicard/Project-3-Repo",
  },
  {
    pic: "src/assets/magpiegallerysplash.png",
    title: "Magpie Gallery",
    url: "https://murmuring-ocean-73396.herokuapp.com/",
    repo: "https://github.com/marysgreenwood/Spaghetti-on-the-Wall-Project",
  },
];

export default function Project() {
  const projects = projectList.map((project) => (
    <card>
      <img src={project.pic} />
      <h3>{project.title}</h3>
      <p>
        Website: <a href={project.url}>{project.url}</a>
      </p>
      <p>
        Repository: <a href={project.repo}>{project.repo}</a>
      </p>
    </card>
  ));
}
