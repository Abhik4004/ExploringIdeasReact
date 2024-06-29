import "./Pupil.css";

const pupils = [
  {
    name: "John Doe",
    title: "Web Developer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1719649143~exp=1719649743~hmac=68c511949afbe52eae7885a6f9ec44cf4efeb119c7d8e4911b705d8acee6a377",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    title: "Graphic Designer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1719649143~exp=1719649743~hmac=68c511949afbe52eae7885a6f9ec44cf4efeb119c7d8e4911b705d8acee6a377",
    github: "https://github.com/janesmith",
    linkedin: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "John Doe",
    title: "Web Developer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1719649143~exp=1719649743~hmac=68c511949afbe52eae7885a6f9ec44cf4efeb119c7d8e4911b705d8acee6a377",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    title: "Graphic Designer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1719649143~exp=1719649743~hmac=68c511949afbe52eae7885a6f9ec44cf4efeb119c7d8e4911b705d8acee6a377",
    github: "https://github.com/janesmith",
    linkedin: "https://www.linkedin.com/in/janesmith",
  },
  // Add more team members with their GitHub and LinkedIn profiles
];

const Pupil = () => {
  return (
    <div className="pupil-container">
      <div className="team-title">Our Team</div>
      <div className="pupil-grid">
        {pupils.map((pupil, index) => (
          <div key={index} className="fade-in">
            <div className="pupil-card">
              <img src={pupil.image} alt={pupil.name} />
              <h2>{pupil.name}</h2>
              <p>{pupil.title}</p>
              <div className="social-links">
                <a
                  href={pupil.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={pupil.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pupil;
