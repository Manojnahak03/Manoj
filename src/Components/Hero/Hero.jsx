import React from 'react';
import './Hero.css';
import Profile_img from '../../assets/Profile_img.jpg';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Profile_img} alt="Profile" />
      <h1><span>I'm Manoj Nahak,</span> frontend developer based in India.</h1>
      <p>
        I am a frontend developer from Mumbai, India with 2 years of experience in Microsoft, Google, and Tesla.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>

        {/* Resume Button */}
        <a
          href="/ManojResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
