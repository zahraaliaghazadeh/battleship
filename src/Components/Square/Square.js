import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export default function Square(props) {
    const color = props.color;
    const dispatch = useDispatch();
console.log(color)
    return (
    <div className= "square" onClick={() => dispatch(
        {
        type: 'boardClick',
        color: color,
        x: props.x,
        y: props.y,
    }
    )} id={color}></div>);
}
 

