import React, { Fragment, useState } from 'react'
import '../css/Board.css';
import Square from './Square'

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(''))
    const [turn, setTurn] = useState('X')

    const renderSquare = (i) => (
        <Square
            value={squares[i]}
            clickFunction={() => handleClick(i)}
        />
    )

    const handleClick = (i) => {

        const winner = calculateWinner(squares)

        if (squares[i] === '' && !winner) {
            turn === 'X' ? setTurn('O') : setTurn('X')
            const tempsquare = squares
            const carre = turn
            tempsquare.splice(i, 1, carre)
            setSquares(tempsquare)

        }

    }

    const calculateWinner = (squares) => {
        const winCombi = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < winCombi.length; i++) {
            const [a, b, c] = winCombi[i]

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
                return squares[a]
        }
        return null
    }

    const isGameOver = () => {
        if (squares.every(s => s !== '')) {
            return true
        }
    }

    const getStatus = () => {

        return `Tour du joueur: ${turn}`
    }

    const getResult = () => {
        const winner = calculateWinner(squares)

        if (winner) {
            return `!!! Le gagnant est ${winner} !!!`
        } else if (isGameOver()) {
            return '...Match nul...'
        }
    }

    const reset = () => {
        setSquares(Array(9).fill(''))
        setTurn('X')
    }

    return (
        <Fragment>
            <h2>{getStatus()} </h2>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div>
                <h2>{getResult()}</h2>
            </div>
            <div>
                <button onClick={reset} > Nouvelle partie</button>
            </div>
        </Fragment>
    )
}

export default Board;
