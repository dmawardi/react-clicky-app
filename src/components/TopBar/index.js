import React from 'react';
import StatusPrompt from "../StatusPrompt";
import ScorePrompt from '../ScorePrompt';
import "./style.css";


function TopBar(props) {
    return (
        <nav className="navbar fixed-top">
        <li className="brand">Clicky Game</li>
        <StatusPrompt message={props.message}/>
        <ScorePrompt currentScore={props.scoreCounter} highScore={props.highScore}/>

        </nav>
    );
  }


// class TopBar extends Component {
//   render() {
//     return (
//         <nav className="navbar fixed-top">
//             <li className="brand">Clicky Game</li>
            
//             {/* TODO 2 lI's below: Current status and score */}
//             <StatusPrompt />
//             <ScorePrompt />

//         </nav>
//     )
// }
// }

export default TopBar; // Don’t forget to use export default!