import React, { useState } from "react";
import countryScores from "./data/scores";
import "./App.css";
import Header from "./components/Header";
import HighScoreTable from "./components/HighScoreTable";

function App() {
  function generateScoreTables() {
    return countryScores.map((country) => {
      return <HighScoreTable key={country.name} countryName={country.name} scores={country.scores} />;
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="score-table-wrapper">{generateScoreTables()}</div>
    </div>
  );
}

export default App;
