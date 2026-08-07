import React from "react";
import "./Footer.css";

import logo from "../../assets/logo.jpg";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Decorative Glow */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">

        {/* ================= TOP ================= */}
        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-top-left">

            <div className="footer-brand">
              <span>
                Manoj Nahak
              </span>
            </div>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              Frontend Developer focused on creating clean,
              responsive and user-friendly web applications.
            </p>

            {/* Social Media */}
            <div className="footer-social">

              <a
                href="https://www.instagram.com/45manoj_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/1EmN9xcZTk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/manoj-nahak-50369538b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/manojnahak03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

            </div>

          </div>


          {/* RIGHT */}
          <div className="footer-top-right">

            <span className="footer-label">
              STAY CONNECTED
            </span>

            <h3>
              Get updates about my
              <span> latest work.</span>
            </h3>

            <div className="footer-email-input">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button type="button">
                Subscribe
                <span>↗</span>
              </button>

            </div>

            <p className="footer-note">
              No spam. Just occasional updates and new projects.
            </p>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="footer-divider"></div>


        {/* ================= BOTTOM ================= */}
        <div className="footer-bottom">

          <p>
            © 2026 <span>Manoj Nahak</span>. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#work">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          <a
            href="#home"
            className="back-to-top"
            aria-label="Back to top"
          >
            ↑
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

