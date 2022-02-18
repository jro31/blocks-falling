import useRowIsBeneathGameBoard from './use-row-is-beneath-game-board';
import useRowKeyIntegers from './use-row-key-integers';
import useRenameRowKey from './use-rename-row-key';

const useOffsetForBottomOfGameBoard = () => {
  const rowIsBeneathGameBoard = useRowIsBeneathGameBoard();
  const rowKeyIntegers = useRowKeyIntegers();
  const renameRowKey = useRenameRowKey();

  const offsetForBottomOfGameBoard = block => {
    if (!rowIsBeneathGameBoard(block)) return;

    const highestRow = Math.max(...rowKeyIntegers(block));
    rowKeyIntegers(block).forEach(rowKey =>
      renameRowKey(block, rowKey, rowKey - (highestRow - 20))
    );
  };

  return offsetForBottomOfGameBoard;
};

export default useOffsetForBottomOfGameBoard;
