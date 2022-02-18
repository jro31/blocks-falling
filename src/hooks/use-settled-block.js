import { settled } from '../store/game-board';
import useLiveBlockShape from './use-live-block-shape';

const useSettledBlock = () => {
  const liveBlockShape = useLiveBlockShape();

  const settledBlock = () => {
    const initialShape = liveBlockShape();
    let returnBlock = {};

    Object.keys(initialShape).forEach(rowKey => {
      returnBlock[rowKey] = {};
      Object.keys(initialShape[rowKey]).forEach(columnKey => {
        returnBlock[rowKey][columnKey] = {
          status: settled,
          color: initialShape[rowKey][columnKey].color,
        };
      });
    });

    return returnBlock;
  };

  return settledBlock;
};

export default useSettledBlock;
