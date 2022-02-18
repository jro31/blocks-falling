import useRowIsBeneathGameBoard from './use-row-is-beneath-game-board';
import useRowKeyIntegers from './use-row-key-integers';
import useShiftBlockUp from './use-shift-block-up';

const useOffsetForBottomOfGameBoard = () => {
  const rowIsBeneathGameBoard = useRowIsBeneathGameBoard();
  const rowKeyIntegers = useRowKeyIntegers();
  const shiftBlockUp = useShiftBlockUp();

  const offsetForBottomOfGameBoard = block => {
    if (!rowIsBeneathGameBoard(block)) return;

    const highestRow = Math.max(...rowKeyIntegers(block));
    shiftBlockUp(block, highestRow - 20);
  };

  return offsetForBottomOfGameBoard;
};

export default useOffsetForBottomOfGameBoard;
