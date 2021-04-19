import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Board from './components/board/board';
import { findWinner } from "./services/helper";
import './App.scss';

// eslint-disable-next-line
export  default () => {
  const [squares, updateSquares] = useState(Array(9).fill(null));
  const [isXNextTurn, changeIsXTurn] = useState(true);
  const  winner = findWinner(squares);

  const handleSquareClick = (i) => {
    if (winner || squares[i] !== null) return;

    const squaresCopy = [...squares];
    squaresCopy[i] = isXNextTurn ? 'X' : 'O';
    updateSquares(squaresCopy);
    changeIsXTurn(!isXNextTurn);
  }

  const startNewGame = () => {
    updateSquares(Array(9).fill(null));
    changeIsXTurn(true);
  }

  return (
    <div className="app-body">
      <Board
        squares={squares}
        onClick={handleSquareClick}>
      </Board>
      <div className="app-body__turn">
        Next turn is <b>{isXNextTurn ? 'X' : 'O'}</b>
      </div>
      <Button
        onClick={startNewGame}
        className="app-body__button app-body__button--new"
        variant="primary">
        Start new game
      </Button>
      <Button
        className="app-body__button app-body__button--reset"
        variant="info">
        Reset move
      </Button>
    </div>
  )
}
