import { useDispatch } from 'react-redux';

import { squaresRef, statusRef, liveBlockRef } from '../components/GameBoard';
import { live, inProgress, empty, gameBoardActions } from '../store/game-board';
import useRotateIBlock from './use-rotate-i-block';

const useRotateBlock = () => {
  const dispatch = useDispatch();
  const rotateIBlock = useRotateIBlock();

  const initialShape = () => {
    let returnObject = {};

    Object.keys(squaresRef.current).forEach(outerKey =>
      Object.keys(squaresRef.current[outerKey]).forEach(innerKey => {
        if (squaresRef.current[outerKey][innerKey].status === live) {
          if (!returnObject[outerKey]) returnObject[outerKey] = {};
          if (!returnObject[outerKey][innerKey]) returnObject[outerKey][innerKey] = {};
          returnObject[outerKey][innerKey].status = live;
          returnObject[outerKey][innerKey].color = squaresRef.current[outerKey][innerKey].color;
        }
      })
    );

    return returnObject;
  };

  const newGameBoard = rotatedBlock => {
    let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
    let newObject = JSON.parse(JSON.stringify(existingObject));

    Object.keys(existingObject).forEach(outerKey =>
      Object.keys(existingObject[outerKey]).forEach(innerKey => {
        if (existingObject[outerKey][innerKey].status === live) {
          newObject[outerKey][innerKey] = { status: empty, color: '' };
        }
        if (rotatedBlock[outerKey] && rotatedBlock[outerKey][innerKey]) {
          newObject[outerKey][innerKey] = { ...rotatedBlock[outerKey][innerKey] };
        }
      })
    );

    return newObject;
  };

  const rotateBlock = (direction = null) => {
    if (statusRef.current === inProgress) {
      if (liveBlockRef.current === 'I') {
        dispatch(gameBoardActions.updateGameBoard(newGameBoard(rotateIBlock(initialShape()))));
      }
    }
  };

  return rotateBlock;
};

export default useRotateBlock;
