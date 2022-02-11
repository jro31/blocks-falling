import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { blocks, gameBoardActions } from '../store/game-board';
import useMoveBlock from '../hooks/use-move-block';

let interval;

const GameBoard = () => {
  const dispatch = useDispatch();
  const squares = useSelector(state => state.gameBoard.squares);
  const speed = useSelector(state => state.gameBoard.speed);

  const moveBlock = useMoveBlock();

  const newBlock = () => {
    clearInterval(interval);
    dispatch(gameBoardActions.nextBlock(blocks[Math.floor(Math.random() * blocks.length)]));

    // interval = setInterval(() => {
    //   console.log('HERE I AM');
    // }, speed);
  };

  const moveBlockDown = () => {
    moveBlock('down');
  };

  const moveBlockLeft = () => {
    moveBlock('left');
  };

  const moveBlockRight = () => {
    moveBlock('right');
  };

  useEffect(() => {
    newBlock();
  }, []);

  console.log(squares);

  return (
    <Fragment>
      <div className='gameboard-container'>
        {Array.from(new Array(Object.keys(squares).length), (_, i) => i + 1).map(row => (
          <div key={`row-${row}`} className='row'>
            {Array.from(
              new Array(Object.keys(squares[Object.keys(squares)[0]]).length),
              (_, i) => i + 1
            ).map(column => (
              <div
                key={`square-${row}-${column}`}
                className={`square ${squares[row][column].status}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div onClick={moveBlockDown}>MOVE DOWN</div>
      <div onClick={moveBlockLeft}>MOVE LEFT</div>
      <div onClick={moveBlockRight}>MOVE RIGHT</div>
    </Fragment>
  );
};

export default GameBoard;
