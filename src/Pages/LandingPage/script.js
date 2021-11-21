import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
// import backgroundphoto from '../../assets/images/battleship-landingpage2.jpeg';


export default function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="container1">
                <h3 className="welcome-message">Welcome! Ready for the game? Start by choosing one below. We recommend that you read the rules first.</h3>
                <button className="landingPageButton btn btn-warning"><a  className="btn-link" href="/free-game">Free Game</a></button>
                <button className="landingPageButton btn btn-warning"><a  className="btn-link" href="/normal-game">Normal Game</a></button>
            </div>
        </div>


    )
}
