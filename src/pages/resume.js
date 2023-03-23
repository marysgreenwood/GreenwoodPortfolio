import React from "react";
import resume from "../assets/resume_screenshot.png";

export default function Resume() {
  return (
    <div>
      <img
        class="col-md-8"
        src={resume}
        alt="resume"
        style={{ margin: "25px" }}
      />
    </div>
  );
}
