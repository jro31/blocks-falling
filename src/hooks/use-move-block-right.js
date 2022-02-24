import { useDispatch } from 'react-redux';

import { gameBoardActions, right } from '../store/game-board';
import useCanMoveBlock from './use-can-move-block';
import useLiveBlockShape from './use-live-block-shape';
import useUpdatedGameBoard from './use-updated-game-board';

const useMoveBlockRight = () => {
  const dispatch = useDispatch();
  const canMove = useCanMoveBlock();
  const liveBlockShape = useLiveBlockShape();
  const updatedGameBoard = useUpdatedGameBoard();

  const moveBlockRight = () => {
    if (!canMove(right)) return;

    const initialShape = liveBlockShape();
    let movedBlock = {};

    Object.keys(initialShape).forEach(rowKey => {
      movedBlock[rowKey] = {};
      Object.keys(initialShape[rowKey]).forEach(columnKey => {
        movedBlock[rowKey][parseInt(columnKey) + 1] = initialShape[rowKey][columnKey];
      });
    });

    dispatch(gameBoardActions.updateGameBoard(updatedGameBoard(movedBlock)));
  };

  return moveBlockRight;
};

export default useMoveBlockRight;
