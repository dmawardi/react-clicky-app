import React from 'react';

function ScorePrompt(props) {
  return (
          <li>Score: <span>{props.currentScore}</span> | Top Score: <span>{props.highScore}</span></li>
          
  )

}

export default ScorePrompt; // Don’t forget to use export default!