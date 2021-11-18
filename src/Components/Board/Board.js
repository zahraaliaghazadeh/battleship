import React from "react";
import Square from "../Square/Square";
import { useSelector } from 'react-redux';
import "./Board.css";
import ResetButton from "../ResetButton/ResetGameBoard"

export default function Board(props) {
    const boardState = useSelector((state) => state.game)
    const boardComponent = [];

    let num = 0;

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square key={num} color={boardState[i][j]} x={i} y={j} />))
            num = num + 1;
        }
    }
    console.log(boardComponent)
    return (
        <div>
            <div id="board" className="center">
                {boardComponent}
            </div>
            <ResetButton text="Reset" className="main-reset-btn"/>
        </div>

    )
}
