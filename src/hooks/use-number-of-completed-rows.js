import { squaresRef } from '../components/GameBoard';
import { settled } from '../store/game-board';

const useNumberOfCompletedRows = () => {
  const numberOfCompletedRows = () => {
    let completedRows = [];
    let statusArray = [];

    Object.keys(squaresRef.current).forEach(rowKey => {
      statusArray = [];
      Object.keys(squaresRef.current[rowKey]).forEach(columnKey => {
        statusArray.push(squaresRef.current[rowKey][columnKey].status);
      });
      if (statusArray.every(status => status === settled)) completedRows.push(rowKey);
    });

    return completedRows.length;
  };

  return numberOfCompletedRows;
};

export default useNumberOfCompletedRows;
