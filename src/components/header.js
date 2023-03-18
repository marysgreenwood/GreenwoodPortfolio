import React from "react";
import NavTabs from "./nav";

export default function Header(props) {
  return (
    <div>
    <h1>Mary Greenwood</h1>
      <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
      
    </div>
  );
}

