import React from "react";
import NavTabs from "./nav";

const styles = {
  headerStyle: { background: "#96ceb4" },
  headingStyle: { fontSize: "5rem" },
};

export default function Header(props) {
  return (
    <div class="jumbotron jumbotron-fluid" style={styles.headerStyle}>
      <div class="container">
        <h1 style={styles.headingStyle}>Mary Greenwood</h1>
        <NavTabs
          currentPage={props.currentPage}
          handlePageChange={props.handlePageChange}
        />
      </div>
    </div>
  );
}
