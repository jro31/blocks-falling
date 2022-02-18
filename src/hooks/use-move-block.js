import { useDispatch } from 'react-redux';

import useCanMoveBlock from './use-can-move-block';
import useGameIsInProgress from './use-game-is-in-progress';
import useMoveBlockDown from './use-move-block-down';
import { dead, empty, gameBoardActions, live } from '../store/game-board';

import { squaresRef } from '../components/GameBoard';

const useMoveBlock = () => {
  const dispatch = useDispatch();
  const canMove = useCanMoveBlock();
  const gameIsInProgress = useGameIsInProgress();
  const moveBlockDown = useMoveBlockDown();

  const left = () => {
    if (!canMove('left')) return;

    let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
    let newObject = JSON.parse(JSON.stringify(existingObject));

    Object.keys(existingObject).forEach(outerKey =>
      Object.keys(existingObject[outerKey]).forEach(innerKey => {
        if (existingObject[outerKey][innerKey].status === live) {
          newObject[outerKey][innerKey] = {
            status: outerKey === '0' ? dead : empty,
            color: '',
          };
          newObject[outerKey][parseInt(innerKey) - 1] = {
            status: 'live',
            color: existingObject[outerKey][innerKey].color,
          };
        }
      })
    );

    dispatch(gameBoardActions.updateGameBoard(newObject));
  };

  const right = () => {
    if (!canMove('right')) return;

    let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
    let newObject = JSON.parse(JSON.stringify(existingObject));

    Object.keys(existingObject).forEach(outerKey =>
      Object.keys(existingObject[outerKey])
        .reverse()
        .forEach(innerKey => {
          if (existingObject[outerKey][innerKey].status === live) {
            newObject[outerKey][innerKey] = {
              status: outerKey === '0' ? dead : empty,
              color: '',
            };
            newObject[outerKey][parseInt(innerKey) + 1] = {
              status: 'live',
              color: existingObject[outerKey][innerKey].color,
            };
          }
        })
    );

    dispatch(gameBoardActions.updateGameBoard(newObject));
  };

  const moveBlock = direction => {
    if (!gameIsInProgress()) return;

    switch (direction) {
      case 'down':
        moveBlockDown();
        break;
      case 'left':
        left();
        break;
      case 'right':
        right();
        break;
      default:
        return;
    }
  };

  return moveBlock;
};

export default useMoveBlock;
