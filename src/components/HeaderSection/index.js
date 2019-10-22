// Import React and css
import React, { Component } from 'react';
import "./style.css";

// Header Section
class HeaderSection extends Component {

  render() {

    // Jumbotron header with instructions
    return (

        <div className="jumbotron">
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>

    )
}
}

// Export
export default HeaderSection; 