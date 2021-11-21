import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


export default function RulesPage() {
    return (
        <div className="RulesPage">
            <section>
                <div className="rulespagetext">
                    <div className="paragraph">
                        <>
                            <h1>Rules</h1>
                            <p>
                            <h3>Game Objective (Normal version)</h3> The objective of Battleship is to try and sink all of the other players ships before
                            they sink all of your ships. Try to hit the other player's ships by calling out the coordinates of one of the
                            squares on the board. Each board in the game has two grids: the lower board section for the player's ships and
                            the upper part for recpording the player's guesses. During the game, you and an AI will take turns guessing.
                            </p><p>
                            <h3>Game Objective (Free version)</h3> The objective is the same except that in this version the player is only
                            guessing the location of ships on the other player's (the AI's) board.
                            </p><p>
                            <h3>Starting a New Game</h3>The AI places the ships randomly on both boards.  The ships are placed vertically 
                            or horizontally.  Once the player starts guessing, the ships cannot be moved.
                            </p><p>
                            <h3>Playing the Game</h3>Player's take turns guessing by providing the coordinates where they suspect a ship may 
                            be hiding.  The opponent responds with "hit" or "miss" on their board as appropriate and both players' boards are updated.
                            When all of the squares that one ship occupies have been hit, the ship will be "sunk".   As soon as all of one player's 
                            ships have been sunk, the game ends.
                            </p>
                        </>
                    </div>
                </div>
            </section>
        </div>
    )
}