import Square from '../square/square';
import './board.scss';

// eslint-disable-next-line
export default ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, i) =>
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}>
        </Square>
      )}
    </div>
  );
}