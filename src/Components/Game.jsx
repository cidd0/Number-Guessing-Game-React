import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Components/Game.css'

function Game() {
  const minNum = 1;
  const maxNum = 100;
  const [answer] = useState(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum); 
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0); 
  const [showExitPopup, setShowExitPopup] = useState(false);
  const navigate = useNavigate(); 


  const handleGuess = () => {
    const numericGuess = parseInt(guess, 10);

    if (isNaN(numericGuess)) {
      setFeedback("Please enter a valid number!");
      return;
    }

    setAttempts((prev) => prev + 1);

    if (numericGuess === answer) {
      setFeedback(`Congratulations! You guessed it in ${attempts + 1} attempts.`);
    } else if (numericGuess < answer) {
      setFeedback("Too low! Try again.");
    } else {
      setFeedback("Too high! Try again.");
    }
  };

  const handleExitClick = () => {
    setShowExitPopup(true); 
  };

  const confirmExit = () => {
    navigate("/"); 
  };

  const cancelExit = () => {
    setShowExitPopup(false); 
  };

  return (
    <div className="container">
      <h1 className="title">Number Guessing Game</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter your guess..."
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button className="submit-btn" onClick={handleGuess}>Submit</button>
      <p className="result">{feedback}</p>
      <p className="attempt">Attempts: {attempts}</p>

      <button className="exit-btn" onClick={handleExitClick}>
        Exit
      </button>

      {showExitPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Are you sure you want to exit?</h2>
            <button className="confirm-btn" onClick={confirmExit}>Yes</button>
            <button className="cancel-btn" onClick={cancelExit}>No</button>
          </div>
        </div>
      )}

      {showExitPopup && (
        <div className="overlay" onClick={cancelExit}></div> 
      )}
    </div>
  );
}

export default Game;
