import useColumnIsLeftOfGameBoard from './use-column-is-left-of-game-board';
import useColumnKeyIntegers from './use-column-key-integers';
import useRowKeyIntegers from './use-row-key-integers';
import useRenameColumnKey from './use-rename-column-key';

const useOffsetForLeftOfGameBoard = () => {
  const columnIsLeftOfGameBoard = useColumnIsLeftOfGameBoard();
  const columnKeyIntegers = useColumnKeyIntegers();
  const rowKeyIntegers = useRowKeyIntegers();
  const renameColumnKey = useRenameColumnKey();

  const offsetForLeftOfGameBoard = block => {
    if (!columnIsLeftOfGameBoard(block)) return;

    const leftestColumn = Math.min(...columnKeyIntegers(block));
    const amountToShift = 0 - leftestColumn + 1;

    rowKeyIntegers(block).forEach(rowKey =>
      Object.keys(block[rowKey])
        .reverse()
        .forEach(columnKey => {
          renameColumnKey(block, rowKey, parseInt(columnKey), parseInt(columnKey) + amountToShift);
        })
    );
  };

  return offsetForLeftOfGameBoard;
};

export default useOffsetForLeftOfGameBoard;
