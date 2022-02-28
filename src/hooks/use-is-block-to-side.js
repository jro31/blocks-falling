import { squaresRef } from '../components/GameBoard';
import { left, live } from '../store/game-board';

const useIsBlockToSide = () => {
  const isBlockToSide = direction => {
    let besideSquaresStatusArray = [];

    Object.keys(squaresRef.current).forEach(outerKey =>
      Object.keys(squaresRef.current[outerKey]).forEach(innerKey => {
        if (squaresRef.current[outerKey][innerKey].status === live) {
          besideSquaresStatusArray.push(
            squaresRef.current[outerKey][parseInt(innerKey) + (direction === left ? -1 : 1)].status
          );
        }
      })
    );

    return besideSquaresStatusArray.includes('settled');
  };

  return isBlockToSide;
};

export default useIsBlockToSide;
