import React from "react";
import "./About.css";
import Manoj from "../../assets/Manoj_Image.jpeg";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: "90%" },
    { name: "JavaScript", level: "75%" },
    { name: "React.js", level: "80%" },
    { name: "Node.js", level: "70%" },
    { name: "Express.js", level: "65%" },
    { name: "MongoDB", level: "70%" },
  ];

  return (
    <section className="about" id="about">

      {/* Section Heading */}
      <div className="about-heading">
        <p>GET TO KNOW ME</p>
        <h1>
          About <span>Me</span>
        </h1>
        <div className="about-heading-line"></div>
      </div>

      {/* Main About Content */}
      <div className="about-section">

        {/* LEFT - IMAGE */}
        <div className="about-left">
          <div className="about-image-card">

            <div className="about-image-glow"></div>

            <img
              src={Manoj}
              alt="Manoj Nahak"
            />

            <div className="about-image-badge">
              <span>✦</span>
              Frontend Developer
            </div>

          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="about-right">

          <div className="about-para">

            <p>
              I am a passionate <strong>Frontend Developer</strong> from
              Mumbai, India, focused on creating modern, responsive and
              user-friendly web applications.
            </p>

            <p>
              I enjoy turning ideas into clean digital experiences using
              technologies like React.js, JavaScript, HTML, CSS and
              modern web development tools.
            </p>

          </div>

          {/* Skills */}
          <div className="about-skills">

            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>

                <div className="skill-info">
                  <p>{skill.name}</p>
                  <span>{skill.level}</span>
                </div>

                <div className="skill-bar">
                  <span
                    style={{ width: skill.level }}
                  ></span>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">

        <div className="about-achievement">
          <h2>2+</h2>
          <p>YEARS EXPERIENCE</p>
        </div>

        <div className="achievement-divider"></div>

        <div className="about-achievement">
          <h2>15+</h2>
          <p>PROJECTS COMPLETED</p>
        </div>

        <div className="achievement-divider"></div>

        <div className="about-achievement">
          <h2>10+</h2>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>

    </section>
  );
};

export default About;

