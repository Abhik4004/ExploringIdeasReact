import "./Pupil.css";

const mentor = {
  name: "Dr.Satyabrata Maity",
  title: "Web Developer",
  introduction:
    "Dr. Satyabrata Maity has dedicated his career to AI and ML, specializing in designing intelligent systems for predictive analytics, natural language processing, and automated decision-making. His expertise lies in creating AI-driven applications that enhance user interaction and deliver insightful results.",
  image: "assets/sbm.enc",
  github: "https://github.com/johndoe",
  linkedin: "https://www.linkedin.com/in/johndoe",
};

const Pupil = ({ onShowTeams }) => {
  const handleClick = () => {
    if (onShowTeams) {
      onShowTeams();
    }
  };

  return (
    <div className="pupil-container" id="team">
      <div className="team-title">Meet Your Mentor</div>
      <div className="pupil-grid">
        <div className="fade-in">
          <div className="pupil-card">
            <img src={mentor.image} className="image" alt={mentor.name} />
            <div className="pupil-details">
              <h2>
                <b>{mentor.name}</b> | {mentor.title}
              </h2>
              <hr></hr>
              <p className="mentor-introduction">{mentor.introduction}</p>
              <div className="social-links">
                <a
                  href={mentor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="show-teams-btn">
        Show Teams
      </button>
    </div>
  );
};

export default Pupil;
