import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div id="education" className="education">
      <h1 className="education-title">My Education</h1>

      <div className="education-cards">
        {/* 10th */}
        <div className="education-card">
          <h2>Class 10th</h2>
          <p><strong>School:</strong> St Mary Primary & Secondary School</p>
          <p><strong>Percentage:</strong> 92.40%</p>
          <p><strong>Rank:</strong> 3rd in School </p>
        </div>

        {/* 12th */}
        <div className="education-card">
          <h2>Class 12th</h2>
          <p><strong>College:</strong> RR Educational Trust</p>
          <p><strong>Percentage:</strong> 88.67%</p>
          <p><strong>Rank:</strong> 1st Rank in Jr.College</p>
        </div>

        {/* Degree */}
        <div className="education-card">
          <h2>BSc-IT</h2>
          <p><strong>College:</strong> V.G VAZE College(Autonomous)</p>
          <p><strong>CGPA:</strong> 8.5 +</p>
          <p><strong>Year:</strong> 2023-2026</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
