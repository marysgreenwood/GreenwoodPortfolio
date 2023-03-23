import React from "react";
import magpie from "../assets/magpiegallerysplash.png";
import getMoving from "../assets/get_moving_homepage.png";
import socialMedia from "../assets/socialmedia.jpg";
import hike from "../assets/hike.jpg";
import weather from "../assets/weatherDashboard.png";
import question from "../assets/question.jpg";

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
  {
    pic: hike,
    title: "Hike Planner",
    url: "https://zellis117.github.io/Team-Fabulous-P1-API-Application/",
    repo: "https://github.com/zellis117/Team-Fabulous-P1-API-Application",
  },
  {
    pic: weather,
    title: "Weather Dashboard",
    url: "https://marysgreenwood.github.io/Module-6-Challenge-Roxie-Boxweiler/",
    repo: "https://github.com/marysgreenwood/Module-6-Challenge-Roxie-Boxweiler.git",
  },
  {
    pic: question,
    title: "Coding Quiz",
    url: "https://marysgreenwood.github.io/Module-4-Challenge-Roxie-Boxweiler/",
    repo: "https://github.com/marysgreenwood/Module-4-Challenge-Roxie-Boxweiler.git",
  },
  {
    pic: socialMedia,
    title: "Social Media API",
    url: "https://app.castify.com/view/21faab81-711f-40a2-bb44-e939e6a4b470",
    repo: "https://github.com/marysgreenwood/social-media-API-M18MG",
  },
];

export default function Project() {
  const projects = projectList.map((project) => (
    <div class="project">
      <img src={project.pic} alt="project image" />
      <h3>{project.title}</h3>
      <p>
        Website/ Demo: <a href={project.url}>{project.url}</a>
      </p>
      <p>
        Repository: <a href={project.repo}>{project.repo}</a>
      </p>
    </div>
  ));
  return <div>{projects}</div>;
}
