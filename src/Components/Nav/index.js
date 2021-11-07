import React from "react";
// import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
// import { Link, useHistory } from "react-router-dom";

export default function Nav() {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/rules">Rules </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/free-game">Free Game </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/normal-game">Normal Game </a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}