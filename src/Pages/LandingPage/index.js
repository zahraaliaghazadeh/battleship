import React from 'react'
import "./style.css"
// import backgroundphoto from '../../assets/images/battleship-landingpage2.jpeg';


export default function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="container1">
                <h3 className="welcome-message">Welcome! Ready for the game? Start by choosing one, you can also read the rules first</h3>
                <button className="landingPageButton"><a className="button-direct" href="/free-game">Free Game</a></button>
                <button className="landingPageButton"><a className="button-direct" href="/normal-game">Normal Game</a></button>
            </div>
        </div>


    )
}
