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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
