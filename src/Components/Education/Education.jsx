import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      number: "01",
      title: "Class 10th",
      institution: "St Mary Primary & Secondary School",
      result: "92.40%",
      resultLabel: "Percentage",
      extra: "3rd in School",
      extraLabel: "Rank",
    },
    {
      number: "02",
      title: "Class 12th",
      institution: "RR Educational Trust",
      result: "88.67%",
      resultLabel: "Percentage",
      extra: "1st Rank",
      extraLabel: "Jr. College",
    },
    {
      number: "03",
      title: "BSC-IT",
      institution: "KET's V.G Vaze College (Autonomous)",
      result: "8.83",
      resultLabel: "CGPA",
      extra: "2023 - 2026",
      extraLabel: "Duration",
    },
  ];

  return (
    <section className="education" id="education">

      {/* Heading */}
      <div className="education-heading">
        <p>MY ACADEMIC JOURNEY</p>

        <h1>
          My <span>Education</span>
        </h1>

        <div className="education-heading-line"></div>
      </div>

      {/* Cards */}
      <div className="education-cards">

        {educationData.map((education) => (
          <div className="education-card" key={education.number}>

            {/* Card Number */}
            <div className="education-number">
              {education.number}
            </div>

            {/* Icon */}
            <div className="education-icon">
              🎓
            </div>

            {/* Title */}
            <h2>{education.title}</h2>

            {/* Institution */}
            <p className="education-institution">
              {education.institution}
            </p>

            {/* Divider */}
            <div className="education-divider"></div>

            {/* Result */}
            <div className="education-details">

              <div className="education-detail">
                <span>{education.resultLabel}</span>
                <strong>{education.result}</strong>
              </div>

              <div className="education-detail">
                <span>{education.extraLabel}</span>
                <strong>{education.extra}</strong>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Education;

