import useLiveBlockShape from './use-live-block-shape';
import useBlockTopRowKey from './use-block-top-row-key';
import useBlockFirstColumnKey from './use-block-first-column-key';
import useOffsetPosition from './use-offset-position';

import { iBlock, live } from '../store/game-board';

const useRotateIBlock = () => {
  const liveBlockShape = useLiveBlockShape();
  const blockTopRowKey = useBlockTopRowKey();
  const blockFirstColumnKey = useBlockFirstColumnKey();
  const offsetPosition = useOffsetPosition();

  let returnBlock = {};

  const rotateIBlock = () => {
    const initialShape = liveBlockShape();

    returnBlock = {};
    const iSquare = { status: live, block: iBlock };

    const position = () => (Object.keys(initialShape).length === 1 ? 'horizontal' : 'vertical');

    if (position() === 'horizontal') {
      const firstRow = blockTopRowKey(initialShape) - 1;
      const newColumn = blockFirstColumnKey(initialShape) + 1;

      [...Array(4)].forEach((_, index) => {
        returnBlock[firstRow + index] = {};
        returnBlock[firstRow + index][newColumn] = iSquare;
      });
    } else {
      const newRow = blockTopRowKey(initialShape) + 1;
      const firstColumn = blockFirstColumnKey(initialShape) - 1;

      returnBlock[newRow] = {};

      [...Array(4)].forEach((_, index) => {
        returnBlock[newRow][firstColumn + index] = iSquare;
      });
    }

    if (offsetPosition(returnBlock)) {
      return returnBlock;
    }

    return false;
  };

  return rotateIBlock;
};

export default useRotateIBlock;
