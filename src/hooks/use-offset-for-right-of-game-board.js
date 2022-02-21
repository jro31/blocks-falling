import useColumnIsRightOfGameBoard from './use-column-is-right-of-game-board';
import useBlockLastColumnKey from './use-block-last-column-key';
import useShiftBlockLeft from './use-shift-block-left';

const useOffsetForRightOfGameBoard = () => {
  const columnIsRightOfGameBoard = useColumnIsRightOfGameBoard();
  const blockLastColumnKey = useBlockLastColumnKey();
  const shiftBlockLeft = useShiftBlockLeft();

  const offsetForRightOfGameBoard = block => {
    if (!columnIsRightOfGameBoard(block)) return;

    const amountToShift = blockLastColumnKey(block) - 10;

    shiftBlockLeft(block, amountToShift);
  };

  return offsetForRightOfGameBoard;
};

export default useOffsetForRightOfGameBoard;
