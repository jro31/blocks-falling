import { squaresRef } from '../components/GameBoard';
import { left, live, right } from '../store/game-board';

const useIsTouchingWall = () => {
  const isTouchingWall = direction => {
    if (direction !== left && direction !== right)
      throw new Error('Incorrect direction passed to useIsTouchingWall');

    let statusArray = [];

    Object.keys(squaresRef.current).forEach(rowKey => {
      statusArray.push(squaresRef.current[rowKey][direction === left ? 1 : 10].status);
    });

    return statusArray.includes(live);
  };

  return isTouchingWall;
};

export default useIsTouchingWall;
