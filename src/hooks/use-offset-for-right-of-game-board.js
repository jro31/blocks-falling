import useColumnIsRightOfGameBoard from './use-column-is-right-of-game-board';
import useColumnKeyIntegers from './use-column-key-integers';
import useRowKeyIntegers from './use-row-key-integers';
import useRenameColumnKey from './use-rename-column-key';

const useOffsetForRightOfGameBoard = () => {
  const columnIsRightOfGameBoard = useColumnIsRightOfGameBoard();
  const columnKeyIntegers = useColumnKeyIntegers();
  const rowKeyIntegers = useRowKeyIntegers();
  const renameColumnKey = useRenameColumnKey();

  const offsetForRightOfGameBoard = block => {
    if (!columnIsRightOfGameBoard(block)) return;

    const rightestColumn = Math.max(...columnKeyIntegers(block));
    const amountToShift = rightestColumn - 10;

    rowKeyIntegers(block).forEach(rowKey =>
      Object.keys(block[rowKey]).forEach(columnKey => {
        renameColumnKey(block, rowKey, parseInt(columnKey), parseInt(columnKey) - amountToShift);
      })
    );
  };

  return offsetForRightOfGameBoard;
};

export default useOffsetForRightOfGameBoard;
