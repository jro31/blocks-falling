import useIsTouchingBottom from './use-is-touching-bottom';
import useIsTouchingWall from './use-is-touching-wall';
import useIsBlockBelow from './use-is-block-below';
import useIsBlockToSide from './use-is-block-to-side';
import useGameIsInProgress from './use-game-is-in-progress';
import { down, left, right } from '../store/game-board';

const useCanMoveBlock = () => {
  const isTouchingBottom = useIsTouchingBottom();
  const isTouchingWall = useIsTouchingWall();
  const isBlockBelow = useIsBlockBelow();
  const isBlockToSide = useIsBlockToSide();
  const gameIsInProgress = useGameIsInProgress();

  const canMoveDown = () => {
    return !isTouchingBottom() && !isBlockBelow();
  };

  const canMoveLeft = () => {
    return !isTouchingWall(left) && !isBlockToSide(left);
  };

  const canMoveRight = () => {
    return !isTouchingWall(right) && !isBlockToSide(right);
  };

  const canMove = direction => {
    if (!gameIsInProgress()) return false;

    switch (direction) {
      case down:
        return canMoveDown();
      case left:
        return canMoveLeft();
      case right:
        return canMoveRight();
      default:
        return;
    }
  };

  return canMove;
};

export default useCanMoveBlock;
