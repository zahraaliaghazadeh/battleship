import React from 'react';
import { useDispatch } from 'react-redux';
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