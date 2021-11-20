import React from 'react'
import "./style.css"
import Game from '../../Components/Game.js'
import StartButton from '../../Components/StartButton/StartButton.js'


export default function NormalGamePage() {
    return (
        <div className="NormalGamePage">
            <section>
                <div className="normalgamepagetext">
                    <div className="title">
                        <h3>Normal Game Page</h3>
                    </div>
                    <div className="reset-btn">
                        <StartButton/>
                    </div>
                    <div classname="row">
                        <div className="column-left">
                                <div className="board-title">Your Board</div>
                                    <Game/>
                        </div>
                        <div className="column-right">
                            <div className="board-title"> AI Board</div>
                                <Game/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}