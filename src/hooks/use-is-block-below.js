import { squaresRef } from '../components/GameBoard';
import { live, settled } from '../store/game-board';

const useIsBlockBelow = () => {
  const isBlockBelow = () => {
    let belowSquaresStatusArray = [];

    Object.keys(squaresRef.current).forEach(rowKey =>
      Object.keys(squaresRef.current[rowKey]).forEach(columnKey => {
        if (squaresRef.current[rowKey][columnKey].status === live) {
          belowSquaresStatusArray.push(squaresRef.current[parseInt(rowKey) + 1][columnKey].status);
        }
      })
    );

    return belowSquaresStatusArray.includes(settled);
  };

  return isBlockBelow;
};

export default useIsBlockBelow;
