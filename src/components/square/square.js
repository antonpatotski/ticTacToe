import './square.scss';

// eslint-disable-next-line
export default ({ onClick, value }) => {
  return (
    <button
      onClick={ onClick }
      className="square">
      { value }
    </button>
  );
}