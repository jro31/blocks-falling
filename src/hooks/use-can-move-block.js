import useIsTouchingBottom from './use-is-touching-bottom';
import useIsTouchingWall from './use-is-touching-wall';
import useIsBlockBelow from './use-is-block-below';
import useIsBlockToSide from './use-is-block-to-side';

const useCanMoveBlock = () => {
  const isTouchingBottom = useIsTouchingBottom();
  const isTouchingWall = useIsTouchingWall();
  const isBlockBelow = useIsBlockBelow();
  const isBlockToSide = useIsBlockToSide();

  const down = () => {
    return !isTouchingBottom() && !isBlockBelow();
  };

  const left = () => {
    return !isTouchingWall('left') && !isBlockToSide('left');
  };

  const right = () => {
    return !isTouchingWall('right') && !isBlockToSide('right');
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
