import React from 'react';
import { useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import './Square.css';


// function hitReducer(state, action){
//     if(action.type === "HIt"){
//         state[action.x][action.y] = 'lightGreenSquare';
//     }else if(action.type === "MISS"){
//         state[action.x][action.y] = 'darkBlueSquare';
//     }
//     return state
// }

export default function Square(props) {
    const color = props.color;
    const dispatch = useDispatch();


   

// console.log(color)
    return (
    <div className= "square" onClick={() => dispatch(
        {
        type: 'boardClick',
        color: color,
        x: props.x,
        y: props.y,
    }
    )} id={color} ></div>);
    // )} id={color} className={squareColor}></div>);
}



