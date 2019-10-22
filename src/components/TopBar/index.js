// Import React, CSS and children elements
import React from 'react';
import StatusPrompt from "../StatusPrompt";
import ScorePrompt from '../ScorePrompt';
import "./style.css";

// Top Bar 
function TopBar(props) {
    return (
      // Nav bar with list items contained within
        <nav className="navbar fixed-top">
          <li className="brand">Clicky Game</li>
          <StatusPrompt message={props.message}/>
          <ScorePrompt currentScore={props.scoreCounter} highScore={props.highScore}/>

        </nav>
    );
  }

// Export
export default TopBar; 