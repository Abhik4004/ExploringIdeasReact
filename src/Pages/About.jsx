import "./About.css"; // Import CSS file

const About = () => {
  return (
    <article data-name="article-full-bleed-background">
      <div className="cf background">
        <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
          <header className="bb b--black-70 pv4">
            <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">
              Exploring Ideas
            </h3>
            <h4 className="f3 fw4 i lh-title mt0">Siem Reap, Cambodia</h4>
          </header>
          <section className="pt5 pb4">
            <p className="times lh-copy measure f4 mt0">
              In the realm of creativity and innovation, exploring ideas serves
              as the cornerstone for progress and discovery. It is the process
              of delving into the unknown, challenging the status quo, and
              envisioning possibilities beyond the current horizon. By engaging
              in brainstorming, research, and experimentation, individuals and
              teams can uncover unique solutions to complex problems, generate
              groundbreaking concepts, and foster a culture of continuous
              improvement. Whether in technology, art, science, or everyday
              life, the act of exploring ideas ignites curiosity, fuels passion,
              and paves the way for transformative change. Embracing this
              journey not only leads to personal growth but also contributes to
              the advancement of society as a whole.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default About;
