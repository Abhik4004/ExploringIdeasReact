import { useState } from "react";
import Hero from "../Hero";
import { Projects } from "../../Components/";
import About from "../About";
import Pupil from "../Pupil";
import ContactPage from "../ContactPage";

const Homepage = () => {
  const [showTeams, setShowTeams] = useState(false);

  const handleShowTeams = () => {
    setShowTeams(true);
  };

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <>
        {showTeams ? (
          "Here Team component suppose to go"
        ) : (
          <Pupil onShowTeams={handleShowTeams} />
        )}
        <ContactPage />
      </>
    </>
  );
};

export default Homepage;
