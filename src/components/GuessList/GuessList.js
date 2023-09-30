import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guess }) {
  return <p className="guess">
    {guess.map((character, index) => <span className={`cell ${character.status}`} key={index}>{character.letter}</span>)}
  </p>;
}

function GuessList({ guesses }) {
  return <div className="guess-results">
    {guesses.map((guess, index) => <Guess key={index} guess={guess} />)}
    {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map(index => <p className="guess" key={index}>
      {range(5).map(index => <span className='cell' key={index} ></span>)}
    </p>)}
  </div>
}

export default GuessList;
