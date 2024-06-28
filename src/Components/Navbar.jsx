import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Default active item

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Close the menu on item click (optional)
  };

  return (
    <div className="navbar">
      <span className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </span>
      <ul className={`navList ${menuOpen ? "menuOpen" : ""}`}>
        {["Home", "About", "Publications", "Projects", "Pupil", "Contact"].map(
          (item) => (
            <li
              key={item}
              className={`navItem ${activeItem === item ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              <a href={`#${item}`} className="navLink">
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
