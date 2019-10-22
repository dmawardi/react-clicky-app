// Import React
import React from 'react';

// Score Prompt element
function ScorePrompt(props) {
  return (
    // Return list item with Score and Top Score details
          <li>Score: <span>{props.currentScore}</span> | Top Score: <span>{props.highScore}</span></li>
          
  )

}

// Export
export default ScorePrompt; 