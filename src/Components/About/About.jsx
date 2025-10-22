import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src="/assets/theme_pattern.svg" alt="Theme Pattern" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src="/assets/about_profile.svg" alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over 2 years of experience working in different companies.
            </p>
            <p>
              My passion for frontend development goes beyond coding — I enjoy building clean, user-friendly, and responsive designs.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '75%' }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: '80%' }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>Express.js</p>
              <hr style={{ width: '65%' }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
