import { squaresRef } from '../components/GameBoard';
import { live, dead, empty } from '../store/game-board';

const useUpdatedGameBoard = () => {
  const updatedGameBoard = movedBlock => {
    let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
    let newObject = JSON.parse(JSON.stringify(existingObject));

    Object.keys(existingObject).forEach(rowKey =>
      Object.keys(existingObject[rowKey]).forEach(columnKey => {
        if (existingObject[rowKey][columnKey].status === live) {
          newObject[rowKey][columnKey] = { status: rowKey === '0' ? dead : empty, block: '' };
        }
        if (movedBlock[rowKey] && movedBlock[rowKey][columnKey]) {
          newObject[rowKey][columnKey] = { ...movedBlock[rowKey][columnKey] };
        }
      })
    );

    return newObject;
  };

  return updatedGameBoard;
};

export default useUpdatedGameBoard;
