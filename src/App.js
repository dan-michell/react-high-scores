import React, { useState, useEffect } from "react";
import countryScores from "./data/scores";
import "./App.css";
import Header from "./components/Header";
import HighScoreTable from "./components/HighScoreTable";

function App() {
  const sortedCountries = countryScores.sort((a, b) => (a.name > b.name ? 1 : -1));
  const [countries, setCountriesOrder] = useState(sortedCountries);

  function changeSortOrder() {
    setCountriesOrder((prevCountries) => [...prevCountries].reverse());
  }

  function generateScoreTables() {
    return countries.map((country) => {
      return <HighScoreTable key={country.name} countryName={country.name} scores={country.scores} />;
    });
  }

  return (
    <div className="App">
      <Header />
      <button className="sort-button" onClick={changeSortOrder}>
        Sort!
      </button>
      <div className="score-table-wrapper">{generateScoreTables()}</div>
    </div>
  );
}

export default App;
