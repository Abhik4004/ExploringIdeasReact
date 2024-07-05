import "./Pupil.css";

const mentor = {
  name: "John Doe",
  title: "Web Developer",
  introduction:
    "John Doe is a seasoned web developer with over 10 years of experience. Specializing in front-end development, he excels in crafting user-friendly and responsive web applications using modern frameworks. His expertise lies in creating intuitive interfaces that enhance user experience, leveraging his deep understanding of JavaScript, CSS, and various front-end technologies. John is passionate about staying updated with industry trends and implementing best practices to deliver innovative solutions that meet client needs effectively.",
  image:
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1719649143~exp=1719649743~hmac=68c511949afbe52eae7885a6f9ec44cf4efeb119c7d8e4911b705d8acee6a377",
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
    <div className="pupil-container">
      <div className="team-title">Meet Your Mentor</div>
      <div className="pupil-grid">
        <div className="fade-in">
          <div className="pupil-card">
            <img src={mentor.image} alt={mentor.name} />
            <div className="pupil-details">
              <h2>{mentor.name}</h2>
              <p className="mentor-title">{mentor.title}</p>
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
