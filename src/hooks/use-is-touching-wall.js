import { squaresRef } from '../components/GameBoard';

const useIsTouchingWall = () => {
  const isTouchingWall = direction => {
    if (direction !== 'left' && direction !== 'right')
      throw new Error('Incorrect direction passed to useIsTouchingWall');

    let statusArray = [];

    Object.keys(squaresRef.current).forEach(outerKey => {
      statusArray.push(squaresRef.current[outerKey][direction === 'left' ? 1 : 10].status);
    });

    return statusArray.includes('live');
  };

  return isTouchingWall;
};

export default useIsTouchingWall;
