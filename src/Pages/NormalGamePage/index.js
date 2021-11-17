import React from 'react'
import "./style.css"
import Game from '../../Components/Game.js'


export default function NormalGamePage() {
    return (
        <div className="NormalGamePage">
            <section>
                <div className="normalgamepagetext">
                    <div className="title">
                        <h3>Normal Game Page</h3>
                        <div>AI Board</div>
                        <Game/>
                        <div>Your Board</div>
                      <Game/>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}