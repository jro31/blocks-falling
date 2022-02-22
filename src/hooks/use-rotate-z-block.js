import useLiveBlockShape from './use-live-block-shape';
import useBlockTopRowKey from './use-block-top-row-key';
import useBlockFirstColumnKey from './use-block-first-column-key';
import useOffsetPosition from './use-offset-position';

import { live, zBlock } from '../store/game-board';

const useRotateZBlock = () => {
  const liveBlockShape = useLiveBlockShape();
  const blockTopRowKey = useBlockTopRowKey();
  const blockFirstColumnKey = useBlockFirstColumnKey();
  const offsetPosition = useOffsetPosition();

  let returnBlock = {};

  const rotateZBlock = () => {
    const initialShape = liveBlockShape();

    returnBlock = {};
    const zSquare = { status: live, block: zBlock };

    const topRowKey = blockTopRowKey(initialShape);
    const firstColumnKey = blockFirstColumnKey(initialShape);

    const position = () =>
      Object.keys(initialShape[topRowKey]).length === 2 ? 'horizontal' : 'vertical';

    if (position() === 'horizontal') {
      [...Array(3)].forEach((_, index) => {
        returnBlock[topRowKey + index] = {};
        if (index === 0) returnBlock[topRowKey][firstColumnKey + 1] = zSquare;
        if (index === 1) {
          returnBlock[topRowKey + index][firstColumnKey] = zSquare;
          returnBlock[topRowKey + index][firstColumnKey + 1] = zSquare;
        }
        if (index === 2) returnBlock[topRowKey + index][firstColumnKey] = zSquare;
      });
    } else {
      [...Array(2)].forEach((_, index) => {
        returnBlock[topRowKey + index] = {};
        if (index === 0) {
          returnBlock[topRowKey][firstColumnKey] = zSquare;
          returnBlock[topRowKey][firstColumnKey + 1] = zSquare;
        }
        if (index === 1) {
          returnBlock[topRowKey + index][firstColumnKey + 1] = zSquare;
          returnBlock[topRowKey + index][firstColumnKey + 2] = zSquare;
        }
      });
    }

    if (offsetPosition(returnBlock)) {
      return returnBlock;
    }

    return false;
  };

  return rotateZBlock;
};

export default useRotateZBlock;
