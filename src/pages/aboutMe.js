import React from "react";
import profilePic from "../assets/Profile Pic.jpeg";

const styles = {
  picStyles: {
    maxWidth: "300px",
    margin: "25px",
    borderRadius: "50%",
  },
  bodyStyle: { margin: "25px" },
};
export default function AboutMe() {
  return (
    <div class="row" style={{ background: "#ffeead" }}>
      <div class="col-md-3 m3">
        <img src={profilePic} alt="profile picture" style={styles.picStyles} />
      </div>
      <div class="col-md-7" style={styles.bodyStyle}>
        <h2>About Me</h2>
        <p>
          Junior software developer with background in academia. Excellent
          organizational, analytical problem-solving and research skills.
        </p>
      </div>
    </div>
  );
}
