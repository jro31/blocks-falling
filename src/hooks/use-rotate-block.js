import { useDispatch } from 'react-redux';

import { statusRef, liveBlockRef } from '../components/GameBoard';
import { inProgress, gameBoardActions } from '../store/game-board';
import useRotateIBlock from './use-rotate-i-block';
import useRotateJBlock from './use-rotate-j-block';
import useRotateLBlock from './use-rotate-l-block';
import useRotateSBlock from './use-rotate-s-block';
import useRotateTBlock from './use-rotate-t-block';
import useRotateZBlock from './use-rotate-z-block';
import useUpdatedGameBoard from './use-updated-game-board';

const useRotateBlock = () => {
  const dispatch = useDispatch();
  const rotateIBlock = useRotateIBlock();
  const rotateJBlock = useRotateJBlock();
  const rotateLBlock = useRotateLBlock();
  const rotateSBlock = useRotateSBlock();
  const rotateTBlock = useRotateTBlock();
  const rotateZBlock = useRotateZBlock();
  const updatedGameBoard = useUpdatedGameBoard();
  let rotatedBlock;

  const rotateBlock = (direction = null) => {
    rotatedBlock = null;

    if (statusRef.current === inProgress) {
      if (liveBlockRef.current === 'I') rotatedBlock = rotateIBlock();
      if (liveBlockRef.current === 'J') rotatedBlock = rotateJBlock(direction);
      if (liveBlockRef.current === 'L') rotatedBlock = rotateLBlock(direction);
      if (liveBlockRef.current === 'O') return;
      if (liveBlockRef.current === 'S') rotatedBlock = rotateSBlock();
      if (liveBlockRef.current === 'T') rotatedBlock = rotateTBlock(direction);
      if (liveBlockRef.current === 'Z') rotatedBlock = rotateZBlock();
      if (!rotatedBlock) return;

      dispatch(gameBoardActions.updateGameBoard(updatedGameBoard(rotatedBlock)));
    }
  };

  return rotateBlock;
};

export default useRotateBlock;
