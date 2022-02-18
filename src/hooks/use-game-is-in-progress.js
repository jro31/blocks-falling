import { statusRef } from '../components/GameBoard';
import { inProgress } from '../store/game-board';

const useGameIsInProgress = () => {
  const gameIsInProgress = () => statusRef.current === inProgress;

  return gameIsInProgress;
};

export default useGameIsInProgress;
