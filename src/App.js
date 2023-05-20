import React, { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setScore((prevScore) => {
      let newScore = prevScore + 1;
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      return newScore;
    });
  };

  const gameOver = () => {
    alert("Game Over");
    setScore(0);
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <Main incrementScore={incrementScore} gameOver={gameOver} />
      <Footer />
    </div>
  );
}

export default App;
