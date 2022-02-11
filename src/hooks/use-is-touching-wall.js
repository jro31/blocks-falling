import { useSelector } from 'react-redux';

const useIsTouchingWall = () => {
  const squares = useSelector(state => state.gameBoard.squares);

  const isTouchingWall = direction => {
    if (direction !== 'left' && direction !== 'right')
      throw new Error('Incorrect direction passed to useIsTouchingWall');

    let statusArray = [];

    Object.keys(squares).forEach(outerKey => {
      statusArray.push(squares[outerKey][direction === 'left' ? 1 : 10].status);
    });

    return statusArray.includes('live');
  };

  return isTouchingWall;
};

export default useIsTouchingWall;
