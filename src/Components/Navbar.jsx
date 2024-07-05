import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Default active item

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSetActive = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Close the menu on item click (optional)
  };

  return (
    <div className="bg-gray-900 p-4 flex items-center justify-between top-0 left-0 fixed z-10 w-screen">
      <span className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </span>
      <ul className={`navList ${menuOpen ? "menuOpen" : ""}`}>
        {["Home", "About", "Projects", "Team", "Contact"].map((item) => (
          <li
            key={item}
            className={`navItem ${activeItem === item ? "active" : ""}`}
            onClick={() => handleSetActive(item)}
          >
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="navLink"
              activeClass="active"
              spy={true}
              onSetActive={() => handleSetActive(item)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
