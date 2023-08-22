import React from "react";
import NavTabs from "./nav";

const styles = {
  headerStyle: { background: "#96ceb4" },
  containerStyle: { marginLeft: "2rem" },
  headingStyle: { paddingTop: "2rem" },
};

export default function Header(props) {
  return (
    <div class="jumbotron jumbotron-fluid" style={styles.headerStyle}>
      <div class="container" style={styles.containerStyle}>
        <h1 style={styles.headingStyle}>Mary Greenwood</h1>
        <NavTabs
          currentPage={props.currentPage}
          handlePageChange={props.handlePageChange}
        />
      </div>
    </div>
  );
}
