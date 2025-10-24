import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg';
import user_icon from '../../assets/user_icon.svg';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>
            I am a frontend developer from Mumbai, India with 2 years of experience 
            in building clean and creative web applications.
          </p>

          {/* Social Media Icons */}
          <div className="footer-social">
            <a 
              href="https://www.instagram.com/45manoj_?igsh=ZTd1eG90djF2N2ps" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.facebook.com/share/1EmN9xcZTk/" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.linkedin.com/in/manoj-nahak-50369538b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/manojnahak03" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user" />
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Manoj Nahak. All Rights Reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
