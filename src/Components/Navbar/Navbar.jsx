import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>

      {/* Logo */}
      <AnchorLink href="#home" onClick={closeMenu} className="navbar-logo">
        <img src={logo} alt="Manoj Nahak Logo" />
      </AnchorLink>

      {/* Desktop / Mobile Navigation */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <li>
          <AnchorLink href="#home" onClick={closeMenu}>
            Home
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#about" onClick={closeMenu}>
            About Me
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#education" onClick={closeMenu}>
            Education
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#service" onClick={closeMenu}>
            Services
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#work" onClick={closeMenu}>
            Portfolio
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#contact" onClick={closeMenu}>
            Contact
          </AnchorLink>
        </li>

      </ul>

      {/* Connect Button */}
      <AnchorLink
        href="#contact"
        onClick={closeMenu}
        className="nav-connect"
      >
        <span>Let's Talk</span>
        <span className="nav-arrow">↗</span>
      </AnchorLink>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
};

export default Navbar;

