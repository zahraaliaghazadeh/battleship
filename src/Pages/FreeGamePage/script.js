import React from 'react'
import Game from '../../Components/Game.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import StartButton from '../../Components/StartButton/StartButton.js'
import { useDispatch, useSelector } from 'react-redux';


export default function FreeGamePage() {

  const gameState = useSelector((state) => state.game);
  const shipsLeft = gameState.totalShips
  const isGameOver = shipsLeft <= 0;
  if (isGameOver) {
    window.localStorage.clear();
  }
  const dispatch = useDispatch();

  const onSquareClick = (x, y) => {
    dispatch({
      type: 'boardClick',
      x: x,
      y: y,
    })
  }
  return (

    <>
      <div className='FreeGamePage'>
        <div className="container">
          <div className="row">
            <div className="col-md-auto">
              <div className="title">
                <h3>Free Game</h3>
              </div>
              <div className="start-button">
                <StartButton />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-auto">
              <Game game={gameState} onSquareClick={onSquareClick} />
              {isGameOver && <h2 className="game-over">Game Over</h2>}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}


