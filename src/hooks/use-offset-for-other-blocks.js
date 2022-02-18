import useOverlapsOtherBlock from './use-overlaps-other-block';
import useBlockCanBeHere from './use-block-can-be-here';
import useShiftBlockUp from './use-shift-block-up';
import useShiftBlockDown from './use-shift-block-down';
import useShiftBlockLeft from './use-shift-block-left';
import useShiftBlockRight from './use-shift-block-right';

const useOffsetForOtherBlocks = () => {
  const overlapsOtherBlock = useOverlapsOtherBlock();
  const blockCanBeHere = useBlockCanBeHere();
  const shiftBlockUp = useShiftBlockUp();
  const shiftBlockDown = useShiftBlockDown();
  const shiftBlockLeft = useShiftBlockLeft();
  const shiftBlockRight = useShiftBlockRight();

  const offsetForOtherBlocks = block => {
    if (!overlapsOtherBlock(block)) return true;

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
      return true;
    }

    resetShiftedBlock();
    shiftBlockUp(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return true;
    }

    resetShiftedBlock();
    shiftBlockLeft(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return true;
    }

    resetShiftedBlock();
    shiftBlockRight(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return true;
    }

    resetShiftedBlock();
    shiftBlockDown(shiftedBlock);
    shiftBlockLeft(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return true;
    }

    resetShiftedBlock();
    shiftBlockDown(shiftedBlock);
    shiftBlockRight(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return true;
    }

    resetShiftedBlock();
    shiftBlockUp(shiftedBlock);
    shiftBlockLeft(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return true;
    }

    resetShiftedBlock();
    shiftBlockUp(shiftedBlock);
    shiftBlockRight(shiftedBlock);
    if (blockCanBeHere(shiftedBlock)) {
      updateBlock();
      return true;
    }

    return false;
  };

  return offsetForOtherBlocks;
};

export default useOffsetForOtherBlocks;
