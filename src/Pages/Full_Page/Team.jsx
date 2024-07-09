import "./Team.css";

const mentors = [
  {
    name: "Dr. Satyabrata Mighty",
    title: "Web Developer",
    image: "assets/sbm.enc",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
    coordinators: [
      {
        name: "Sorbopriyo Roy",
        title: "Full-stack Coordinator",
        image: "assets/sorbopriyo.png",
        github: "https://github.com/SobujRoySunday",
        linkedin: "https://www.linkedin.com/in/sorbopriyo/",
        members: [
          {
            name: "Bob Johnson",
            title: "Junior Frontend Developer",
            image: "https://randomuser.me/api/portraits/men/81.jpg",
            github: "https://github.com/bobjohnson",
            linkedin: "https://www.linkedin.com/in/bobjohnson",
          },
        ],
      },
      {
        name: "Abhik Ghosh",
        title: "Full-stack Coordinator",
        image: "assets/abhik.jpeg",
        github: "https://github.com/Abhik4004",
        linkedin: "https://www.linkedin.com/in/abhik-ghosh-27b3632a0/",
        members: [
          {
            name: "Chris Brown",
            title: "UI Designer",
            image: "https://randomuser.me/api/portraits/men/34.jpg",
            github: "https://github.com/chrisbrown",
            linkedin: "https://www.linkedin.com/in/chrisbrown",
          },
        ],
      },
      {
        name: "Sahel Bej",
        title: "AI/ML Coordinator",
        image: "assets/sahel.jpg",
        github: "https://github.com/CoderSahel",
        linkedin: "https://www.linkedin.com/in/sahel-bej/",
        members: [
          {
            name: "Sophia Brown",
            title: "Junior Backend Developer",
            image: "https://randomuser.me/api/portraits/women/89.jpg",
            github: "https://github.com/sophiabrown",
            linkedin: "https://www.linkedin.com/in/sophiabrown",
          },
        ],
      },
    ],
  },
  // Add more mentors if needed
];

const Teams = ({ onShowTeams }) => {
  const handleClick = () => {
    if (onShowTeams) {
      onShowTeams();
    }
  };

  return (
    <div className="teams-container" id="team">
      <h2 className="teams-heading">Teams</h2>
      <div className="mentors-grid">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card relative">
            <div
              className="absolute top-2 right-5 font-semibold text-xl bg-blue-600 p-2 text-white rounded-full h-12 w-12 flex justify-center items-center cursor-pointer"
              onClick={handleClick}
            >
              X
            </div>
            <img src={mentor.image} alt={mentor.name} />
            <h2>{mentor.name}</h2>
            <p>{mentor.title}</p>
            <div className="social-links">
              <a href={mentor.github} target="_blank" rel="noopener noreferrer">
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
            <div className="coordinators-grid">
              {mentor.coordinators.map((coordinator, index) => (
                <div key={index} className="coordinator-card">
                  <img src={coordinator.image} alt={coordinator.name} />
                  <h3>{coordinator.name}</h3>
                  <p>{coordinator.title}</p>
                  <div className="social-links">
                    <a
                      href={coordinator.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={coordinator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="members-grid">
                    {coordinator.members.map((member, index) => (
                      <div key={index} className="member-card">
                        <img src={member.image} alt={member.name} />
                        <h4>{member.name}</h4>
                        <p>{member.title}</p>
                        <div className="social-links">
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
