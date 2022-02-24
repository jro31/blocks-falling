import useLiveBlockShape from './use-live-block-shape';
import useBlockTopRowKey from './use-block-top-row-key';
import useBlockFirstColumnKey from './use-block-first-column-key';
import useRowKeyIntegers from './use-row-key-integers';
import useOffsetPosition from './use-offset-position';

import { clockwise, down, left, live, right, tBlock } from '../store/game-board';

const useRotateTBlock = () => {
  const liveBlockShape = useLiveBlockShape();
  const blockTopRowKey = useBlockTopRowKey();
  const blockFirstColumnKey = useBlockFirstColumnKey();
  const rowKeyIntegers = useRowKeyIntegers();
  const offsetPosition = useOffsetPosition();

  let returnBlock = {};

  const rotateTBlock = direction => {
    const initialShape = liveBlockShape();

    returnBlock = {};
    const tSquare = { status: live, block: tBlock };

    const topRowKey = blockTopRowKey(initialShape);
    const firstColumnKey = blockFirstColumnKey(initialShape);

    const position = () => {
      if (Object.keys(initialShape[topRowKey]).length === 3) {
        return down;
      } else if (rowKeyIntegers(initialShape).length === 2) {
        return 'up';
      } else if (firstColumnKey === parseInt(Object.keys(initialShape[topRowKey])[0])) {
        return right;
      } else {
        return left;
      }
    };

    const buildDownTBlock = (firstRow, firstColumn) => {
      [...Array(2)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        if (index === 0) {
          returnBlock[firstRow][firstColumn] = tSquare;
          returnBlock[firstRow][firstColumn + 1] = tSquare;
          returnBlock[firstRow][firstColumn + 2] = tSquare;
        }
        if (index === 1) returnBlock[firstRow + index][firstColumn + 1] = tSquare;
      });
    };

    const buildUpTBlock = (firstRow, firstColumn) => {
      [...Array(2)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        if (index === 0) returnBlock[firstRow][firstColumn + 1] = tSquare;
        if (index === 1) {
          returnBlock[firstRow + index][firstColumn] = tSquare;
          returnBlock[firstRow + index][firstColumn + 1] = tSquare;
          returnBlock[firstRow + index][firstColumn + 2] = tSquare;
        }
      });
    };

    const buildRightTBlock = (firstRow, firstColumn) => {
      [...Array(3)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        if (index === 0) returnBlock[firstRow][firstColumn] = tSquare;
        if (index === 1) {
          returnBlock[firstRow + index][firstColumn] = tSquare;
          returnBlock[firstRow + index][firstColumn + 1] = tSquare;
        }
        if (index === 2) returnBlock[firstRow + index][firstColumn] = tSquare;
      });
    };

    const buildLeftTBlock = (firstRow, firstColumn) => {
      [...Array(3)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        if (index === 0) returnBlock[firstRow][firstColumn + 1] = tSquare;
        if (index === 1) {
          returnBlock[firstRow + index][firstColumn] = tSquare;
          returnBlock[firstRow + index][firstColumn + 1] = tSquare;
        }
        if (index === 2) returnBlock[firstRow + index][firstColumn + 1] = tSquare;
      });
    };

    if (position() === down) {
      direction === clockwise
        ? buildLeftTBlock(topRowKey - 1, firstColumnKey)
        : buildRightTBlock(topRowKey - 1, firstColumnKey + 1);
    } else if (position() === 'up') {
      direction === clockwise
        ? buildRightTBlock(topRowKey, firstColumnKey + 1)
        : buildLeftTBlock(topRowKey, firstColumnKey);
    } else if (position() === right) {
      direction === clockwise
        ? buildDownTBlock(topRowKey + 1, firstColumnKey - 1)
        : buildUpTBlock(topRowKey, firstColumnKey - 1);
    } else {
      direction === clockwise
        ? buildUpTBlock(topRowKey, firstColumnKey)
        : buildDownTBlock(topRowKey + 1, firstColumnKey);
    }

    if (offsetPosition(returnBlock)) {
      return returnBlock;
    }

    return false;
  };

  return rotateTBlock;
};

export default useRotateTBlock;
