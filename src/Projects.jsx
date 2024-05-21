import "./Projects.css";
import LearnMoreButton from "./LearnMoreButton";
const Projects = () => {
  return (
    <section className="mw7 center">
      <h2 className="athelas ph3 ph0-l">Projects</h2>
      <article className="pv4 bt bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">
              Tech Giant Invests Huge Money to Build a Computer Out of Science
              Fiction
            </h1>
            <p className="f5 f4-l lh-copy athelas">
              The tech giant says it is ready to begin planning a quantum
              computer, a powerful cpu machine that relies on subatomic
              particles instead of transistors.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              className="db"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
        </div>
        <LearnMoreButton />
      </article>

      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">
              A whale takes up residence in a large body of water
            </h1>
            <p className="f5 f4-l lh-copy athelas">
              This giant of a whale says it is ready to begin planning a new
              swim later this afternoon. A powerful mammal that relies on fish
              and plankton instead of hamburgers.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img
              src="http://mrmrs.github.io/photos/whale.jpg"
              className="db"
              alt="Photo of a whale's tale coming crashing out of the water."
            />
          </div>
        </div>
        <LearnMoreButton />
      </article>

      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">
              ‘We Couldn’t Believe Our Eyes’: A Lost World of Vinyl Is Found
            </h1>
            <p className="f5 f4-l lh-copy athelas">
              Archaeologists have found more than 40 tons of vinyl records, some
              more than a five years old, shedding light on early hipster
              trends.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img
              src="http://mrmrs.github.io/photos/warehouse.jpg"
              className="db"
              alt="Photo of a warehouse with stacked shelves."
            />
          </div>
        </div>
        <LearnMoreButton />
      </article>
    </section>
  );
};

export default Projects;
