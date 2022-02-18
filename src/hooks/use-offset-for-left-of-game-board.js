import useColumnIsLeftOfGameBoard from './use-column-is-left-of-game-board';
import useColumnKeyIntegers from './use-column-key-integers';
import useShiftBlockRight from './use-shift-block-right';

const useOffsetForLeftOfGameBoard = () => {
  const columnIsLeftOfGameBoard = useColumnIsLeftOfGameBoard();
  const columnKeyIntegers = useColumnKeyIntegers();
  const shiftBlockRight = useShiftBlockRight();

  const offsetForLeftOfGameBoard = block => {
    if (!columnIsLeftOfGameBoard(block)) return;

    const leftestColumn = Math.min(...columnKeyIntegers(block));
    const amountToShift = 0 - leftestColumn + 1;

    shiftBlockRight(block, amountToShift);
  };

  return offsetForLeftOfGameBoard;
};

export default useOffsetForLeftOfGameBoard;
