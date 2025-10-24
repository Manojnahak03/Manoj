import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // for hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />

      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li><AnchorLink href="#home" onClick={closeMenu}>Home</AnchorLink></li>
        <li><AnchorLink href="#about" onClick={closeMenu}>About Me</AnchorLink></li>
        <li><AnchorLink href="#service" onClick={closeMenu}>Services</AnchorLink></li>
        <li><AnchorLink href="#work" onClick={closeMenu}>Portfolio</AnchorLink></li>
        <li><AnchorLink href="#contact" onClick={closeMenu}>Contact</AnchorLink></li>
      </div>

      <div className="nav-connect">
        <AnchorLink href="#contact">Connect With Me</AnchorLink>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
