import React from 'react';
import './Square.css'

function Square(props) {
    return (
        <div className="box" onClick={props.onClick}>
            {props.value === "X" ? <span className="cross">{props.value}</span> : <span className="zero">{props.value}</span>}
        </div>
    );
}

export default Square;