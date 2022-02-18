import { squaresRef } from '../components/GameBoard';
import useOverlapsOtherBlock from './use-overlaps-other-block';

const useOffsetForOtherBlocks = () => {
  const overlapsOtherBlock = useOverlapsOtherBlock();

  const offsetForOtherBlocks = block => {
    if (!overlapsOtherBlock(block)) return;

    // Cannot move to a position outside the gameboard
    // Cannot move into other blocks
  };

  return offsetForOtherBlocks;
};

export default useOffsetForOtherBlocks;
