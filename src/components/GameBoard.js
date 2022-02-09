import { useDispatch, useSelector } from 'react-redux';

const GameBoard = () => {
  const dispatch = useDispatch();
  const squares = useSelector(state => state.gameBoard.squares);

  return (
    <div className='gameboard-container'>
      {Array.from(new Array(20), (x, i) => i + 1).map(row => (
        <div key={`row-${row}`} className='row'>
          {Array.from(new Array(10), (x, i) => i + 1).map(column => (
            <div
              key={`square-${row}-${column}`}
              className={`square ${squares[row][column].status}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
