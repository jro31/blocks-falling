import { useDispatch, useSelector } from 'react-redux';

const GameBoard = () => {
  const GameBoardStatus = useSelector(state => state.gameBoard.gameBoardStatus);

  console.log(GameBoardStatus);

  return (
    <div className='gameboard-container'>
      {GameBoardStatus.map((row, rowIndex) => (
        <div key={`row${rowIndex}`} className='row'>
          {row.map((square, squareIndex) => (
            <div key={`row${rowIndex}-square${squareIndex}`} className='square' />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
