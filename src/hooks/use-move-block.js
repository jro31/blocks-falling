import useGameIsInProgress from './use-game-is-in-progress';
import useMoveBlockDown from './use-move-block-down';
import useMoveBlockLeft from './use-move-block-left';
import useMoveBlockRight from './use-move-block-right';
import { down, left, right } from '../store/game-board';

const useMoveBlock = () => {
  const gameIsInProgress = useGameIsInProgress();
  const moveBlockDown = useMoveBlockDown();
  const moveBlockLeft = useMoveBlockLeft();
  const moveBlockRight = useMoveBlockRight();

  const moveBlock = direction => {
    if (!gameIsInProgress()) return;

    switch (direction) {
      case down:
        moveBlockDown();
        break;
      case left:
        moveBlockLeft();
        break;
      case right:
        moveBlockRight();
        break;
      default:
        throw new Error('Incorrect direction passed to useMoveBlock');
    }
  };

  return moveBlock;
};

export default useMoveBlock;
