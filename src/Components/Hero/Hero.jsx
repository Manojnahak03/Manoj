import React from "react";
import "./Hero.css";
import Manojkumar from "../../assets/Manojkumar.jpeg";
const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Background Grid */}
      <div className="hero-grid"></div>

      {/* Background Glow */}
      <div className="hero-glow"></div>

      {/* Profile Image */}
      <div className="hero-image-wrapper">
        <img
          src={Manojkumar}
          alt="Manoj Nahak"
          className="hero-profile"
        />
      </div>

      {/* Intro */}
      <p className="hero-intro">
        Hello, I'm <span>Manoj Nahak</span> 👋
      </p>

      {/* Heading */}
      <h1 className="hero-title">
        FullStack Developer
        <span>Building Modern Web Experiences</span>
      </h1>

      {/* Description */}
      <p className="hero-description">
        I am a frontend developer from Mumbai, India, passionate about
        creating clean, responsive and user-friendly web applications
        using modern technologies.
      </p>

      {/* Buttons */}
      <div className="hero-action">

        <a
          href="#contact"
          className="hero-connect"
        >
          Let's Connect
          <span>→</span>
        </a>

        <a
          href="https://manojnahak.vercel.app/ManojResume.pdf"
          download="ManojResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
          <span>↗</span>
        </a>

      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span></span>
        <p>Scroll to explore</p>
      </div>

    </section>
  );
};

export default Hero;

