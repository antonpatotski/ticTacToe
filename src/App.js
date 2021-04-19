import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Board from './components/board/board';
import { findWinner } from "./services/helper";
import './App.scss';

// eslint-disable-next-line
export  default () => {
  const [squares, updateSquares] = useState(Array(9).fill(null));
  const [isXNextTurn, changeIsXTurn] = useState(true);
  const [movesHistory, updateMovesHistory] = useState([]);
  const winner = findWinner(squares);

  const handleSquareClick = (i) => {
    if (winner || squares[i] !== null) return;

    const squaresCopy = [...squares];
    const movesHistoryCopy = [...movesHistory];

    squaresCopy[i] = isXNextTurn ? 'X' : 'O';
    movesHistoryCopy.push(i);
    updateMovesHistory(movesHistoryCopy);
    updateSquares(squaresCopy);
    changeIsXTurn(!isXNextTurn);
  }

  const startNewGame = () => {
    updateMovesHistory([]);
    updateSquares(Array(9).fill(null));
    changeIsXTurn(true);
  }

  const resetMove = () => {
    if (movesHistory.length === 0) return;

    const movesHistoryCopy = [...movesHistory];
    const squaresCopy = [...squares];
    const lastChangedIndex = movesHistoryCopy[movesHistoryCopy.length - 1];
    squaresCopy[lastChangedIndex] = null;
    movesHistoryCopy.pop();
    updateMovesHistory(movesHistoryCopy);
    updateSquares(squaresCopy);
    changeIsXTurn(!isXNextTurn);
  }

  const getMoveRemind = () => {
    if (winner === 'draw') {
      return 'Game over it\'s draw'
    } else if (winner !== null) {
      return `The winner is ${winner}`;
    }

    return `Next turn is ${isXNextTurn ? 'X' : 'O'}`
  }

  return (
    <div className="app-body">
      <Board
        squares={squares}
        onClick={handleSquareClick}>
      </Board>
      <div className="app-body__turn">
        {getMoveRemind()}
      </div>
      <Button
        onClick={startNewGame}
        className="app-body__button app-body__button--new"
        variant="primary">
        Start new game
      </Button>
      <Button
        onClick={resetMove}
        className="app-body__button app-body__button--reset"
        variant="info">
        Reset move
      </Button>
    </div>
  )
}
