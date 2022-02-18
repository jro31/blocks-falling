import useRowIsAboveGameBoard from './use-row-is-above-game-board';
import useRowKeyIntegers from './use-row-key-integers';
import useRenameRowKey from './use-rename-row-key';

const useOffsetForTopOfGameBoard = () => {
  const rowIsAboveGameBoard = useRowIsAboveGameBoard();
  const rowKeyIntegers = useRowKeyIntegers();
  const renameRowKey = useRenameRowKey();

  const offsetForTopOfGameBoard = block => {
    if (!rowIsAboveGameBoard(block)) return;

    const lowestRow = Math.min(...rowKeyIntegers(block));
    rowKeyIntegers(block)
      .reverse()
      .forEach(rowKey => renameRowKey(block, rowKey, rowKey - (lowestRow - 1)));
  };

  return offsetForTopOfGameBoard;
};

export default useOffsetForTopOfGameBoard;
