import React from 'react';
import { useDispatch } from 'react-redux';
import "./style.css"


export default function StartButton(props) {
    const { text } = props;

    const dispatch = useDispatch();

    return (
        <button className="main-start-btn btn btn-warning start-btn" onClick={
            () => dispatch({
                type: "START",
            })
        }>
            Restart
            {text}
        </button>
    )
}