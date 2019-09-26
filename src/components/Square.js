import React from 'react';
import '../css/Square.css';

const Square = ({ clickFunction, value }) => (
    <button className="square" onClick={clickFunction}>
        {value}
    </button>
)

export default Square