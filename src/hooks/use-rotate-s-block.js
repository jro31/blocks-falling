import useLiveBlockShape from './use-live-block-shape';
import useBlockTopRowKey from './use-block-top-row-key';
import useOffsetPosition from './use-offset-position';

import { sBlock, live } from '../store/game-board';

const useRotateSBlock = () => {
  const liveBlockShape = useLiveBlockShape();
  const blockTopRowKey = useBlockTopRowKey();
  const offsetPosition = useOffsetPosition();

  let returnBlock = {};

  const rotateSBlock = () => {
    const initialShape = liveBlockShape();

    returnBlock = {};
    const sSquare = { status: live, block: sBlock };

    const topRowKey = blockTopRowKey(initialShape);
    const blockTopRow = initialShape[topRowKey];

    const position = () => (Object.keys(blockTopRow).length === 2 ? 'horizontal' : 'vertical');

    if (position() === 'horizontal') {
      const firstColumn = parseInt(Object.keys(initialShape[topRowKey + 1])[0]);

      [...Array(3)].forEach((_, index) => {
        returnBlock[topRowKey + index] = {};
        if (index === 0) returnBlock[topRowKey][firstColumn] = sSquare;
        if (index === 1) {
          returnBlock[topRowKey + index][firstColumn] = sSquare;
          returnBlock[topRowKey + index][firstColumn + 1] = sSquare;
        }
        if (index === 2) returnBlock[topRowKey + index][firstColumn + 1] = sSquare;
      });
    } else {
      const firstColumn = parseInt(Object.keys(initialShape[topRowKey])[0]);

      [...Array(2)].forEach((_, index) => {
        returnBlock[topRowKey + index] = {};
        if (index === 0) {
          returnBlock[topRowKey][firstColumn + 1] = sSquare;
          returnBlock[topRowKey][firstColumn + 2] = sSquare;
        }
        if (index === 1) {
          returnBlock[topRowKey + index][firstColumn] = sSquare;
          returnBlock[topRowKey + index][firstColumn + 1] = sSquare;
        }
      });
    }

    if (offsetPosition(returnBlock)) {
      return returnBlock;
    }

    return false;
  };

  return rotateSBlock;
};

export default useRotateSBlock;
