
// import React from 'react'
// import Board from '../../Components/Board'
// import Square from '../../Square.jsx'
// import "./style.css"
// import {useSelector} from 'react-redux'
import Board from '../../Components/Board.js'
import Game from '../../Components/Game.js'

function FreeGamePage() {
    return <Game />;
  }
  
export default FreeGamePage;
//     const boardState = useSelector((state) => state.game)
//     const board = getBoard()
//     const square = document.getElementsByClassName('Square')
//     const clickCount = useSelector((state) => state.clickCount)
//     const boardComponent = [];


    
//     for (let i = 0; i < boardState.length; i++) {
//         let row = boardState[i];
//         for (let j = 0; j < row.length; j++) {
//             boardComponent.push((<Square symbol={boardState[i][j]} x={i} y={j} />))
//             }
//         }

//     function changeColor(event) {
//         this.setState({blue: !this.state.green});
//         }

//     return (<div onClick={(count, dispatch) => {
//         dispatch(
//             {
//                 type: 'boardClick',
//                 x: props.x,
//                 y: props.y,
//             }
//         );
//         dispatch(
//             {
//                 type: 'updateCounter',
//                 clicked: clicked
//             }
//         );
//     }
//     } class={`square ${backgroundColor}`} ></div >);
// }

//     return (
//         <div className="FreeGamePage">
//             <div className="title">
//             <h3>Free Game Page</h3>
//             </div>
//             <Board />
//             </div>
//     )
// }