import Square from '../square/square';

export default ({ squares }) => {
  return (
    <>
      {squares.map((square, i) => <Square key={i} value={square}></Square>)}
    </>
  );
}