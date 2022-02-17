import { squaresRef } from '../components/GameBoard';
import { iColor, live } from '../store/game-board';

const useRotateIBlock = () => {
  const currentGameBoard = squaresRef.current;
  let returnBlock = {};

  const rowKeyIntegers = () => Object.keys(returnBlock).map(rowKey => parseInt(rowKey));

  const rowIsAboveGameBoard = () => rowKeyIntegers().some(rowKey => rowKey < 1);
  const rowIsBeneathGameBoard = () => rowKeyIntegers().some(rowKey => rowKey > 20);

  const renameRowKeys = (oldKey, newKey) => {
    delete Object.assign(returnBlock, { [newKey]: returnBlock[oldKey] })[oldKey];
  };

  const offsetPosition = () => {
    if (rowIsAboveGameBoard()) {
      const lowestRow = Math.min(...rowKeyIntegers());

      rowKeyIntegers()
        .reverse()
        .forEach(rowKey => renameRowKeys(rowKey, rowKey - (lowestRow - 1)));
    } else if (rowIsBeneathGameBoard()) {
      const highestRow = Math.max(...rowKeyIntegers());

      Object.keys(returnBlock).forEach(rowKey => renameRowKeys(rowKey, rowKey - (highestRow - 20)));
    }
  };

  const rotateIBlock = initialShape => {
    returnBlock = {};
    const position = () => (Object.keys(initialShape).length === 1 ? 'horizontal' : 'vertical');

    if (position() === 'horizontal') {
      const firstRow = parseInt(Object.keys(initialShape)[0]) - 1;
      const newColumn = parseInt(Object.keys(initialShape[Object.keys(initialShape)[0]])[1]);

      [...Array(4)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        returnBlock[firstRow + index][newColumn] = { status: live, color: iColor };
      });
    } else {
      const newRow = parseInt(Object.keys(initialShape)[1]);
      const firstColumn = parseInt(Object.keys(initialShape[Object.keys(initialShape)[0]])[0]) - 1;

      returnBlock[newRow] = {};

      [...Array(4)].forEach((_, index) => {
        returnBlock[newRow][firstColumn + index] = { status: live, color: iColor };
      });
    }

    offsetPosition();

    console.log(returnBlock);

    return returnBlock;
  };

  return rotateIBlock;
};

export default useRotateIBlock;
