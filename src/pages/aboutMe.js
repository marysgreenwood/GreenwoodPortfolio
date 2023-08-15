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
          Creative and methodical web developer with a certificate from the Full
          Stack Coding Bootcamp at UNC Chapel Hill. Experience in full stack
          projects utilizing strong communication and organizational skills and
          a strategic approach to solving problems and bringing new ideas to
          life. Special focus on data management and back-end organization.
          Thrives in collaborative and diverse team culture. Located in Lansing,
          North Carolina.
        </p>
      </div>
    </div>
  );
}
