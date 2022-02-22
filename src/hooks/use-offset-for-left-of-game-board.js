import useColumnIsLeftOfGameBoard from './use-column-is-left-of-game-board';
import useBlockFirstColumnKey from './use-block-first-column-key';
import useShiftBlockRight from './use-shift-block-right';

const useOffsetForLeftOfGameBoard = () => {
  const columnIsLeftOfGameBoard = useColumnIsLeftOfGameBoard();
  const blockFirstColumnKey = useBlockFirstColumnKey();
  const shiftBlockRight = useShiftBlockRight();

  const offsetForLeftOfGameBoard = block => {
    if (!columnIsLeftOfGameBoard(block)) return;

    const amountToShift = 0 - blockFirstColumnKey(block) + 1;

    shiftBlockRight(block, amountToShift);
  };

  return offsetForLeftOfGameBoard;
};

export default useOffsetForLeftOfGameBoard;
