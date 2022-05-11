import { squaresRef } from '../components/GameBoard';
import { live } from '../store/game-board';

const useLiveBlockShape = () => {
  const liveBlockShape = () => {
    let returnObject = {};

    Object.keys(squaresRef.current).forEach(rowKey =>
      Object.keys(squaresRef.current[rowKey]).forEach(columnKey => {
        if (squaresRef.current[rowKey][columnKey].status === live) {
          if (!returnObject[rowKey]) returnObject[rowKey] = {};
          if (!returnObject[rowKey][columnKey]) returnObject[rowKey][columnKey] = {};
          returnObject[rowKey][columnKey].status = live;
          returnObject[rowKey][columnKey].block = squaresRef.current[rowKey][columnKey].block;
        }
      })
    );

    return returnObject;
  };

  return liveBlockShape;
};

export default useLiveBlockShape;
