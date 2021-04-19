import Board from './components/board/board';
import './App.scss';

// eslint-disable-next-line
export  default () => {
  const arrayExample = Array(9).fill(null);

  return (
    <div className="app-body">
      <Board squares={arrayExample}></Board>
      <button className="start-button">Start new game</button>
    </div>
  )
}
