import { useDispatch } from 'react-redux';

import { gameBoardActions, live, settled } from '../store/game-board';
import { squaresRef } from '../components/GameBoard';
import useCanMoveBlock from './use-can-move-block';
import useLiveBlockShape from './use-live-block-shape';
import useUpdatedGameBoard from './use-updated-game-board';

const useMoveBlockDown = () => {
  const dispatch = useDispatch();
  const canMove = useCanMoveBlock();
  const liveBlockShape = useLiveBlockShape();
  const updatedGameBoard = useUpdatedGameBoard();

  const moveBlockDown = () => {
    dispatch(gameBoardActions.stopTimer());

    let existingObject = JSON.parse(JSON.stringify(squaresRef.current));
    let newObject = JSON.parse(JSON.stringify(existingObject));

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
      Object.keys(existingObject)
        .reverse()
        .forEach(outerKey =>
          Object.keys(existingObject[outerKey]).forEach(innerKey => {
            if (existingObject[outerKey][innerKey].status === live) {
              newObject[outerKey][innerKey] = {
                status: settled,
                color: existingObject[outerKey][innerKey].color,
              };
            }
          })
        );

      dispatch(gameBoardActions.updateGameBoard(newObject));
      // TODO - Clear any complete lines, move above blocks down
      dispatch(gameBoardActions.nextBlock());
    }
    dispatch(gameBoardActions.startTimer());
  };

  return moveBlockDown;
};

export default useMoveBlockDown;
