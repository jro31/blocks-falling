import useOffsetForTopOfGameBoard from './use-offset-for-top-of-game-board';
import useOffsetForBottomOfGameBoard from './use-offset-for-bottom-of-game-board';
import useOffsetForLeftOfGameBoard from './use-offset-for-left-of-game-board';
import useOffsetForRightOfGameBoard from './use-offset-for-right-of-game-board';

const useOffsetPosition = () => {
  const offsetForTopOfGameBoard = useOffsetForTopOfGameBoard();
  const offsetForBottomOfGameBoard = useOffsetForBottomOfGameBoard();
  const offsetForLeftOfGameBoard = useOffsetForLeftOfGameBoard();
  const offsetForRightOfGameBoard = useOffsetForRightOfGameBoard();

  const offsetForGameBoard = block => {
    offsetForTopOfGameBoard(block);
    offsetForBottomOfGameBoard(block);
    offsetForLeftOfGameBoard(block);
    offsetForRightOfGameBoard(block);
  };

  const offsetForOtherBlocks = block => {
    // TODO
  };

  const offsetPosition = block => {
    offsetForGameBoard(block);
    offsetForOtherBlocks(block);
  };

  return offsetPosition;
};

export default useOffsetPosition;
