import "./About.css"; // Import CSS file

const About = () => {
  return (
    <article className="about-container p-32">
      <div className="about-content">
        <header className="about-header">
          <h3 className="about-title">Exploring Ideas</h3>
          <h4 className="about-subtitle">"Shaping the Future with Ideas"</h4>
        </header>
        <section className="about-section">
          <p className="about-text">
            In a world where innovation drives progress, "Exploring Ideas"
            stands as a beacon of creativity and inspiration. Our mission is to
            unlock the potential within every thought, fostering an environment
            where imagination knows no bounds. Join us on a journey where we
            fuel the fire of innovation, turning dreams into reality and
            pioneering possibilities that were once unimaginable. At "Exploring
            Ideas," your ideas are the foundation of a brighter, more innovative
            tomorrow.
          </p>
        </section>
      </div>
    </article>
  );
};

export default About;
