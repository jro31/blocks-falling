import { squaresRef } from '../components/GameBoard';
import { iColor, live } from '../store/game-board';

const useRotateIBlock = () => {
  const currentGameBoard = squaresRef.current;
  let returnBlock = {};

  const rowKeyIntegers = () => Object.keys(returnBlock).map(rowKey => parseInt(rowKey));
  const columnKeyIntegers = () => {
    let columnsArray = [];

    Object.keys(returnBlock).forEach(rowKey => columnsArray.push(Object.keys(returnBlock[rowKey])));
    columnsArray.flat().map(column => parseInt(column));

    return [...new Set(columnsArray.flat().map(column => parseInt(column)))];
  };

  const rowIsAboveGameBoard = () => rowKeyIntegers().some(rowKey => rowKey < 1);
  const rowIsBeneathGameBoard = () => rowKeyIntegers().some(rowKey => rowKey > 20);
  const columnIsLeftOfGameBoard = () => columnKeyIntegers().some(columnKey => columnKey < 1);
  const columnIsRightOfGameBoard = () => columnKeyIntegers().some(columnKey => columnKey > 20);

  const renameRowKey = (oldKey, newKey) => {
    delete Object.assign(returnBlock, { [newKey]: returnBlock[oldKey] })[oldKey];
  };

  const renameColumnKey = (rowKey, oldKey, newKey) => {
    delete Object.assign(returnBlock[rowKey], { [newKey]: returnBlock[rowKey][oldKey] })[oldKey];
  };

  const offsetForTopOfGameBoard = () => {
    if (!rowIsAboveGameBoard()) return;

    const lowestRow = Math.min(...rowKeyIntegers());
    rowKeyIntegers()
      .reverse()
      .forEach(rowKey => renameRowKey(rowKey, rowKey - (lowestRow - 1)));
  };

  const offsetForBottomOfGameBoard = () => {
    if (!rowIsBeneathGameBoard()) return;

    const highestRow = Math.max(...rowKeyIntegers());
    rowKeyIntegers().forEach(rowKey => renameRowKey(rowKey, rowKey - (highestRow - 20)));
  };

  const offsetForLeftOfGameBoard = () => {
    if (!columnIsLeftOfGameBoard()) return;

    const leftestColumn = Math.min(...columnKeyIntegers());
    const amountToShift = 0 - leftestColumn + 1;

    rowKeyIntegers().forEach(rowKey =>
      Object.keys(returnBlock[rowKey])
        .reverse()
        .forEach(columnKey => {
          renameColumnKey(rowKey, parseInt(columnKey), parseInt(columnKey) + amountToShift);
        })
    );
  };

  const offsetForGameBoard = () => {
    offsetForTopOfGameBoard();
    offsetForBottomOfGameBoard();
    offsetForLeftOfGameBoard();
    // TODO - Offset for right of game board
  };

  const offsetForOtherBlocks = () => {
    // TODO
  };

  const offsetPosition = () => {
    offsetForGameBoard();
    offsetForOtherBlocks();
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
