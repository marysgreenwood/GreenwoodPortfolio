import React from "react";
import magpie from "../assets/magpiegallerysplash.png";
import getMoving from "../assets/get_moving_homepage.png";
import socialMedia from "../assets/socialmedia.jpg";
import hike from "../assets/hike.jpg";
//import weather from "../assets/weatherDashboard.png";
//import question from "../assets/question.jpg";

const styles = {
  projectPic: {
    width: "100%",
    height: "250px",
    //maxHeight: "300px",
    objectFit: "cover",
  },
  cardStyles: {
    background: "#ffeead",
    margin: "2rem",
  },
  projectTitles: { marginTop: "1rem" },
};
const projectList = [
  {
    pic: getMoving,
    title: "Get Moving",
    url: "http://projectthreemern.herokuapp.com/",
    repo: "https://github.com/marysgreenwood/Get-Moving",
    description:
      "An app to help organize your next move, allowing you to personalize information and packing lists so nothing gets left behind. Full MERN stack using Apollo to query database",
  },
  {
    pic: magpie,
    title: "Magpie Gallery",
    url: "https://murmuring-ocean-73396.herokuapp.com/",
    repo: "https://github.com/marysgreenwood/Spaghetti-on-the-Wall-Project",
    description:
      "Provides a platform for aspiring artists to post their work and to view the works of other artists. Utilizes Express, NodeJS, mySQL, Sequelize, Multer, Javascript and Handlebars",
  },
  {
    pic: hike,
    title: "Hike Planner",
    url: "https://zellis117.github.io/Team-Fabulous-P1-API-Application/",
    repo: "https://github.com/marysgreenwood/Hike-Planner",
    description:
      "Allows users to plan hikes by providing a date and National Park name or location. Provides local weather forecast for that day and place. Front-end only; utilizes Javascript, CSS and HTML. Fetches information from National Weather Database and National Parks Database",
  },
  {
    pic: socialMedia,
    title: "Social Media API",
    url: "https://app.castify.com/view/21faab81-711f-40a2-bb44-e939e6a4b470",
    repo: "https://github.com/marysgreenwood/social-media-API-M18MG",
    description:
      "Uses express and mongoose to provide backend framework for a social media platform wherein users can post thoughts, react to thoughts, and befriend other users. The URL provides a demo for the app's functionality.",
  },
];

export default function Project() {
  const projects = projectList.map((project) => (
    <div class="card col-md-3" style={styles.cardStyles}>
      <div class="card-body">
        <img src={project.pic} alt="project image" style={styles.projectPic} />
        <h3 style={styles.projectTitles}>{project.title}</h3>
        <p>
          Website/ Demo: <a href={project.url}>{project.url}</a>
        </p>
        <p>
          Repository: <a href={project.repo}>{project.repo}</a>
        </p>
        <p>Description: {project.description}</p>
      </div>
    </div>
  ));
  return <div class="row">{projects}</div>;
}
