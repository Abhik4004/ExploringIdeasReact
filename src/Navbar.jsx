import { useNavigate } from "react-router-dom";

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000, // Ensure navbar appears on top of other content
    display: "flex",
    justifyContent: "center", // Center the navbar content
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center", // Center the nav items
    gap: "20px", // Add space between nav items
  },
  navItem: {
    marginRight: "10px",
    color: "#fff",
    cursor: "pointer",
    position: "relative",
    transition: "color 0.3s ease, transform 0.3s ease", // Add transition for hover effects
  },
  navItemHover: {
    color: "#ff6347", // Change color on hover
    transform: "scale(1.1)", // Slightly enlarge the item on hover
  },
  navItemUnderline: {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-5px",
    left: "50%",
    backgroundColor: "#ff6347",
    transition: "width 0.3s ease, left 0.3s ease",
  },
  navItemHoverUnderline: {
    width: "100%",
    left: 0,
  },
};

// Function to handle hover effect (assuming you're using a library like React)
const handleMouseEnter = (e) => {
  e.target.style.color = styles.navItemHover.color;
  e.target.style.transform = styles.navItemHover.transform;
  const underline = e.target.querySelector(".underline");
  if (underline) {
    underline.style.width = styles.navItemHoverUnderline.width;
    underline.style.left = styles.navItemHoverUnderline.left;
  }
};

const handleMouseLeave = (e) => {
  e.target.style.color = styles.navItem.color;
  e.target.style.transform = "none";
  const underline = e.target.querySelector(".underline");
  if (underline) {
    underline.style.width = "0";
    underline.style.left = "50%";
  }
};
const Navbar = () => (
  <div style={styles.navbar}>
    <ul style={styles.navList}>
      <li
        style={styles.navItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Home
        <span className="underline" style={styles.navItemUnderline}></span>
      </li>
      <li
        style={styles.navItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        About
        <span className="underline" style={styles.navItemUnderline}></span>
      </li>
      <li
        style={styles.navItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Publications
        <span className="underline" style={styles.navItemUnderline}></span>
      </li>
      <li
        style={styles.navItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Projects
        <span className="underline" style={styles.navItemUnderline}></span>
      </li>
      <li
        style={styles.navItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Pupil
        <span className="underline" style={styles.navItemUnderline}></span>
      </li>
      <li
        style={styles.navItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Contact
        <span className="underline" style={styles.navItemUnderline}></span>
      </li>
    </ul>
  </div>
);

export default Navbar;
