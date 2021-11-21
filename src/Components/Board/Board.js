import React from "react";
import Square from "../Square/Square";
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Board.css";
// import ResetButton from "../ResetButton/ResetGameBoard"

export default function Board(props) {
    const gameState = useSelector((state) => state.game)
    const boardState = gameState.board
    const shipsLeft = gameState.totalShips
    const lastShipHit = gameState.lastUserShipHit;
    const boardComponent = [];

    console.log(lastShipHit);

    let num = 0;

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square key={num} color={boardState[i][j]} x={i} y={j} />))
            num = num + 1;
        }
    }
    //console.log(boardComponent)
    return (

        <div className="container">
            <div className="row">

                <div className="col-md-auto">
                    <div>
                        <div id="board" className="center">
                            {boardComponent}
                        </div>
                        {(lastShipHit.length !== 0) ? <div>{lastShipHit} was the last ship sunk!</div> : <div></div>}
                        {shipsLeft <= 0 && <h2 className="game-over">Game Over</h2>}
                        {/* <ResetButton text="Reset" className="main-reset-btn"/> */}
                    </div>
                </div>
            </div>
        </div>

    )
}


