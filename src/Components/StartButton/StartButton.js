import React from 'react';
import { useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
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
            Start/Restart
            {text}
        </button>
    )
}