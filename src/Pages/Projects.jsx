import "./Projects.css";
import LearnMoreButton from "../Components/LearnMoreButton";

const Projects = () => {
  return (
    <section className="mw7 center">
      <h2 className="athelas ph3 ph0-l">Projects</h2>

      <article className="pv4 bt bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">
              Tech Giant's Quantum Computer Initiative
            </h1>
            <p className="f5 f4-l lh-copy athelas">
              The tech giant is planning a quantum computer, revolutionizing
              computing with subatomic particles.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              className="db w-100"
              alt="Tech Giant's Quantum Computer Initiative"
            />
          </div>
        </div>
        <LearnMoreButton />
      </article>

      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">
              Whale Habitat Preservation Project
            </h1>
            <p className="f5 f4-l lh-copy athelas">
              Initiative to protect whale habitats and study their migration
              patterns and ecosystem impact.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img
              src="http://mrmrs.github.io/photos/whale.jpg"
              className="db w-100"
              alt="Whale Habitat Preservation Project"
            />
          </div>
        </div>
        <LearnMoreButton />
      </article>

      <article className="pv4 bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">
              Lost World of Vinyl Records Discovery
            </h1>
            <p className="f5 f4-l lh-copy athelas">
              Archaeological find of over 40 tons of vinyl records, revealing
              early music trends and cultural insights.
            </p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img
              src="http://mrmrs.github.io/photos/warehouse.jpg"
              className="db w-100"
              alt="Lost World of Vinyl Records Discovery"
            />
          </div>
        </div>
        <LearnMoreButton />
      </article>
    </section>
  );
};

export default Projects;
