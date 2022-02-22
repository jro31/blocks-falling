import { useDispatch } from 'react-redux';

import { gameBoardActions } from '../store/game-board';
import useCanMoveBlock from './use-can-move-block';
import useLiveBlockShape from './use-live-block-shape';
import useUpdatedGameBoard from './use-updated-game-board';
import useSettledBlock from './use-settled-block';
import useCompletedRows from './use-completed-rows';

const useMoveBlockDown = () => {
  const dispatch = useDispatch();
  const canMove = useCanMoveBlock();
  const liveBlockShape = useLiveBlockShape();
  const updatedGameBoard = useUpdatedGameBoard();
  const settledBlock = useSettledBlock();
  const completedRows = useCompletedRows();

  const moveBlockDown = () => {
    dispatch(gameBoardActions.stopTimer());

    if (canMove('down')) {
      const initialShape = liveBlockShape();
      let movedBlock = {};

      Object.keys(initialShape).forEach(rowKey => {
        movedBlock[parseInt(rowKey) + 1] = {};
        Object.keys(initialShape[rowKey]).forEach(columnKey => {
          movedBlock[parseInt(rowKey) + 1][columnKey] = initialShape[rowKey][columnKey];
        });
      });

      dispatch(gameBoardActions.updateGameBoard(updatedGameBoard(movedBlock)));
    } else {
      dispatch(gameBoardActions.updateGameBoard(updatedGameBoard(settledBlock())));
      // TODO - Clear any complete lines, move above blocks down
      console.log(completedRows());
      dispatch(gameBoardActions.nextBlock());
    }
    dispatch(gameBoardActions.startTimer());
  };

  return moveBlockDown;
};

export default useMoveBlockDown;
