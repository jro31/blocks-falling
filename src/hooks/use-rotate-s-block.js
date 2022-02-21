import useLiveBlockShape from './use-live-block-shape';
import useOffsetPosition from './use-offset-position';

import { sBlock, live } from '../store/game-board';

const useRotateSBlock = () => {
  const liveBlockShape = useLiveBlockShape();
  const offsetPosition = useOffsetPosition();

  let returnBlock = {};

  const rotateSBlock = () => {
    const initialShape = liveBlockShape();

    returnBlock = {};
    const sSquare = { status: live, block: sBlock };

    const blockTopRowKey = parseInt(Object.keys(initialShape)[0]);
    const blockTopRow = initialShape[blockTopRowKey];

    const position = () => (Object.keys(blockTopRow).length === 2 ? 'horizontal' : 'vertical');

    if (position() === 'horizontal') {
      const firstColumn = parseInt(Object.keys(initialShape[blockTopRowKey + 1])[0]);

      [...Array(3)].forEach((_, index) => {
        returnBlock[blockTopRowKey + index] = {};
        if (index === 0) returnBlock[blockTopRowKey][firstColumn] = sSquare;
        if (index === 1) {
          returnBlock[blockTopRowKey + index][firstColumn] = sSquare;
          returnBlock[blockTopRowKey + index][firstColumn + 1] = sSquare;
        }
        if (index === 2) returnBlock[blockTopRowKey + index][firstColumn + 1] = sSquare;
      });
    } else {
      const firstColumn = parseInt(Object.keys(initialShape[blockTopRowKey])[0]);

      [...Array(2)].forEach((_, index) => {
        returnBlock[blockTopRowKey + index] = {};
        if (index === 0) {
          returnBlock[blockTopRowKey][firstColumn + 1] = sSquare;
          returnBlock[blockTopRowKey][firstColumn + 2] = sSquare;
        }
        if (index === 1) {
          returnBlock[blockTopRowKey + index][firstColumn] = sSquare;
          returnBlock[blockTopRowKey + index][firstColumn + 1] = sSquare;
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
