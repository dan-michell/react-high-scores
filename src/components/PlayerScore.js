import React, { useState } from "react";

function PlayerScore(props) {
  return (
    <div className="student-score">
      <p>{props.name}</p>
      <p>{props.score}</p>
    </div>
  );
}

export default PlayerScore;
