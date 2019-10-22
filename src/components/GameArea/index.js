// Import react and CSS
import React from 'react';
import "./style.css";

// GameArea element
function GameArea(props) {
    return (
        <div className="container">
            <div className="row">
                {/* Iterate through imagearray */}
            {   
                props.imageArray.map(data => {
                    
                // Create a col element containing a character image
                return (
                <div key={data.id} className="col-6 col-md-3">
                    <img key={data.id} data-value={data.id} src={data.image} className="img-fluid img-tile border p-2 mb-4 rounded" alt={data.name} onClick={props.handleClick}></img>
                </div>


                )

            })}
        </div>
    </div>

    );
  }


// class GameArea extends Component {

//   render() {
//     return (

//         <div className="container">
//             <div className="row">
//                 {   
//                     this.state.imageArray.map(data => {
//                     // console.log(imageArray);
//                     // console.log(data);
//                 return (
//                 <div key={data.id} className="col-6 col-md-3">
//                     <img key={data.id} data-value={data.id} src={data.image} className="img-fluid img-tile border p-2 mb-3 shadow" alt={data.name} onClick={this.handleClick}></img>
//                 </div>


//                 )

//                 })}
//             </div>
//         </div>

//     )
// }
// }
export default GameArea; // Don’t forget to use export default!