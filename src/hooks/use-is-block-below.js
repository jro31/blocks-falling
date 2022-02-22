import { squaresRef } from '../components/GameBoard';
import { live } from '../store/game-board';

const useIsBlockBelow = () => {
  const isBlockBelow = () => {
    let belowSquaresStatusArray = [];

    Object.keys(squaresRef.current).forEach(outerKey =>
      Object.keys(squaresRef.current[outerKey]).forEach(innerKey => {
        if (squaresRef.current[outerKey][innerKey].status === live) {
          belowSquaresStatusArray.push(squaresRef.current[parseInt(outerKey) + 1][innerKey].status);
        }
      })
    );

    return belowSquaresStatusArray.includes('settled');
  };

  return isBlockBelow;
};

export default useIsBlockBelow;
