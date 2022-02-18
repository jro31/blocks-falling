import useRowIsAboveGameBoard from './use-row-is-above-game-board';
import useRowKeyIntegers from './use-row-key-integers';
import useShiftBlockDown from './use-shift-block-down';

const useOffsetForTopOfGameBoard = () => {
  const rowIsAboveGameBoard = useRowIsAboveGameBoard();
  const rowKeyIntegers = useRowKeyIntegers();
  const shiftBlockDown = useShiftBlockDown();

  const offsetForTopOfGameBoard = block => {
    if (!rowIsAboveGameBoard(block)) return;

    const lowestRow = Math.min(...rowKeyIntegers(block));
    shiftBlockDown(block, 1 - lowestRow);
  };

  return offsetForTopOfGameBoard;
};

export default useOffsetForTopOfGameBoard;
