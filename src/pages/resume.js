import React from "react";
import resume1 from "../assets/resume_p1-screenshot.png";
import resume2 from "../assets/resume_p2-screenshot.png";

export default function Resume() {
  return (
    <div>
      <img
        class="col-md-5"
        src={resume1}
        alt="resume"
        style={{ margin: "25px" }}
      />
      <img
        class="col-md-5"
        src={resume2}
        alt="resume"
        style={{ margin: "25px" }}
      />
    </div>
  );
}
