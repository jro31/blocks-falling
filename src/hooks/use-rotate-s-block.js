import useLiveBlockShape from './use-live-block-shape';
import useBlockTopRowKey from './use-block-top-row-key';
import useBlockFirstColumnKey from './use-block-first-column-key';
import useOffsetPosition from './use-offset-position';

import { sBlock, live } from '../store/game-board';

const useRotateSBlock = () => {
  const liveBlockShape = useLiveBlockShape();
  const blockTopRowKey = useBlockTopRowKey();
  const blockFirstColumnKey = useBlockFirstColumnKey();
  const offsetPosition = useOffsetPosition();

  let returnBlock = {};

  const rotateSBlock = () => {
    const initialShape = liveBlockShape();

    returnBlock = {};
    const sSquare = { status: live, block: sBlock };

    const topRowKey = blockTopRowKey(initialShape);
    const firstColumnKey = blockFirstColumnKey(initialShape);

    const position = () =>
      Object.keys(initialShape[topRowKey]).length === 2 ? 'horizontal' : 'vertical';

    if (position() === 'horizontal') {
      [...Array(3)].forEach((_, index) => {
        returnBlock[topRowKey + index] = {};
        if (index === 0) returnBlock[topRowKey][firstColumnKey] = sSquare;
        if (index === 1) {
          returnBlock[topRowKey + index][firstColumnKey] = sSquare;
          returnBlock[topRowKey + index][firstColumnKey + 1] = sSquare;
        }
        if (index === 2) returnBlock[topRowKey + index][firstColumnKey + 1] = sSquare;
      });
    } else {
      [...Array(2)].forEach((_, index) => {
        returnBlock[topRowKey + index] = {};
        if (index === 0) {
          returnBlock[topRowKey][firstColumnKey + 1] = sSquare;
          returnBlock[topRowKey][firstColumnKey + 2] = sSquare;
        }
        if (index === 1) {
          returnBlock[topRowKey + index][firstColumnKey] = sSquare;
          returnBlock[topRowKey + index][firstColumnKey + 1] = sSquare;
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
