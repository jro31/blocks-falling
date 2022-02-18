import useOverlapsOtherBlock from './use-overlaps-other-block';
import useBlockCanBeHere from './use-block-can-be-here';
import useShiftBlockDown from './use-shift-block-down';
import useShiftBlockLeft from './use-shift-block-left';
import useShiftBlockRight from './use-shift-block-right';

const useOffsetForOtherBlocks = () => {
  const overlapsOtherBlock = useOverlapsOtherBlock();
  const blockCanBeHere = useBlockCanBeHere();
  const shiftBlockDown = useShiftBlockDown();
  const shiftBlockLeft = useShiftBlockLeft();
  const shiftBlockRight = useShiftBlockRight();

  const offsetForOtherBlocks = block => {
    if (!overlapsOtherBlock(block)) return;

    let shiftedBlock;

    const clearBlock = () => Object.keys(block).forEach(rowKey => delete block[rowKey]);

    const updateBlock = () => {
      clearBlock();

      Object.keys(shiftedBlock).forEach(rowKey => {
        block[rowKey] = {};
        Object.keys(shiftedBlock[rowKey]).forEach(columnKey => {
          block[rowKey][columnKey] = shiftedBlock[rowKey][columnKey];
        });
      });
    };

    const resetShiftedBlock = () => (shiftedBlock = JSON.parse(JSON.stringify(block)));

    resetShiftedBlock();
    shiftBlockDown(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return;
    }
    shiftBlockLeft(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return;
    }

    // Cannot move to a position outside the gameboard
    // Cannot move into other blocks
  };

  return offsetForOtherBlocks;
};

export default useOffsetForOtherBlocks;
