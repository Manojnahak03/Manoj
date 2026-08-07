import React from "react";
import "./Service.css";

const Service = () => {
  const services = [
    {
      number: "01",
      icon: "⌘",
      title: "Frontend Development",
      description:
        "Modern, responsive and interactive websites built with React.js, JavaScript, HTML and CSS.",
      tags: ["React.js", "JavaScript", "HTML", "CSS"],
    },
    {
      number: "02",
      icon: "</>",
      title: "Full Stack Development",
      description:
        "Complete web applications with powerful frontend interfaces and reliable backend systems.",
      tags: ["Node.js", "Express", "MongoDB", "REST API"],
    },
    {
      number: "03",
      icon: "◈",
      title: "Responsive Web Design",
      description:
        "Clean and responsive layouts that look great across mobile, tablet and desktop devices.",
      tags: ["Responsive", "UI Design", "Mobile First"],
    },
    {
      number: "04",
      icon: "✦",
      title: "UI Development",
      description:
        "Beautiful user interfaces with reusable components, smooth interactions and modern visual design.",
      tags: ["Components", "UX", "Animations", "Modern UI"],
    },
  ];

  return (
    <section className="services" id="service">

      {/* Heading */}
      <div className="services-heading">

        <p>WHAT I CAN DO</p>

        <h1>
          My <span>Services</span>
        </h1>

        <div className="services-heading-line"></div>

        <h3>
          Turning ideas into clean and meaningful digital experiences.
        </h3>

      </div>

      {/* Service Cards */}
      <div className="services-grid">

        {services.map((service) => (
          <div className="service-card" key={service.number}>

            {/* Number */}
            <span className="service-number">
              {service.number}
            </span>

            {/* Icon */}
            <div className="service-icon">
              {service.icon}
            </div>

            {/* Content */}
            <div className="service-content">

              <h2>{service.title}</h2>

              <p>{service.description}</p>

            </div>

            {/* Tags */}
            <div className="service-tags">

              {service.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

            {/* Arrow */}
            <div className="service-arrow">
              ↗
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Service;
