import { useDispatch } from 'react-redux';

import { statusRef, liveBlockRef } from '../components/GameBoard';
import { inProgress, gameBoardActions } from '../store/game-board';
import useRotateIBlock from './use-rotate-i-block';
import useRotateSBlock from './use-rotate-s-block';
import useRotateZBlock from './use-rotate-z-block';
import useUpdatedGameBoard from './use-updated-game-board';

const useRotateBlock = () => {
  const dispatch = useDispatch();
  const rotateIBlock = useRotateIBlock();
  const rotateSBlock = useRotateSBlock();
  const rotateZBlock = useRotateZBlock();
  const updatedGameBoard = useUpdatedGameBoard();
  let rotatedBlock;

  const rotateBlock = (direction = null) => {
    rotatedBlock = null;

    if (statusRef.current === inProgress) {
      if (liveBlockRef.current === 'I') rotatedBlock = rotateIBlock();
      // TODO - J
      // TODO - L
      if (liveBlockRef.current === 'O') return;
      if (liveBlockRef.current === 'S') rotatedBlock = rotateSBlock();
      // TODO - T
      if (liveBlockRef.current === 'Z') rotatedBlock = rotateZBlock();
      if (!rotatedBlock) return;

      dispatch(gameBoardActions.updateGameBoard(updatedGameBoard(rotatedBlock)));
    }
  };

  return rotateBlock;
};

export default useRotateBlock;
