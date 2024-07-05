import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-heading">Projects & Domains</h2>
      <div className="cards-container">
        <div className="column">
          <div className="card">
            <h3 className="card-title">Web Development</h3>
            <p className="card-description">
              Explore our projects involving responsive web design, dynamic web
              applications, and more.
            </p>
            <Link to="/web-dev-projects" className="learn-more-btn">
              Know More
            </Link>
          </div>

          <div className="card">
            <h3 className="card-title">Machine Learning</h3>
            <p className="card-description">
              Discover our projects in machine learning, leveraging the latest
              algorithms and techniques.
            </p>
            <Link to="/ml-projects" className="learn-more-btn">
              Know More
            </Link>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3 className="card-title">IoT</h3>
            <p className="card-description">
              Learn about our innovative projects in the Internet of Things,
              connecting devices for smarter solutions.
            </p>
            <Link to="/iot-projects" className="learn-more-btn">
              Know More
            </Link>
          </div>

          <div className="card">
            <h3 className="card-title">Cloud Computing</h3>
            <p className="card-description">
              Explore our cloud computing projects, utilizing scalable and
              efficient cloud services.
            </p>
            <Link to="/cloud-projects" className="learn-more-btn">
              Know More
            </Link>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3 className="card-title">Artificial Intelligence</h3>
            <p className="card-description">
              Dive into our AI projects, pushing the boundaries of what machines
              can learn and do.
            </p>
            <Link to="/ai-projects" className="learn-more-btn">
              Know More
            </Link>
          </div>

          <div className="card">
            <h3 className="card-title">Cybersecurity</h3>
            <p className="card-description">
              Check out our cybersecurity projects, aimed at protecting data and
              systems from threats.
            </p>
            <Link to="/cybersecurity-projects" className="learn-more-btn">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
