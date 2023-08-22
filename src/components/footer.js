import React from "react";
import linkedIn from "../assets/linkedIn_logo.png";
import github from "../assets/github_logo.png";
import insta from "../assets/instaLogo.jpeg";

const styles = {
  logo: { margin: "5px", borderRadius: "21%", maxWidth: "50px" },
  bodyStyle: {
    background: "#96ceb4",
    padding: "20px",
    minHeight: "90px",
  },
  alignRight: { position: "absolute", right: "10px" },
};

export default function Footer() {
  return (
    <div style={styles.bodyStyle}>
      <div style={styles.alignRight}>
        <a href="https://www.linkedin.com/in/mary-greenwood-software-developer/">
          <img src={linkedIn} style={styles.logo} alt="linkedIn" />
        </a>
        <a href="https://github.com/marysgreenwood">
          <img src={github} style={styles.logo} alt="github" />
        </a>
        <a href="https://instagram.com/marysgreenwood?igshid=YmMyMTA2M2Y=">
          <img src={insta} style={styles.logo} alt="instagram" />
        </a>
      </div>
    </div>
  );
}
