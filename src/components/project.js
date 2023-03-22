import React from "react";
import magpie from "../assets/magpiegallerysplash.png";
import getMoving from "../assets/get_moving_homepage.png";

const projectList = [
  {
    pic: getMoving,
    title: "Get Moving",
    url: "http://projectthreemern.herokuapp.com/",
    repo: "https://github.com/jicard/Project-3-Repo",
  },
  {
    pic: magpie,
    title: "Magpie Gallery",
    url: "https://murmuring-ocean-73396.herokuapp.com/",
    repo: "https://github.com/marysgreenwood/Spaghetti-on-the-Wall-Project",
  },
];

export default function Project() {
  const projects = projectList.map((project) => (
    <div class="project">
      <img src={project.pic} />
      <h3>{project.title}</h3>
      <p>
        Website: <a href={project.url}>{project.url}</a>
      </p>
      <p>
        Repository: <a href={project.repo}>{project.repo}</a>
      </p>
    </div>
  ));
  return <div>{projects}</div>;
}
