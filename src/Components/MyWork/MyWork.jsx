import React from "react";
import "./MyWork.css";
import pgImage from "../../assets/pg.png"; 
import typingImage from "../../assets/typing.png";
import ysImage from "../../assets/yks.png"; 
import ecommerceImage from "../../assets/ecommerce.png"
const MyWork = () => {
  const projects = [
    {
      title: "Class Management System",
      category: "Full Stack",
      description:
        "A web application designed to manage classes, students and academic activities efficiently.",
      image: pgImage,
      link: "https://prince-academy.onrender.com/",
    },
    {
      title: "Career Connect",
      category: "Job Portal",
      description:
        "A career platform connecting job seekers with opportunities through a clean and responsive interface.",
      image: "/projects/career-connect.png",
      link: "#",
    },
    {
      title: "Employee Management",
      category: "Management System",
      description:
        "An employee management application for organizing employee information and workplace operations.",
      image: "/projects/employee-management.png",
      link: "#",
    },
    {
      title: "E-Commerce",
      category: "Web Application",
      description:
        "A modern e-commerce platform with product browsing, shopping cart and user-friendly interface.",
      image: ecommerceImage,
      link: "https://ecommerce-mern-inky.vercel.app/signup",
    },
    {
      title: "Typing",
      category: "Web Application",
      description:
        "An interactive typing application designed to improve typing speed, accuracy and performance.",
      image: typingImage,
      link: "https://typing-speed-app-rho.vercel.app/",
    },
    {
      title: "Yaddonkasafar",
      category: "Web Application",
      description:
        "An interactive tour platform with tour packages, reviews, contact information and a simple engaging interface.",
      image: ysImage,
      link: "https://yaddonkasafar.vercel.app/",
    },
  ];

  return (
    <section className="work" id="work">

      {/* Heading */}
      <div className="work-heading">

        <p>MY RECENT PROJECTS</p>

        <h1>
          My Latest <span>Work</span>
        </h1>

        <div className="work-heading-line"></div>

        <h3>
          A collection of projects I have built while learning and
          developing my skills.
        </h3>

      </div>

      {/* Project Grid */}
      <div className="work-grid">

        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
            key={index}
          >

            {/* Image */}
            <div className="work-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="work-overlay">

                <span>
                  View Project ↗
                </span>

              </div>

            </div>

            {/* Content */}
            <div className="work-content">

              <div className="work-top">

                <span className="work-category">
                  {project.category}
                </span>

                <span className="work-number">
                  0{index + 1}
                </span>

              </div>

              <h2>
                {project.title}
              </h2>

              <p>
                {project.description}
              </p>

              <div className="work-bottom">
                <span>Explore Project</span>
                <span className="work-arrow">↗</span>
              </div>

            </div>

          </a>
        ))}

      </div>

    </section>
  );
};

export default MyWork;
