import React from "react";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
// import { Link, useHistory } from "react-router-dom";



export default function Nav() {

  
    const [showHamburgerContent, setShowHamburgerContent] = useState(false);
    function toggleHamburger(){
        if(showHamburgerContent==true){
            setShowHamburgerContent(false);
        }else{
            setShowHamburgerContent(true);
        }
    }

    return (
        // TODO: Fix the collapsable hamburger menu

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand logo" href="#">Battleship</a>
                <button onClick={() => toggleHamburger()} className="navbar-toggler hamburger collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link sr-only" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link sr-only" href="/rules">Rules</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link sr-only" href="/free-game">Free Game</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link sr-only" href="/normal-game">Normal Game</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}