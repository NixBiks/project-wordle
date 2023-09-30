import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import ResultBanner from '../ResultBanner/ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [state, setState] = React.useState('');
  const onGuess = guess => {
    if (state === 'won' || state === 'lost' || guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    const newResult = checkGuess(guess, answer)
    if (newResult.every(letter => letter.status === "correct")) {
      setState('won');
    } else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setState('lost');
    }
    setGuesses(prev => [...prev, newResult]);
  };
  return <>
    <GuessList guesses={guesses} />
    {!state ? <GuessInput onGuess={onGuess} /> : null}
    <ResultBanner state={state} guesses={guesses.length} />
  </>;
}

export default Game;
