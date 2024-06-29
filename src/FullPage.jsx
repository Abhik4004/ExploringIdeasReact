import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Pupil from "./Pages/Pupil";
import Button from "./Components/Button_Next";
import Footer from "./Components/Footer";
import "./FullPage.css"; // Add this line to import the CSS

function FullPage() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="team">
        <Pupil />
      </div>
      <div className="button-container">
        <Button />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default FullPage;
