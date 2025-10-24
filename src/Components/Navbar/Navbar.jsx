import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={logo} alt="Logo" />

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><AnchorLink href="#home" onClick={() => setMenuOpen(false)}>Home</AnchorLink></li>
        <li><AnchorLink href="#about" onClick={() => setMenuOpen(false)}>About Me</AnchorLink></li>
        <li><AnchorLink href="#education">Education</AnchorLink></li>
        <li><AnchorLink href="#service" onClick={() => setMenuOpen(false)}>Services</AnchorLink></li>
        <li><AnchorLink href="#work" onClick={() => setMenuOpen(false)}>Portfolio</AnchorLink></li>
        <li><AnchorLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</AnchorLink></li>
      </ul>

      {/* Connect Button (No Anchor Tag) */}
      <div className="nav-connect">
        <AnchorLink href="#contact" onClick={() => setMenuOpen(false)}>Connect With Me !</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
