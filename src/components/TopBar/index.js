import React, { Component } from 'react';
import StatusPrompt from "../StatusPrompt";
import ScorePrompt from '../ScorePrompt';
import "./style.css";

class TopBar extends Component {
  render() {
    return (
        <nav className="navbar fixed-top">
            <li className="brand">Clicky Game</li>
            
            {/* TODO 2 lI's below: Current status and score */}
            <StatusPrompt />
            <ScorePrompt />

        </nav>
    )
}
}
export default TopBar; // Don’t forget to use export default!