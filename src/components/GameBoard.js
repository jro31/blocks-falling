import { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  antiClockwise,
  clockwise,
  down,
  gameBoardActions,
  gameOver,
  inProgress,
  left,
  paused,
  preGame,
  right,
} from '../store/game-board';
import useMoveBlock from '../hooks/use-move-block';
import useRotateBlock from '../hooks/use-rotate-block';
import useBeginGame from '../hooks/use-begin-game';

import styles from './Gameboard.module.css';

let timeOut;
export let squaresRef;
export let statusRef;
export let liveBlockRef;

const GameBoard = () => {
  const dispatch = useDispatch();
  const squares = useSelector(state => state.gameBoard.squares);
  const speed = useSelector(state => state.gameBoard.speed);
  const timer = useSelector(state => state.gameBoard.timer);
  const status = useSelector(state => state.gameBoard.status);
  const liveBlock = useSelector(state => state.gameBoard.liveBlock);
  squaresRef = useRef(squares);
  squaresRef.current = squares;
  statusRef = useRef(status);
  statusRef.current = status;
  liveBlockRef = useRef(liveBlock);
  liveBlockRef.current = liveBlock;

  const moveBlock = useMoveBlock();
  const rotateBlock = useRotateBlock();
  const beginGame = useBeginGame();

  const handleKeyPress = event => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        moveBlock(down);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        moveBlock(left);
        break;
      case 'ArrowRight':
        event.preventDefault();
        moveBlock(right);
        break;
      case 'z':
        event.preventDefault();
        rotateBlock(antiClockwise);
        break;
      case 'x':
        event.preventDefault();
        rotateBlock(clockwise);
        break;
      case ' ':
        event.preventDefault();
        if (statusRef.current === preGame || statusRef.current === gameOver) {
          beginGame();
        } else if (statusRef.current === inProgress) {
          dispatch(gameBoardActions.pauseGame());
        } else if (statusRef.current === paused) {
          dispatch(gameBoardActions.resumeGame());
        }
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (status === inProgress) {
      if (timer.isLive) {
        timeOut = setTimeout(() => {
          moveBlock(down);
        }, speed);
      }
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [status, timer]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <div className={styles.gameboard}>
        {Array.from(new Array(Object.keys(squares).length), (_, i) => i).map(row => (
          <div key={`row-${row}`} className={styles.row}>
            {Array.from(
              new Array(Object.keys(squares[Object.keys(squares)[0]]).length),
              (_, i) => i + 1
            ).map(column => (
              <div
                key={`square-${row}-${column}`}
                className={`${styles.square} ${styles[squares[row][column].status]} ${
                  styles[squares[row][column].block] || ''
                } ${status === gameOver ? styles['game-over'] : ''}`}
              />
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default GameBoard;
