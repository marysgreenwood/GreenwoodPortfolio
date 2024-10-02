import React from "react";
import "./nav.css";
//import { NavItem } from "react-bootstrap";

const styles = {
  navStyle: { paddingLeft: "0%" },
  //textStyle: {},
};
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="container" style={styles.navStyle}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#aboutMe"
            onClick={() => handlePageChange("aboutMe")}
            className={currentPage === "aboutMe" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            id= "portfolio"
            href="#portfolio"
            onClick={() => handlePageChange("portfolio")}
            //  TODO: Add a comment explaining what this logic is doing

            className={
              currentPage === "portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            

            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"

            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
