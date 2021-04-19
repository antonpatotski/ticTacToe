import { winCases} from "../constants";

export const findWinner = (squares) => {
  for (let i = 0; i < winCases.length; i++) {
    const [a, b, c] = winCases[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }

  const isGameFinished = squares.findIndex(square => square === null) === -1;
  const isDraw = isGameFinished && 'draw';

  return isDraw || null;
}