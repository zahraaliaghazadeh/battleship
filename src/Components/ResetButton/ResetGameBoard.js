import React from 'react';
import { useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"


export default function ResetButton(props) {
    const { text } = props;

    const dispatch = useDispatch();

    return (
        <button className="main-reset-btn" onClick={
            () => dispatch({
                type: "RESET",
            })

        }>
            {text}
        </button>
    )
}