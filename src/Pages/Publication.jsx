import LearnMoreButton from "../Components/LearnMoreButton";
import "./Publication.css"; // Import the CSS file

const Publication = () => {
  return (
    <section className="mw7 center avenir">
      <h2 className="baskerville fw1 ph3 ph0-l">Publications</h2>
      <article className="bt bb b--black-10">
        <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img
                src="http://mrmrs.github.io/photos/cpu.jpg"
                className="db"
                alt="Photo of a dimly lit room with a computer interface terminal."
              />
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">
                Tech Giant Invests Huge Money to Build a Computer Out of Science
                Fiction
              </h1>
              <p className="f6 f5-l lh-copy">
                The tech giant says it is ready to begin planning a quantum
                computer, a powerful cpu machine that relies on subatomic
                particles instead of transistors.
              </p>
              <LearnMoreButton />
            </div>
          </div>
        </a>
      </article>
      <article className="bb b--black-10">
        <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img
                src="http://mrmrs.github.io/photos/warehouse.jpg"
                className="db"
                alt="Photo of a warehouse with stacked shelves."
              />
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">
                Warehouse Prices Are Fast on the Rise
              </h1>
              <p className="f6 f5-l lh-copy">
                A warehouse is a commercial building for storage of goods.
                Warehouses are used by manufacturers, importers, exporters,
                wholesalers, transport businesses, customs, etc. They are
                usually large plain buildings in industrial areas of cities,
                towns and villages.
              </p>
              <LearnMoreButton />
            </div>
          </div>
        </a>
      </article>
    </section>
  );
};

export default Publication;
