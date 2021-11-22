import React from 'react'
import Game from '../../Components/Game.js'
import StartButton from '../../Components/StartButton/StartButton.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';


export default function NormalGamePage() {
    const dispatch = useDispatch();
    const gameStateUser = useSelector((state) => state.normalGameReducer.user);
    const gameStateAi = useSelector((state) => state.normalGameReducer.ai);
    const hasUserLost = gameStateUser.totalShips <= 0;
    const hasAiLost = gameStateAi.totalShips <= 0;
    const isGameOver = hasUserLost || hasAiLost;
    if (isGameOver) {
        window.localStorage.clear();
    }
    const onSquareClick = (x, y) => {
        if (isGameOver) {
            return;
        }
        if (gameStateAi.board[x][y] !== 'lightBlueSquare') {
            return;
        }
        dispatch({
            type: 'boardClick',
            x: x,
            y: y,
        })
        const randNum = () => (Math.floor(Math.random() * 9));
        let randX = randNum();
        let randY = randNum();
        while (gameStateUser.board[randX][randY] !== 'lightBlueSquare') {
            randX = randNum();
            randY = randNum();
        }
        dispatch({
            type: 'aiClick',
            x: randX,
            y: randY,
        })
    }

    return (
        <div className="NormalGamePage">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title">
                            <h3>Normal Game Page</h3>
                        </div>
                        <div className="reset-btn">
                            <StartButton />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-auto">
                        <div className="board-title">Your Board (AI attacks this board)</div>
                        <div><Game game={gameStateUser} isDisabled={true} /></div>
                    </div>
                    <div className="col-md-auto">
                        <div className="board-title"> AI Board (You attack this board)</div>
                        <div><Game game={gameStateAi} onSquareClick={onSquareClick} /></div>
                    </div>
                </div>
                {
                    hasAiLost && <h2 className="win-title">You Won!</h2>
                }
                {
                    hasUserLost && <h2 className="lost-title">You Lost!</h2>
                }
            </div>
        </div>
    )
}