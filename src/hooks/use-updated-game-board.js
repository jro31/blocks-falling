import { squaresRef } from '../components/GameBoard';
import { live, dead, empty } from '../store/game-board';

const useUpdatedGameBoard = () => {
  const updatedGameBoard = movedBlock => {
    let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
    let newObject = JSON.parse(JSON.stringify(existingObject));

    Object.keys(existingObject).forEach(outerKey =>
      Object.keys(existingObject[outerKey]).forEach(innerKey => {
        if (existingObject[outerKey][innerKey].status === live) {
          newObject[outerKey][innerKey] = { status: outerKey === '0' ? dead : empty, block: '' };
        }
        if (movedBlock[outerKey] && movedBlock[outerKey][innerKey]) {
          newObject[outerKey][innerKey] = { ...movedBlock[outerKey][innerKey] };
        }
      })
    );

    return newObject;
  };

  return updatedGameBoard;
};

export default useUpdatedGameBoard;
