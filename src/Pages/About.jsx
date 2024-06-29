import "./About.css"; // Import CSS file

const About = () => {
  return (
    <article className="about-container">
      <div className="about-content">
        <header className="about-header">
          <h3 className="about-title">Exploring Ideas</h3>
          <h4 className="about-subtitle">Siem Reap, Cambodia</h4>
        </header>
        <section className="about-section">
          <p className="about-text">
            In the realm of creativity and innovation, exploring ideas serves as
            the cornerstone for progress and discovery. It is the process of
            delving into the unknown, challenging the status quo, and
            envisioning possibilities beyond the current horizon. By engaging in
            brainstorming, research, and experimentation, individuals and teams
            can uncover unique solutions to complex problems, generate
            groundbreaking concepts, and foster a culture of continuous
            improvement. Whether in technology, art, science, or everyday life,
            the act of exploring ideas ignites curiosity, fuels passion, and
            paves the way for transformative change. Embracing this journey not
            only leads to personal growth but also contributes to the
            advancement of society as a whole.
          </p>
        </section>
      </div>
    </article>
  );
};

export default About;
