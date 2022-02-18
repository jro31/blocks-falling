import { useDispatch } from 'react-redux';

import { statusRef, liveBlockRef } from '../components/GameBoard';
import { inProgress, gameBoardActions } from '../store/game-board';
import useRotateIBlock from './use-rotate-i-block';
import useUpdatedGameBoard from './use-updated-game-board';

const useRotateBlock = () => {
  const dispatch = useDispatch();
  const rotateIBlock = useRotateIBlock();
  const updatedGameBoard = useUpdatedGameBoard();

  const rotateBlock = (direction = null) => {
    if (statusRef.current === inProgress) {
      if (liveBlockRef.current === 'I')
        dispatch(gameBoardActions.updateGameBoard(updatedGameBoard(rotateIBlock())));
      if (liveBlockRef.current === 'O') return;
    }
  };

  return rotateBlock;
};

export default useRotateBlock;
