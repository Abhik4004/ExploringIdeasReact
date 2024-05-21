import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Publication from "./Publication";
import Pupil from "./Pupil";
import Button from "./Button_Next";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Publication />
      <Pupil />
      <div style={{ marginLeft: 650, marginBottom: 50 }}>
        <Button />
      </div>
      <Footer />
    </div>
  );
};

export default App;
