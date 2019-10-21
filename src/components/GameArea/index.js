import React, { Component } from 'react';
import "./style.css";
// Image imports
import imgArray from "./img";

class GameArea extends Component {

    state = {
        alreadyClicked: [],
        imageArray: imgArray,
        scoreCounter: 0,
        highScore: 0
      };

      shuffleArray = () => {
        var shuffledArray = this.state.imageArray;

        for (let i = (shuffledArray.length - 1); i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temp;
          }
          return shuffledArray;
      }
    
      handleClick = event => {
        //   Init variables for use
        let idOfClickedCard = event.target.getAttribute("data-value");
        let alreadyClickedArray = this.state.alreadyClicked;
        let currentHighScore = this.state.highScore;

        let currentScore = this.state.scoreCounter;
        console.log("current sync score: ", currentScore);
        // console.log("event", idOfClickedCard);
        
        // If the id of the clicked card is not already contained in the clicked array
        if (!alreadyClickedArray.includes(idOfClickedCard)) {
            console.log("You have selected a new card! Your score increases by 1!");
            // Add 1 to current score
            currentScore += 1;
            
            // Increase counter by 1
            if (currentHighScore < currentScore) {
                // Assign new score to high score
                currentHighScore = currentScore;
                
                console.log("High Score: ", currentHighScore, "\nCurrent ScoreCounter", currentScore);
                this.setState({
                    // Update High score to new high score
                    highScore: currentHighScore,
                    // Add to the current score by 1 and assign to state score counter
                    scoreCounter: currentScore
                });
            } else {
                // Add 1 to current score
                console.log("High Score: ", currentHighScore, "\nCurrent ScoreCounter", currentScore);
                // Set state counter
                this.setState({
                    // Add to the current score by 1 and assign to state score counter
                    scoreCounter: currentScore
                });
                
            }
            // Add clicked id to array
            alreadyClickedArray.push(idOfClickedCard);
            console.log(alreadyClickedArray);

        } else {
            console.log("Card has already been selected before!");
            // Set state counter
            this.setState(() => ({
                alreadyClicked: [],
                // Add to the current score by 1 and assign to state score counter
                scoreCounter: 0
            }));
        }
    
        // Updating the state's image array with the newly shuffled one
        this.setState({
            // alreadyClicked: this.state.alreadyClicked.push(idOfClickedCard),
            imageArray: this.shuffleArray()
        });
      };

  render() {
    return (

        <div className="container">
            <div className="row">
                {   
                    this.state.imageArray.map(data => {
                    // console.log(imageArray);
                    // console.log(data);
                return (
                <div key={data.id} className="col-6 col-md-3">
                    <img key={data.id} data-value={data.id} src={data.image} className="img-fluid img-tile border p-2 mb-3 shadow" alt={data.name} onClick={this.handleClick}></img>
                </div>


                )

                })}
            </div>
        </div>

    )
}
}
export default GameArea; // Don’t forget to use export default!