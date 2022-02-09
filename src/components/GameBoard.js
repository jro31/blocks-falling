import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { blocks, gameBoardActions } from '../store/game-board';

let interval;

const GameBoard = () => {
  const dispatch = useDispatch();
  const squares = useSelector(state => state.gameBoard.squares);
  const speed = useSelector(state => state.gameBoard.speed);

  const newBlock = () => {
    clearInterval(interval);
    dispatch(gameBoardActions.nextBlock(blocks[Math.floor(Math.random() * blocks.length)]));

    interval = setInterval(() => {
      console.log('HERE I AM');
    }, speed);
  };

  useEffect(() => {
    newBlock();
  }, []);

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
