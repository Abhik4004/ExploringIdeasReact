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
      <Hero />
      <About />
      <Projects />
      <Pupil />
      <div className="button-container">
        <Button />
      </div>
      <Footer />
    </div>
  );
}

export default FullPage;
