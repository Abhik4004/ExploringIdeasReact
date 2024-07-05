import "./Team.css";

const mentors = [
  {
    name: "John Doe",
    title: "Web Developer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1719649143~exp=1719649743~hmac=68c511949afbe52eae7885a6f9ec44cf4efeb119c7d8e4911b705d8acee6a377",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
    coordinators: [
      {
        name: "Alice Cooper",
        title: "Frontend Coordinator",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        github: "https://github.com/alicecooper",
        linkedin: "https://www.linkedin.com/in/alicecooper",
        members: [
          {
            name: "Bob Johnson",
            title: "Junior Frontend Developer",
            image: "https://randomuser.me/api/portraits/men/81.jpg",
            github: "https://github.com/bobjohnson",
            linkedin: "https://www.linkedin.com/in/bobjohnson",
          },
          {
            name: "Emma Watson",
            title: "UI Developer",
            image: "https://randomuser.me/api/portraits/women/15.jpg",
            github: "https://github.com/emmawatson",
            linkedin: "https://www.linkedin.com/in/emmawatson",
          },
          {
            name: "David Miller",
            title: "Frontend Engineer",
            image: "https://randomuser.me/api/portraits/men/25.jpg",
            github: "https://github.com/davidmiller",
            linkedin: "https://www.linkedin.com/in/davidmiller",
          },
          {
            name: "Grace Lee",
            title: "UX Designer",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            github: "https://github.com/gracelee",
            linkedin: "https://www.linkedin.com/in/gracelee",
          },
        ],
      },
      {
        name: "Eve White",
        title: "UI/UX Coordinator",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        github: "https://github.com/evewhite",
        linkedin: "https://www.linkedin.com/in/evewhite",
        members: [
          {
            name: "Chris Brown",
            title: "UI Designer",
            image: "https://randomuser.me/api/portraits/men/34.jpg",
            github: "https://github.com/chrisbrown",
            linkedin: "https://www.linkedin.com/in/chrisbrown",
          },
          {
            name: "Sarah Johnson",
            title: "UX Designer",
            image: "https://randomuser.me/api/portraits/women/50.jpg",
            github: "https://github.com/sarahjohnson",
            linkedin: "https://www.linkedin.com/in/sarahjohnson",
          },
          {
            name: "Alex Turner",
            title: "Junior UI Designer",
            image: "https://randomuser.me/api/portraits/men/67.jpg",
            github: "https://github.com/alexturner",
            linkedin: "https://www.linkedin.com/in/alexturner",
          },
          {
            name: "Emily Davis",
            title: "Junior UX Designer",
            image: "https://randomuser.me/api/portraits/women/78.jpg",
            github: "https://github.com/emilydavis",
            linkedin: "https://www.linkedin.com/in/emilydavis",
          },
        ],
      },
      {
        name: "Jack Smith",
        title: "Backend Coordinator",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        github: "https://github.com/jacksmith",
        linkedin: "https://www.linkedin.com/in/jacksmith",
        members: [
          {
            name: "Sophia Brown",
            title: "Junior Backend Developer",
            image: "https://randomuser.me/api/portraits/women/89.jpg",
            github: "https://github.com/sophiabrown",
            linkedin: "https://www.linkedin.com/in/sophiabrown",
          },
          {
            name: "John Turner",
            title: "Backend Engineer",
            image: "https://randomuser.me/api/portraits/men/91.jpg",
            github: "https://github.com/johnturner",
            linkedin: "https://www.linkedin.com/in/johnturner",
          },
          {
            name: "Olivia Clark",
            title: "Junior Backend Engineer",
            image: "https://randomuser.me/api/portraits/women/56.jpg",
            github: "https://github.com/oliviaclark",
            linkedin: "https://www.linkedin.com/in/oliviaclark",
          },
          {
            name: "Daniel White",
            title: "Backend Developer",
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            github: "https://github.com/danielwhite",
            linkedin: "https://www.linkedin.com/in/danielwhite",
          },
        ],
      },
    ],
  },
  // Add more mentors if needed
];

const Teams = () => {
  return (
    <div className="teams-container">
      <h2 className="teams-heading">Teams</h2>
      <div className="mentors-grid">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card">
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
