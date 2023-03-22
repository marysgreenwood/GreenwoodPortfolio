//About Me, Portfolio, Contact, and Resume

import React, { useState } from "react";
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
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />

      {renderPage()}
      {console.log(currentPage)}
      <Footer />
    </div>
  );
}
