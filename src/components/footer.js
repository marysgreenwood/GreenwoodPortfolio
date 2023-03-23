import React from "react";
import linkedIn from "../assets/linkedIn_logo.png";
import github from "../assets/github_logo.png";

const styles= {
    logo: {},
}

export default function Footer() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/mary-greenwood-30b88450/">
        <img src={linkedIn} class="logo" alt='linkedIn'/>
      </a>
      <a href="https://github.com/marysgreenwood">
        <img src={github} class="logo" alt='github' />
      </a>
    </div>
  );
}
