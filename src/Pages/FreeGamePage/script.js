
import React from 'react'
// import Board from '../../Components/Board/Board'
import Game from '../../Components/Game.js'
import "./style.css"
// import generateFleet from '../../Components/generateShips'
import StartButton from '../../Components/StartButton/StartButton.js'

// import Board from '../../Components/Board'
// import Square from '../../Square.jsx'
// import {useSelector} from 'react-redux'

export default function FreeGamePage() {
    return (
    <div>
      
      <StartButton/>
      {/* <button onClick={()=> generateFleet()} type="button" className="btn btn-warning start-btn">START</button> */}
      {/* <button type="button" className="btn btn-danger reset-btn">RESET</button> */}

      <Game />

    </div>
    
    )}

  // function generateShips(){
  //   const [x,y] = generateRandomCoordinates()
  //   return null
  // }

  // function resetBoard(){
  //   return null
  // }

  // // This function generates a random coordinate for ship
  // function generateRandomCoordinates(){
  //   let x = Math.floor(Math.random(10))
  //   let y = Math.floor(Math.random(10))
  //   return [x,y]
  // }
  
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