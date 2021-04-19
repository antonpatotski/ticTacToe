import Button from 'react-bootstrap/Button'
import Board from './components/board/board';
import './App.scss';

// eslint-disable-next-line
export  default () => {
  const arrayExample = Array(9).fill(null);

  return (
    <div className="app-body">
      <Board squares={arrayExample}></Board>
      <Button className="app-body__button" variant="primary">Start new game</Button>
      <Button className="app-body__button" variant="info">Reset move</Button>
    </div>
  )
}
