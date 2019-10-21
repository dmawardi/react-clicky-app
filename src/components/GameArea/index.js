import React, { Component } from 'react';
import "./style.css";
// Image imports
import imgArray from "./img";


// let imageArray = [Auron, Barret, Cloud, Hope, Lightning, Noctis, Sephiroth, Seymour, Squall, Tidus, Viera, Yuna];

class GameArea extends Component {

    state = {
        alreadyClicked: [],
        imageArray: imgArray
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
        console.log("clicking button");
        console.log("event", event.target.getAttribute("data-value"));
        
        // Getting the value and name of the input which triggered the change
        // const value = event.target.value;
        // const name = event.target.name;
    
        // Updating the input's state
        this.setState({
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