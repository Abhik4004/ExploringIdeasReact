import { useState } from "react";
import Hero from "../Hero";
import { Projects } from "../../Components/";
import About from "../About";
import Pupil from "../Pupil";
import ContactPage from "../ContactPage";
import Teams from "../Full_Page/Team";

const Homepage = () => {
  const [showTeams, setShowTeams] = useState(false);

  const handleShowTeams = () => {
    setShowTeams(!showTeams);
  };

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <>
        {showTeams ? (
          <Teams onShowTeams={handleShowTeams} />
        ) : (
          <Pupil onShowTeams={handleShowTeams} />
        )}
        {/* <ContactPage /> */}
      </>
    </>
  );
};

export default Homepage;
