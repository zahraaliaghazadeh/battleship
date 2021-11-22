
// import { useSelector } from 'react-redux'
import Board from './Board/Board'

export default function Game(props) {
    // const moves = (
    //     <li>
    //         <button>Start</button>
    //     </li>
    // );
    // const squares = Array(100).fill(null);
    const gameState = props.game;
    return (
      <div className="boardGame">
        <Board game={gameState} isDisabled={props.isDisabled} onSquareClick={props.onSquareClick} />
      </div>
    )
  }
