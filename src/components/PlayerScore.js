import React, { useState } from "react";
import "./playerScore.css";

function PlayerScore(props) {
  return (
    <div className="student-score">
      <div className="student-info">
        <p>{props.name}:</p>
      </div>
      <div className="student-info">
        <p>{props.score}</p>
      </div>
    </div>
  );
}

export default PlayerScore;
