import React from 'react';
// import { useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import './Square.css';


export default function Square(props) {
    const color = props.color;
    // const dispatch = useDispatch();

    const onSquareClick = () => {
        if (!props.isDisabled) {
            props.onSquareClick(props.x, props.y);
            // dispatch({
            //     type: 'boardClick',
            //     x: props.x,
            //     y: props.y,
            // })
        }
    }



// console.log(color)
    return (
    // <div className= "square" onClick={() => dispatch(
    //     {
    //     type: 'boardClick',
    //     color: color,
    //     x: props.x,
    //     y: props.y,
    // }
    // )} id={color} ></div>);
    <div className= "square" onClick={onSquareClick} id={color} ></div>);
    // )} id={color} className={squareColor}></div>);
}



