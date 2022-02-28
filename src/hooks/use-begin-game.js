import { useDispatch } from 'react-redux';

import { statusRef } from '../components/GameBoard';
import { gameBoardActions, gameOver } from '../store/game-board';

const useBeginGame = () => {
  const dispatch = useDispatch();

  const beginGame = () => {
    if (statusRef.current === gameOver) dispatch(gameBoardActions.resetGame());
    dispatch(gameBoardActions.startGame());
    dispatch(gameBoardActions.nextBlock());
  };

  return beginGame;
};

export default useBeginGame;
