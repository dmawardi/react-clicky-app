import React, { Component } from 'react';
import "./style.css";

class HeaderSection extends Component {
  render() {
    return (

        <div className="jumbotron">
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>

    )
}
}
export default HeaderSection; // Don’t forget to use export default!