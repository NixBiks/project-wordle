import React from 'react';

function GuessInput({ onGuess }) {
  const [guess, setGuess] = React.useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onGuess(guess);
    setGuess('');
  };
  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess} onChange={event => setGuess(event.target.value.toUpperCase())} pattern="[a-zA-Z]{5}"
      title="5 letter word" required />
  </form>;
}

export default GuessInput;
