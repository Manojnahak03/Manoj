import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />

      <ul className="nav-menu">
        <li><AnchorLink href="#home">Home</AnchorLink></li>
        <li><AnchorLink href="#about">About Me</AnchorLink></li>
        <li><AnchorLink href="#service">Services</AnchorLink></li>
        <li><AnchorLink href="#work">Portfolio</AnchorLink></li>
        <li><AnchorLink href="#contact">Contact</AnchorLink></li>
      </ul>

      <div className="nav-connect"><AnchorLink href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
