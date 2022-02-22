import useRowIsAboveGameBoard from './use-row-is-above-game-board';
import useRowIsBeneathGameBoard from './use-row-is-beneath-game-board';
import useColumnIsLeftOfGameBoard from './use-column-is-left-of-game-board';
import useColumnIsRightOfGameBoard from './use-column-is-right-of-game-board';
import useOverlapsOtherBlock from './use-overlaps-other-block';

const useBlockCanBeHere = () => {
  const rowIsAboveGameBoard = useRowIsAboveGameBoard();
  const rowIsBeneathGameBoard = useRowIsBeneathGameBoard();
  const columnIsLeftOfGameBoard = useColumnIsLeftOfGameBoard();
  const columnIsRightOfGameBoard = useColumnIsRightOfGameBoard();
  const overlapsOtherBlock = useOverlapsOtherBlock();

  const blockCanBeHere = block => {
    return (
      !rowIsAboveGameBoard(block) &&
      !rowIsBeneathGameBoard(block) &&
      !columnIsLeftOfGameBoard(block) &&
      !columnIsRightOfGameBoard(block) &&
      !overlapsOtherBlock(block)
    );
  };

  return blockCanBeHere;
};

export default useBlockCanBeHere;
