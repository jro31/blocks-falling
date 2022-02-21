import useLiveBlockShape from './use-live-block-shape';
import useOffsetPosition from './use-offset-position';

import { live, zBlock } from '../store/game-board';

const useRotateZBlock = () => {
  const liveBlockShape = useLiveBlockShape();
  const offsetPosition = useOffsetPosition();

  let returnBlock = {};

  const rotateZBlock = () => {
    const initialShape = liveBlockShape();

    returnBlock = {};
    const zSquare = { status: live, block: zBlock };

    // const position = () => (Object.keys(blockTopRow).length === 2 ? 'horizontal' : 'vertical');
  };

  return rotateZBlock;
};

export default useRotateZBlock;
