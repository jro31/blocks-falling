import useRenameRowKey from './use-rename-row-key';
import useRenameColumnKey from './use-rename-column-key';
import useRowKeyIntegers from './use-row-key-integers';
import useColumnKeyIntegers from './use-column-key-integers';
import useRowIsAboveGameBoard from './use-row-is-above-game-board';
import useRowIsBeneathGameBoard from './use-row-is-beneath-game-board';
import useColumnIsLeftOfGameBoard from './use-column-is-left-of-game-board';
import useColumnIsRightOfGameBoard from './use-column-is-right-of-game-board';

import { squaresRef } from '../components/GameBoard';
import { iColor, live } from '../store/game-board';

const useRotateIBlock = () => {
  const renameRowKey = useRenameRowKey();
  const renameColumnKey = useRenameColumnKey();
  const rowKeyIntegers = useRowKeyIntegers();
  const columnKeyIntegers = useColumnKeyIntegers();
  const rowIsAboveGameBoard = useRowIsAboveGameBoard();
  const rowIsBeneathGameBoard = useRowIsBeneathGameBoard();
  const columnIsLeftOfGameBoard = useColumnIsLeftOfGameBoard();
  const columnIsRightOfGameBoard = useColumnIsRightOfGameBoard();

  const currentGameBoard = squaresRef.current;

  let returnBlock = {};

  const offsetForTopOfGameBoard = () => {
    if (!rowIsAboveGameBoard(returnBlock)) return;

    const lowestRow = Math.min(...rowKeyIntegers(returnBlock));
    rowKeyIntegers(returnBlock)
      .reverse()
      .forEach(rowKey => renameRowKey(returnBlock, rowKey, rowKey - (lowestRow - 1)));
  };

  const offsetForBottomOfGameBoard = () => {
    if (!rowIsBeneathGameBoard(returnBlock)) return;

    const highestRow = Math.max(...rowKeyIntegers(returnBlock));
    rowKeyIntegers(returnBlock).forEach(rowKey =>
      renameRowKey(returnBlock, rowKey, rowKey - (highestRow - 20))
    );
  };

  const offsetForLeftOfGameBoard = () => {
    if (!columnIsLeftOfGameBoard(returnBlock)) return;

    const leftestColumn = Math.min(...columnKeyIntegers(returnBlock));
    const amountToShift = 0 - leftestColumn + 1;

    rowKeyIntegers(returnBlock).forEach(rowKey =>
      Object.keys(returnBlock[rowKey])
        .reverse()
        .forEach(columnKey => {
          renameColumnKey(
            returnBlock,
            rowKey,
            parseInt(columnKey),
            parseInt(columnKey) + amountToShift
          );
        })
    );
  };

  const offsetForRightOfGameBoard = () => {
    if (!columnIsRightOfGameBoard(returnBlock)) return;

    const rightestColumn = Math.max(...columnKeyIntegers(returnBlock));
    const amountToShift = rightestColumn - 10;

    rowKeyIntegers(returnBlock).forEach(rowKey =>
      Object.keys(returnBlock[rowKey]).forEach(columnKey => {
        renameColumnKey(
          returnBlock,
          rowKey,
          parseInt(columnKey),
          parseInt(columnKey) - amountToShift
        );
      })
    );
  };

  const offsetForGameBoard = () => {
    offsetForTopOfGameBoard();
    offsetForBottomOfGameBoard();
    offsetForLeftOfGameBoard();
    offsetForRightOfGameBoard();
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

    // console.log(returnBlock);

    return returnBlock;
  };

  return rotateIBlock;
};

export default useRotateIBlock;
