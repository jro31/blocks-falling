import { squaresRef } from '../components/GameBoard';
import { left, live } from '../store/game-board';

const useIsBlockToSide = () => {
  const isBlockToSide = direction => {
    let besideSquaresStatusArray = [];

    Object.keys(squaresRef.current).forEach(rowKey =>
      Object.keys(squaresRef.current[rowKey]).forEach(columnKey => {
        if (squaresRef.current[rowKey][columnKey].status === live) {
          besideSquaresStatusArray.push(
            squaresRef.current[rowKey][parseInt(columnKey) + (direction === left ? -1 : 1)].status
          );
        }
      })
    );

    return besideSquaresStatusArray.includes('settled');
  };

  return isBlockToSide;
};

export default useIsBlockToSide;
