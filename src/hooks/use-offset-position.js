import useOffsetForTopOfGameBoard from './use-offset-for-top-of-game-board';
import useOffsetForBottomOfGameBoard from './use-offset-for-bottom-of-game-board';
import useOffsetForLeftOfGameBoard from './use-offset-for-left-of-game-board';
import useOffsetForRightOfGameBoard from './use-offset-for-right-of-game-board';
import useOffsetForOtherBlocks from './use-offset-for-other-blocks';

const useOffsetPosition = () => {
  const offsetForTopOfGameBoard = useOffsetForTopOfGameBoard();
  const offsetForBottomOfGameBoard = useOffsetForBottomOfGameBoard();
  const offsetForLeftOfGameBoard = useOffsetForLeftOfGameBoard();
  const offsetForRightOfGameBoard = useOffsetForRightOfGameBoard();
  const offsetForOtherBlocks = useOffsetForOtherBlocks();

  const offsetForGameBoard = block => {
    offsetForTopOfGameBoard(block);
    offsetForBottomOfGameBoard(block);
    offsetForLeftOfGameBoard(block);
    offsetForRightOfGameBoard(block);
  };

  const offsetPosition = block => {
    offsetForGameBoard(block);
    offsetForOtherBlocks(block);
  };

  return offsetPosition;
};

export default useOffsetPosition;
