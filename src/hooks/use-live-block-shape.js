import { squaresRef } from '../components/GameBoard';
import { live } from '../store/game-board';

const useLiveBlockShape = () => {
  const liveBlockShape = () => {
    let returnObject = {};

    Object.keys(squaresRef.current).forEach(outerKey =>
      Object.keys(squaresRef.current[outerKey]).forEach(innerKey => {
        if (squaresRef.current[outerKey][innerKey].status === live) {
          if (!returnObject[outerKey]) returnObject[outerKey] = {};
          if (!returnObject[outerKey][innerKey]) returnObject[outerKey][innerKey] = {};
          returnObject[outerKey][innerKey].status = live;
          returnObject[outerKey][innerKey].block = squaresRef.current[outerKey][innerKey].block;
        }
      })
    );

    return returnObject;
  };

  return liveBlockShape;
};

export default useLiveBlockShape;
