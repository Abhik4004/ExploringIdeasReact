import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink, NavLink } from "react-router-dom"; // Use RouterLink for regular links and NavLink for active links
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Default active item

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Close the menu on item click
  };

  return (
<<<<<<< HEAD
    <div className="bg-gray-900 p-4 flex items-center justify-between top-0 left-0 fixed z-10 w-screen">
=======
    <nav className="navbar">
>>>>>>> 9a1a1d408363f26a66427d86752c7f76d07452e5
      <span className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </span>
      <ul className={`navList ${menuOpen ? "menuOpen" : ""}`}>
        {["Home", "About", "Projects", "Team", "Courses", "Contact"].map(
          (item) => (
            <li
              key={item}
              className={`navItem ${activeItem === item ? "active" : ""}`}
              onClick={() => handleSetActive(item)}
            >
              {item === "Team" ? (
                <RouterLink
                  to="/team" // Assuming "/team" is the route to your Team component
                  className="navLink"
                  onClick={() => handleSetActive(item)}
                >
                  {item}
                </RouterLink>
              ) : (
                <NavLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="navLink"
                  activeClassName="active"
                  spy={true}
                  onClick={() => handleSetActive(item)}
                >
                  {item}
                </NavLink>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
