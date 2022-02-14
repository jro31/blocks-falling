import { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gameBoardActions } from '../store/game-board';
import useMoveBlock from '../hooks/use-move-block';

// export let downTimeRemaining;
let timeOut;
export let squaresRef;

const GameBoard = () => {
  const dispatch = useDispatch();
  const squares = useSelector(state => state.gameBoard.squares);
  const speed = useSelector(state => state.gameBoard.speed);
  // const downTimeRemaining = useSelector(state => state.gameBoard.downTimeRemaining);
  const timer = useSelector(state => state.gameBoard.timer);
  squaresRef = useRef(squares);
  squaresRef.current = squares;

  const moveBlock = useMoveBlock();

  const startGame = () => {
    newBlock();
  };

  const newBlock = () => {
    dispatch(gameBoardActions.nextBlock());
  };

  const moveBlockDownClickHandler = () => {
    moveBlockDown();
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

  // Test function - Can be deleted
  const stopDescent = () => {
    dispatch(gameBoardActions.stopTimer());
  };

  // Test function - Can be deleted
  const startDescent = () => {
    dispatch(gameBoardActions.startTimer());
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    console.log('🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠🏠');
    clearTimeout(timeOut);

    if (timer.isLive) {
      timeOut = setTimeout(() => {
        moveBlockDown();
      }, speed);
    }

    // console.log(timeOut);
    // dispatch(
    //   gameBoardActions.setDownTimeRemaining(new Date().getTime() + downTimeRemaining || speed)
    // );

    return () => {
      clearTimeout(timeOut);
    };
  }, [timer]);

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
                className={`square ${squares[row][column].status} ${squares[row][column].color}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div onClick={moveBlockDownClickHandler}>MOVE DOWN</div>
      <div onClick={moveBlockLeft}>MOVE LEFT</div>
      <div onClick={moveBlockRight}>MOVE RIGHT</div>
      <div onClick={stopDescent}>STOP DESCENT</div>
      <div onClick={startDescent}>START DESCENT</div>
    </Fragment>
  );
};

export default GameBoard;
