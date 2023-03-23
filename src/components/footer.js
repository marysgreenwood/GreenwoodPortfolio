import React from "react";
import linkedIn from "../assets/linkedIn_logo.png";
import github from "../assets/github_logo.png";
import insta from "../assets/instaLogo.jpeg";

const styles = {
  logo: { maxWidth: "50px", margin: "5px" },
  bodyStyle: {
    background: "#96ceb4",
    padding: "20px",
  },
  alignRight: { marginLeft: "75%" },
};

export default function Footer() {
  return (
    <div style={styles.bodyStyle}>
      <div style={styles.alignRight}>
        <a href="https://www.linkedin.com/in/mary-greenwood-30b88450/">
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
