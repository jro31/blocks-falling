import useRowIsBeneathGameBoard from './use-row-is-beneath-game-board';
import useBlockBottomRowKey from './use-block-bottom-row-key';
import useShiftBlockUp from './use-shift-block-up';

const useOffsetForBottomOfGameBoard = () => {
  const rowIsBeneathGameBoard = useRowIsBeneathGameBoard();
  const blockBottomRowKey = useBlockBottomRowKey();
  const shiftBlockUp = useShiftBlockUp();

  const offsetForBottomOfGameBoard = block => {
    if (!rowIsBeneathGameBoard(block)) return;

    shiftBlockUp(block, blockBottomRowKey(block) - 20);
  };

  return offsetForBottomOfGameBoard;
};

export default useOffsetForBottomOfGameBoard;
