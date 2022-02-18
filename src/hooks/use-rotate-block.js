import { useDispatch } from 'react-redux';

import { statusRef, liveBlockRef } from '../components/GameBoard';
import { inProgress, gameBoardActions } from '../store/game-board';
import useRotateIBlock from './use-rotate-i-block';
import useUpdatedGameBoard from './use-updated-game-board';

const useRotateBlock = () => {
  const dispatch = useDispatch();
  const rotateIBlock = useRotateIBlock();
  const updatedGameBoard = useUpdatedGameBoard();
  let rotatedBlock;

  const rotateBlock = (direction = null) => {
    rotatedBlock = null;

    if (statusRef.current === inProgress) {
      if (liveBlockRef.current === 'I') rotatedBlock = rotateIBlock();
      // TODO - J
      // TODO - L
      if (liveBlockRef.current === 'O') return;
      // TODO - S
      // TODO - T
      // TODO - Z
      if (!rotatedBlock) return;

      dispatch(gameBoardActions.updateGameBoard(updatedGameBoard(rotatedBlock)));
    }
  };

  return rotateBlock;
};

export default useRotateBlock;
