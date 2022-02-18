import useColumnIsRightOfGameBoard from './use-column-is-right-of-game-board';
import useColumnKeyIntegers from './use-column-key-integers';
import useShiftBlockLeft from './use-shift-block-left';

const useOffsetForRightOfGameBoard = () => {
  const columnIsRightOfGameBoard = useColumnIsRightOfGameBoard();
  const columnKeyIntegers = useColumnKeyIntegers();
  const shiftBlockLeft = useShiftBlockLeft();

  const offsetForRightOfGameBoard = block => {
    if (!columnIsRightOfGameBoard(block)) return;

    const rightestColumn = Math.max(...columnKeyIntegers(block));
    const amountToShift = rightestColumn - 10;

    shiftBlockLeft(block, amountToShift);
  };

  return offsetForRightOfGameBoard;
};

export default useOffsetForRightOfGameBoard;
