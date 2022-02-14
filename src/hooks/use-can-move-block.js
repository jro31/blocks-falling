import useIsTouchingBottom from './use-is-touching-bottom';
import useIsTouchingWall from './use-is-touching-wall';
import useIsBlockBelow from './use-is-block-below';

const useCanMoveBlock = () => {
  const isTouchingBottom = useIsTouchingBottom();
  const isTouchingWall = useIsTouchingWall();
  const isBlockBelow = useIsBlockBelow();

  const down = () => {
    // TODO - Update this to also consider if there are blocks to the beneath
    return !isTouchingBottom() && !isBlockBelow();
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
