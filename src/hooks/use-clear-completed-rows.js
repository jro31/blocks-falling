import { squaresRef } from '../components/GameBoard';
import { deadRow, emptyRow, settled } from '../store/game-board';

const useClearCompletedRows = () => {
  const clearCompletedRows = () => {
    let returnObject = JSON.parse(JSON.stringify(squaresRef.current));
    let statusArray = [];

    Object.keys(returnObject).forEach(rowKey => {
      statusArray = [];
      Object.keys(returnObject[rowKey]).forEach(columnKey => {
        statusArray.push(returnObject[rowKey][columnKey].status);
      });
      if (statusArray.every(status => status === settled)) {
        [...Array(parseInt(rowKey)).keys()].reverse().forEach(fallingRowKey => {
          if (fallingRowKey === 0) {
            returnObject[fallingRowKey] = deadRow;
            returnObject[fallingRowKey + 1] = emptyRow;
          } else {
            returnObject[fallingRowKey + 1] = returnObject[fallingRowKey];
          }
        });
      }
    });

    return returnObject;
  };

  return clearCompletedRows;
};

export default useClearCompletedRows;
