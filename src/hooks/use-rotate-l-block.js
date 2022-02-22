import useLiveBlockShape from './use-live-block-shape';
import useBlockTopRowKey from './use-block-top-row-key';
import useBlockFirstColumnKey from './use-block-first-column-key';
import useRowKeyIntegers from './use-row-key-integers';
import useOffsetPosition from './use-offset-position';

import { clockwise, live, lBlock } from '../store/game-board';

const useRotateLBlock = () => {
  const liveBlockShape = useLiveBlockShape();
  const blockTopRowKey = useBlockTopRowKey();
  const blockFirstColumnKey = useBlockFirstColumnKey();
  const rowKeyIntegers = useRowKeyIntegers();
  const offsetPosition = useOffsetPosition();

  let returnBlock = {};

  const rotateLBlock = direction => {
    const initialShape = liveBlockShape();

    returnBlock = {};
    const lSquare = { status: live, block: lBlock };

    const topRowKey = blockTopRowKey(initialShape);
    const firstColumnKey = blockFirstColumnKey(initialShape);

    const position = () => {
      if (rowKeyIntegers(initialShape).length === 3) {
        return Object.keys(initialShape[topRowKey]).length === 1 ? '1-1-2' : '2-1-1';
      } else {
        return Object.keys(initialShape[topRowKey]).length === 3 ? '3-1' : '1-3';
      }
    };

    const build1_1_2Block = (firstRow, firstColumn) => {
      [...Array(3)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        if (index === 0) returnBlock[firstRow][firstColumn] = lSquare;
        if (index === 1) returnBlock[firstRow + index][firstColumn] = lSquare;
        if (index === 2) {
          returnBlock[firstRow + index][firstColumn] = lSquare;
          returnBlock[firstRow + index][firstColumn + 1] = lSquare;
        }
      });
    };

    const build2_1_1Block = (firstRow, firstColumn) => {
      [...Array(3)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        if (index === 0) {
          returnBlock[firstRow][firstColumn] = lSquare;
          returnBlock[firstRow][firstColumn + 1] = lSquare;
        }
        if (index === 1) returnBlock[firstRow + index][firstColumn + 1] = lSquare;
        if (index === 2) returnBlock[firstRow + index][firstColumn + 1] = lSquare;
      });
    };

    const build3_1Block = (firstRow, firstColumn) => {
      [...Array(2)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        if (index === 0) {
          returnBlock[firstRow][firstColumn] = lSquare;
          returnBlock[firstRow][firstColumn + 1] = lSquare;
          returnBlock[firstRow][firstColumn + 2] = lSquare;
        }
        if (index === 1) returnBlock[firstRow + index][firstColumn] = lSquare;
      });
    };

    const build1_3Block = (firstRow, firstColumn) => {
      [...Array(2)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        if (index === 0) returnBlock[firstRow][firstColumn + 2] = lSquare;
        if (index === 1) {
          returnBlock[firstRow + index][firstColumn] = lSquare;
          returnBlock[firstRow + index][firstColumn + 1] = lSquare;
          returnBlock[firstRow + index][firstColumn + 2] = lSquare;
        }
      });
    };

    if (position() === '1-1-2') {
      direction === clockwise
        ? build3_1Block(topRowKey + 1, firstColumnKey - 1)
        : build1_3Block(topRowKey, firstColumnKey - 1);
    } else if (position() === '2-1-1') {
      direction === clockwise
        ? build1_3Block(topRowKey, firstColumnKey)
        : build3_1Block(topRowKey + 1, firstColumnKey);
    } else if (position() === '3-1') {
      direction === clockwise
        ? build2_1_1Block(topRowKey - 1, firstColumnKey)
        : build1_1_2Block(topRowKey - 1, firstColumnKey + 1);
    } else {
      direction === clockwise
        ? build1_1_2Block(topRowKey, firstColumnKey + 1)
        : build2_1_1Block(topRowKey, firstColumnKey);
    }

    if (offsetPosition(returnBlock)) {
      return returnBlock;
    }

    return false;
  };

  return rotateLBlock;
};

export default useRotateLBlock;
