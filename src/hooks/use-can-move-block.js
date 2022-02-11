import useIsTouchingWall from './use-is-touching-wall';

const useCanMoveBlock = () => {
  const isTouchingWall = useIsTouchingWall();

  const left = () => {
    // TODO - Update this to also consider if there are blocks to the left
    return !isTouchingWall('left');
  };

  const right = () => {
    // TODO - Update this to also consider if there are blocks to the right
    return !isTouchingWall('right');
  };

  const canMove = direction => {
    switch (direction) {
      case 'left':
        return left();
      case 'right':
        return right();
      default:
        return;
    }
  };

  return canMove;
};

export default useCanMoveBlock;
