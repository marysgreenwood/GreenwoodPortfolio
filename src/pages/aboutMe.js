import React from "react";
import "./aboutMe.css";
import profilePic from "../assets/Profile Pic.jpeg";

export default function AboutMe() {
  return (
    //style={{ background: "#ffeead" }}
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img src={profilePic} alt="profile picture" class="img-responsive" />
        </div>
        <div class="col-md-9 textStyle">
          <div class="cardStyle">
            <div class="buffer">
              <p>Email: marysgreenwood@gmail.com </p>
              <p>
                Creative and methodical web developer with a certificate from
                the Full Stack Coding Bootcamp at UNC Chapel Hill. Experience in
                full stack projects utilizing strong communication and
                organizational skills and a strategic approach to solving
                problems and bringing new ideas to life. Special focus on data
                management and back-end organization. Thrives in collaborative
                and diverse team culture. Located in Lansing, North Carolina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
