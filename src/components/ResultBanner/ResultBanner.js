import React from 'react';

function ResultBanner({ state, guesses }) {
  if (state === 'won') {
    return <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses} guesses</strong>.
      </p>
    </div>
  }
  if (state === 'lost') {
    return <div class="sad banner">
      <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
    </div>
  }
}

export default ResultBanner;
