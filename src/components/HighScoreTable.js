import React, { useState } from "react";
import PlayerScore from "./PlayerScore";

function HighScoreTable(props) {
  function generateStudentScores() {
    return props.scores.map((student) => {
      return <PlayerScore key={student.n} name={student.n} score={student.s} />;
    });
  }
  return (
    <div className="score-table">
      <h3>High Scores: {props.countryName}</h3>
      {generateStudentScores()}
    </div>
  );
}

export default HighScoreTable;
