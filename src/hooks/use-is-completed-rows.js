import { squaresRef } from '../components/GameBoard';
import { settled } from '../store/game-board';

const useIsCompletedRows = () => {
  const isCompletedRows = () => {
    let returnBool = false;
    let statusArray = [];

    Object.keys(squaresRef.current).forEach(rowKey => {
      if (!returnBool) {
        statusArray = [];
        Object.keys(squaresRef.current[rowKey]).forEach(columnKey => {
          statusArray.push(squaresRef.current[rowKey][columnKey].status);
        });
        if (statusArray.every(status => status === settled)) returnBool = true;
      }
    });

    return returnBool;
  };

  return isCompletedRows;
};

export default useIsCompletedRows;
