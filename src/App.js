import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Board from './components/board/board';
import './App.scss';

// eslint-disable-next-line
export  default () => {
  const squares = Array(9).fill(null);
  const [isXNextTurn, changeTurn] = useState(true);

  return (
    <div className="app-body">
      <Board squares={squares}></Board>
      <div className="app-body__turn">
        Next turn is <b>{isXNextTurn ? 'X' : 'O'}</b>
      </div>
      <Button className="app-body__button app-body__button--new" variant="primary">Start new game</Button>
      <Button className="app-body__button app-body__button--reset" variant="info">Reset move</Button>
    </div>
  )
}
