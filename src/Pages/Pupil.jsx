import "./Pupil.css";

const mentor = {
  name: "Dr.Satyabrata Maity",
  title: "Web Developer",
  introduction:
    "Dr. Satyabrata Maity is a seasoned web developer with over 10 years of experience. Specializing in front-end development, he excels in crafting user-friendly and responsive web applications using modern frameworks. His expertise lies in creating intuitive interfaces that enhance user experience, leveraging his deep understanding of JavaScript, CSS, and various front-end technologies. John is passionate about staying updated with industry trends and implementing best practices to deliver innovative solutions that meet client needs effectively.",
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
