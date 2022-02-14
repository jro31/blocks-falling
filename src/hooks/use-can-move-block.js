import useIsTouchingBottom from './use-is-touching-bottom';
import useIsTouchingWall from './use-is-touching-wall';

const useCanMoveBlock = () => {
  const isTouchingBottom = useIsTouchingBottom();
  const isTouchingWall = useIsTouchingWall();

  const down = () => {
    // TODO - Update this to also consider if there are blocks to the beneath
    console.log(isTouchingBottom());

    return !isTouchingBottom();
  };

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
      case 'down':
        return down();
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
