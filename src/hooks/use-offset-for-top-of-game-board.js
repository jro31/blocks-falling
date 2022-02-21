import useRowIsAboveGameBoard from './use-row-is-above-game-board';
import useBlockTopRowKey from './use-block-top-row-key';
import useShiftBlockDown from './use-shift-block-down';

const useOffsetForTopOfGameBoard = () => {
  const rowIsAboveGameBoard = useRowIsAboveGameBoard();
  const blockTopRowKey = useBlockTopRowKey();
  const shiftBlockDown = useShiftBlockDown();

  const offsetForTopOfGameBoard = block => {
    if (!rowIsAboveGameBoard(block)) return;

    shiftBlockDown(block, 1 - blockTopRowKey(block));
  };

  return offsetForTopOfGameBoard;
};

export default useOffsetForTopOfGameBoard;
