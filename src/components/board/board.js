import Square from '../square/square';

export default ({ squares, onClick }) => {
  return (
    <>
      {squares.map((square, i) =>
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}>
        </Square>
      )}
    </>
  );
}