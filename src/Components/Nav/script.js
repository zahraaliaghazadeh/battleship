import React from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
// import { Link, useHistory } from "react-router-dom";

export default function Nav() {
  const [showHamburgerContent, setShowHamburgerContent] = useState(false);

  const show = (showHamburgerContent) ? "show" : "";

  function toggleHamburger() {
    setShowHamburgerContent(!showHamburgerContent);
  }

  return (
 

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand logo" href="#">Battleship</a> */}
        <div className="logo"><img src="/favicon.ico" alt="logo of a battleship"></img></div>
        <div className="navbar-brand logo">Battleship</div>
        <button
          onClick={() => toggleHamburger()}
          className="navbar-toggler hamburger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse " + show} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link sr-only" href="/">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link sr-only" href="/rules">
                Rules
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link sr-only" href="/free-game">
                Free Game
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link sr-only" href="/normal-game">
                Normal Game
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
