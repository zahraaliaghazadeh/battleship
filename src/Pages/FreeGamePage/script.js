
import React from 'react'
// import Board from '../../Components/Board/Board'
import Game from '../../Components/Game.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
// import generateFleet from '../../Components/generateShips'
import StartButton from '../../Components/StartButton/StartButton.js'

// import Board from '../../Components/Board'
// import Square from '../../Square.jsx'
// import {useSelector} from 'react-redux'

export default function FreeGamePage() {

  return (

    <>
      <div className='FreeGamePage'>
        <div className="container">
          <div className="row">
            <div className="col-md-auto">
              <div className="title">
                <h3>Free Game Page</h3>
              </div>
              <div className="start-button">
                <StartButton />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-auto">
              <Game />
            </div>
          </div>
        </div>
      </div>
    </>

    // <>
    //   <div className='FreeGamePage'>
    //     <div className="wrapper">
    //       <div className="title">
    //       <h3>Free Game Page</h3>
    //       </div>
    //       <div className="left reset-btn">

    //         <StartButton/>
    //       </div>
    //           {/* <button onClick={()=> generateFleet()} type="button" className="btn btn-warning start-btn">START</button> */}
    //           {/* <button type="button" className="btn btn-danger reset-btn">RESET</button> */}
    //       <div className="right">
    //         <Game />
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}

    // return (
    // <div className='FreeGamePage'>

    //   <StartButton/>
    //   {/* <button onClick={()=> generateFleet()} type="button" className="btn btn-warning start-btn">START</button> */}
    //   {/* <button type="button" className="btn btn-danger reset-btn">RESET</button> */}

    //   <Game />

    // </div>

    // )}
