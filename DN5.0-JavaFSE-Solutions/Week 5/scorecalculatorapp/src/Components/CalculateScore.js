import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToMarks = (total, goal) => {
  return (total / goal).toFixed(2);
};

export const CalculateScore = ({ Name, School, Total, goal }) => {
  const averageScore = percentToMarks(Total, goal);

  return (
    <div className="score-card">
      <h2>Student Assessment Score</h2>
      <h3>
        Name: <span className="formatName">{Name}</span>
      </h3>
      <h3>
        School: <span className="formatSchool">{School}</span>
      </h3>
      <h3>
        Total: <span className="formatTotal">{Total}</span>
      </h3>
      <h3>
        Average Score: <span className="formatScore">{averageScore}</span>
      </h3>
    </div>
  );
};

export default CalculateScore;
