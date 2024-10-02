import React from "react";
import NavTabs from "./nav";
import "./header.css";

export default function Header(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="headingStyle">
        <h1>Mary Greenwood</h1>
        <NavTabs
          currentPage={props.currentPage}
          handlePageChange={props.handlePageChange}
        />
      </div>
    </div>
  );
}
