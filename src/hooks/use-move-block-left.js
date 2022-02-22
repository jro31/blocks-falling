import { useDispatch } from 'react-redux';

import { gameBoardActions } from '../store/game-board';
import useCanMoveBlock from './use-can-move-block';
import useLiveBlockShape from './use-live-block-shape';
import useUpdatedGameBoard from './use-updated-game-board';

const useMoveBlockLeft = () => {
  const dispatch = useDispatch();
  const canMove = useCanMoveBlock();
  const liveBlockShape = useLiveBlockShape();
  const updatedGameBoard = useUpdatedGameBoard();

  const moveBlockLeft = () => {
    if (!canMove('left')) return;

    const initialShape = liveBlockShape();
    let movedBlock = {};

    Object.keys(initialShape).forEach(rowKey => {
      movedBlock[rowKey] = {};
      Object.keys(initialShape[rowKey]).forEach(columnKey => {
        movedBlock[rowKey][parseInt(columnKey) - 1] = initialShape[rowKey][columnKey];
      });
    });

    dispatch(gameBoardActions.updateGameBoard(updatedGameBoard(movedBlock)));
  };

  return moveBlockLeft;
};

export default useMoveBlockLeft;
