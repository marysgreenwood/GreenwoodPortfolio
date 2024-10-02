//About Me, Portfolio, Contact, and Resume

import React, { useState } from "react";
import "./portfolioContainer.css"
//pages
import AboutMe from "../pages/aboutMe";
import Portfolio from "../pages/portfolio";
import Resume from "../pages/resume";
import Contact from "../pages/contact";
import Header from "./header";
import Footer from "./footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("aboutMe");

  const renderPage = () => {
    if (currentPage === "aboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div class="header">
        <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      </div>

      <div class="mainBody">
        {renderPage()}
        {console.log(currentPage)}
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}
