import { squaresRef } from '../components/GameBoard';
import { settled } from '../store/game-board';

const useCompletedRows = () => {
  let rowsArray = [];
  let statusArray = [];

  const completedRows = () => {
    rowsArray = [];

    Object.keys(squaresRef.current).forEach(rowKey => {
      statusArray = [];
      Object.keys(squaresRef.current[rowKey]).forEach(columnKey => {
        statusArray.push(squaresRef.current[rowKey][columnKey].status);
      });
      if (statusArray.every(status => status === settled)) rowsArray.push(parseInt(rowKey));
    });

    return rowsArray;
  };

  return completedRows;
};

export default useCompletedRows;
