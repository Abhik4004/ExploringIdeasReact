import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Teams from "./Pages/Full_Page/Team";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./FullPage.css";
import Pupil from "./Pages/Pupil";

function FullPage() {
  const [showTeams, setShowTeams] = useState(false);

  const handleShowTeams = () => {
    setShowTeams(true);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Hero />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="projects">
                  <Projects />
                </div>
              </>
            }
          />
          <Route
            path="/web-dev-projects"
            element={<div>Web Development Projects</div>}
          />
          <Route
            path="/aiml-projects"
            element={<div>AI/ML, IoT, Cloud Projects</div>}
          />
        </Routes>
        {!showTeams && (
          <>
            <Pupil onShowTeams={handleShowTeams} />
            <div className="button-container">
              <ContactPage />
            </div>
            <div id="contact">
              <Footer />
            </div>
          </>
        )}
        {showTeams && (
          <>
            <Teams />
            <div className="button-container">
              <ContactPage />
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default FullPage;
