import React from "react";
import { jobs, education } from "../components/resumecontent";
import "./resume.css";

export default function Resume() {

  const jobList = jobs.map((job) => (
    <div class="resumeItem">
      <h4> {job.company} </h4>
      <ul>
        <li class="jobInfo">
          {job.location}, {job.dates}
        </li>
        <li class="jobInfo">{job.title}</li>
        <li class="jobInfo">{job.description}</li>
      </ul>
    </div>
  ));

  const educationHistory = education.map((item) => (
    <div class="resumeItem">
      <h4>
        {item.institution}, {item.degree}
      </h4>
      <p>{item.dateAwarded}</p>
    </div>
  ));

  const onButtonClick = () => {
    const pdfUrl = "GreenwoodResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "GreenwoodResume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div>
      <div>
        <div class="downloadResume">
        <button class="downloadButton" onClick={onButtonClick}>
                    Download PDF
                </button>
          
        </div>
        <div>
          <div class="card resumeContent">
            <h2>Work experience</h2>
            {jobList}
          </div>
        </div>
        <div>
          <div class="card resumeContent">
            <h2>Technical Skills</h2>
            <ul>
              <li>Javascript</li>
              <li>Git</li>
              <li>Github</li>
              <li>React</li>
              <li>Nodejs</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Apollo</li>
              <li>Nextjs</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="card resumeContent">
            <h2>Education</h2>
            {educationHistory}
          </div>
        </div>
        <div>
          <div class="card resumeContent">
            <h2>Languages</h2>
            <ul>
              <li>English–native language</li>
              <li>French–fluent</li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  );
}
