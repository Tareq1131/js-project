import { useState } from 'react';
import './App.css';

const AppGane = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userInput, setUserInput] = useState('');
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(10);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const submitGuess = (event) => {
    event.preventDefault();
    const guess = parseInt(userInput);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
      return;
    }

    setPrevGuesses([...prevGuesses, guess]);
    setRemainingGuesses(remainingGuesses - 1);

    if (guess === randomNumber) {
      setMessage('Congratulations! You guessed the correct number!');
      setGameOver(true);
    } else if (remainingGuesses === 1) {
      setMessage(`Game over. The correct number was ${randomNumber}.`);
      setGameOver(true);
    } else {
      setMessage(guess < randomNumber ? 'Number is too low!' : 'Number is too high!');
    }

    setUserInput('');
  };

  const newGame = () => {
    setRandomNumber(generateRandomNumber());
    setUserInput('');
    setPrevGuesses([]);
    setRemainingGuesses(10);
    setMessage('');
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>Number Guessing Game</h1>
      <p>Try to guess a random number between 1 and 100. You have {remainingGuesses} attempts remaining.</p>
      <form onSubmit={submitGuess}>
        <input
          type="number"
          value={userInput}
          onChange={handleInputChange}
          disabled={gameOver}
          required
        />
        <button type="submit" disabled={gameOver}>Submit Guess</button>
      </form>
      <div className="message">{message}</div>
      <div className="guesses">
        <p>Previous Guesses: {prevGuesses.join(', ')}</p>
      </div>
      {gameOver && (
        <button className="new-game-button" onClick={newGame}>Start New Game</button>
      )}
    </div>
  );
};

export default AppGane;
