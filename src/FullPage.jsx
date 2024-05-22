import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Publication from "./Pages/Publication";
import Pupil from "./Pages/Pupil";
import Button from "./Components/Button_Next";
import Footer from "./Components/Footer";

function FullPage() {
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
}

export default FullPage;
