import { useDispatch } from 'react-redux';

import useCanMoveBlock from './use-can-move-block';
import { gameBoardActions, inProgress } from '../store/game-board';

import { squaresRef } from '../components/GameBoard';
import { statusRef } from '../components/GameBoard';

const useMoveBlock = () => {
  const dispatch = useDispatch();
  const canMove = useCanMoveBlock();

  const down = () => {
    if (statusRef.current === inProgress) {
      dispatch(gameBoardActions.stopTimer());

      let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
      let newObject = JSON.parse(JSON.stringify(existingObject));

      if (canMove('down')) {
        Object.keys(existingObject)
          .reverse()
          .forEach(outerKey =>
            Object.keys(existingObject[outerKey]).forEach(innerKey => {
              if (existingObject[outerKey][innerKey].status === 'live') {
                newObject[outerKey][innerKey] = {
                  status: outerKey === '0' ? 'dead' : 'empty',
                  color: '',
                };

                newObject[parseInt(outerKey) + 1][innerKey] = {
                  status: 'live',
                  color: existingObject[outerKey][innerKey].color,
                };
              }
            })
          );

        dispatch(gameBoardActions.updateGameBoard(newObject));
      } else {
        Object.keys(existingObject)
          .reverse()
          .forEach(outerKey =>
            Object.keys(existingObject[outerKey]).forEach(innerKey => {
              if (existingObject[outerKey][innerKey].status === 'live') {
                newObject[outerKey][innerKey] = {
                  status: 'settled',
                  color: existingObject[outerKey][innerKey].color,
                };
              }
            })
          );

        dispatch(gameBoardActions.updateGameBoard(newObject));
        dispatch(gameBoardActions.nextBlock());
      }
      dispatch(gameBoardActions.startTimer());
    }
  };

  const left = () => {
    if (!canMove('left')) return;

    let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
    let newObject = JSON.parse(JSON.stringify(existingObject));

    Object.keys(existingObject).forEach(outerKey =>
      Object.keys(existingObject[outerKey]).forEach(innerKey => {
        if (existingObject[outerKey][innerKey].status === 'live') {
          newObject[outerKey][innerKey] = {
            status: outerKey === '0' ? 'dead' : 'empty',
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
          if (existingObject[outerKey][innerKey].status === 'live') {
            newObject[outerKey][innerKey] = {
              status: outerKey === '0' ? 'dead' : 'empty',
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
    switch (direction) {
      case 'down':
        down();
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
