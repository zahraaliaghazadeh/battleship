import React from "react";
import Square from "../Square/Square";
// import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Board.css";


export default function Board(props) {
    // const gameState = useSelector((state) => state.game)
    const gameState = props.game
    const boardState = gameState.board

    const boardComponent = [];

    let num = 0;

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square key={num} color={boardState[i][j]} x={i} y={j} isDisabled={props.isDisabled} onSquareClick={props.onSquareClick} />))
            num = num + 1;
        }
    }
    // console.log(boardComponent)
    return (

        <div className="container">
            <div className="row">

                <div className="col-md-auto">
                    <div>
                        <div id="board" className="center">
                            {boardComponent}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


